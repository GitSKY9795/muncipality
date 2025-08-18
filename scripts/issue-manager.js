// Municipal Issue Reporting System - Issue Management

class IssueManager {
    constructor() {
        this.issues = window.issuesData.sampleIssues;
        this.filters = {
            category: '',
            status: '',
            search: '',
            priority: ''
        };
        
        this.init();
    }

    init() {
        this.bindFilterEvents();
        this.bindRefreshEvents();
    }

    bindFilterEvents() {
        // Bind filter buttons
        const filterBtn = document.getElementById('filterBtn');
        if (filterBtn) {
            filterBtn.addEventListener('click', this.toggleFilters.bind(this));
        }

        // Bind map filters
        const mapCategoryFilter = document.getElementById('mapCategoryFilter');
        const mapStatusFilter = document.getElementById('mapStatusFilter');
        
        if (mapCategoryFilter) {
            mapCategoryFilter.addEventListener('change', this.handleMapFilters.bind(this));
        }
        
        if (mapStatusFilter) {
            mapStatusFilter.addEventListener('change', this.handleMapFilters.bind(this));
        }

        // Bind admin filters
        const adminCategoryFilter = document.getElementById('adminCategoryFilter');
        const adminStatusFilter = document.getElementById('adminStatusFilter');
        const adminSearchFilter = document.getElementById('adminSearchFilter');
        
        if (adminCategoryFilter) {
            adminCategoryFilter.addEventListener('change', this.handleAdminFilters.bind(this));
        }
        
        if (adminStatusFilter) {
            adminStatusFilter.addEventListener('change', this.handleAdminFilters.bind(this));
        }
        
        if (adminSearchFilter) {
            adminSearchFilter.addEventListener('input', this.debounce(this.handleAdminFilters.bind(this), 300));
        }
    }

    bindRefreshEvents() {
        const refreshBtn = document.getElementById('refreshBtn');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', this.refreshData.bind(this));
        }
    }

    toggleFilters() {
        // Toggle filter panel visibility
        console.log('Toggle filters');
        // Implementation for showing/hiding filter options
    }

    handleMapFilters() {
        const categoryFilter = document.getElementById('mapCategoryFilter');
        const statusFilter = document.getElementById('mapStatusFilter');
        
        this.filters.category = categoryFilter ? categoryFilter.value : '';
        this.filters.status = statusFilter ? statusFilter.value : '';
        
        // Apply filters to map
        if (window.app && window.app.mapHandler) {
            window.app.mapHandler.filterMapMarkers(this.filters);
        }
    }

    handleAdminFilters() {
        const categoryFilter = document.getElementById('adminCategoryFilter');
        const statusFilter = document.getElementById('adminStatusFilter');
        const searchFilter = document.getElementById('adminSearchFilter');
        
        this.filters.category = categoryFilter ? categoryFilter.value : '';
        this.filters.status = statusFilter ? statusFilter.value : '';
        this.filters.search = searchFilter ? searchFilter.value.toLowerCase() : '';
        
        this.filterAdminTable();
    }

    filterAdminTable() {
        const tbody = document.getElementById('adminIssuesTableBody');
        if (!tbody) return;

        let filteredIssues = [...this.issues];

        // Apply category filter
        if (this.filters.category) {
            filteredIssues = filteredIssues.filter(issue => issue.category === this.filters.category);
        }

        // Apply status filter
        if (this.filters.status) {
            filteredIssues = filteredIssues.filter(issue => issue.status === this.filters.status);
        }

        // Apply search filter
        if (this.filters.search) {
            filteredIssues = filteredIssues.filter(issue => 
                issue.title.toLowerCase().includes(this.filters.search) ||
                issue.description.toLowerCase().includes(this.filters.search) ||
                issue.location.toLowerCase().includes(this.filters.search) ||
                issue.reporterName.toLowerCase().includes(this.filters.search)
            );
        }

        this.renderAdminTable(filteredIssues);
    }

    renderAdminTable(issues) {
        const tbody = document.getElementById('adminIssuesTableBody');
        if (!tbody) return;

        if (issues.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="8" class="empty-state">
                        <div style="text-align: center; padding: 2rem;">
                            <i class="fas fa-search" style="font-size: 2rem; color: #ccc; margin-bottom: 1rem;"></i>
                            <p>No issues found matching your criteria.</p>
                        </div>
                    </td>
                </tr>
            `;
            return;
        }

        let tableHTML = '';
        issues.forEach(issue => {
            const category = window.issuesData.categoryConfig[issue.category];
            const statusClass = issue.status.replace('-', '');
            
            tableHTML += `
                <tr data-issue-id="${issue.id}">
                    <td>#${issue.id}</td>
                    <td>
                        <div style="max-width: 200px; overflow: hidden; text-overflow: ellipsis;">
                            ${issue.title}
                        </div>
                    </td>
                    <td>
                        <span class="category-icon ${issue.category}" title="${category.name}">
                            <i class="${category.icon}"></i>
                        </span>
                        <span class="category-name">${category.name}</span>
                    </td>
                    <td>
                        <div style="max-width: 150px; overflow: hidden; text-overflow: ellipsis;" title="${issue.location}">
                            ${issue.location}
                        </div>
                    </td>
                    <td>
                        <span class="issue-status ${statusClass}">
                            ${window.issuesData.statusConfig[issue.status].name}
                        </span>
                        ${issue.priority === 'high' ? '<span class="priority-indicator priority-high" title="High Priority"></span>' : ''}
                    </td>
                    <td>${issue.reporterName}</td>
                    <td title="${new Date(issue.reportedDate).toLocaleString()}">
                        ${window.issuesData.formatDate(issue.reportedDate)}
                    </td>
                    <td>
                        <div class="table-actions">
                            <button class="btn-table btn-view" onclick="app.showIssueDetail(${issue.id})" title="View Details">
                                <i class="fas fa-eye"></i>
                            </button>
                            ${this.getActionButtons(issue)}
                        </div>
                    </td>
                </tr>
            `;
        });
        
        tbody.innerHTML = tableHTML;

        // Update stats
        this.updateFilteredStats(issues);
    }

    getActionButtons(issue) {
        let buttons = '';
        
        if (issue.status === 'open') {
            buttons += `
                <button class="btn-table btn-edit" onclick="app.updateIssueStatus(${issue.id}, 'in-progress')" title="Mark In Progress">
                    <i class="fas fa-play"></i>
                </button>
                <button class="btn-table btn-resolve" onclick="app.updateIssueStatus(${issue.id}, 'resolved')" title="Mark Resolved">
                    <i class="fas fa-check"></i>
                </button>
            `;
        } else if (issue.status === 'in-progress') {
            buttons += `
                <button class="btn-table btn-resolve" onclick="app.updateIssueStatus(${issue.id}, 'resolved')" title="Mark Resolved">
                    <i class="fas fa-check"></i>
                </button>
            `;
        }
        
        // Add additional action buttons
        buttons += `
            <button class="btn-table" style="background: #17a2b8; color: white;" onclick="issueManager.assignIssue(${issue.id})" title="Assign Issue">
                <i class="fas fa-user-plus"></i>
            </button>
        `;
        
        return buttons;
    }

    updateFilteredStats(filteredIssues) {
        const openCount = filteredIssues.filter(issue => issue.status === 'open').length;
        const progressCount = filteredIssues.filter(issue => issue.status === 'in-progress').length;
        const resolvedCount = filteredIssues.filter(issue => issue.status === 'resolved').length;
        
        const openElement = document.getElementById('openIssuesCount');
        const progressElement = document.getElementById('progressIssuesCount');
        const resolvedElement = document.getElementById('resolvedIssuesCount');
        
        if (openElement) openElement.textContent = openCount;
        if (progressElement) progressElement.textContent = progressCount;
        if (resolvedElement) resolvedElement.textContent = resolvedCount;
    }

    refreshData() {
        // Show loading state
        window.app.showToast('Refreshing data...', 'info');
        
        // Simulate data refresh
        setTimeout(() => {
            // Reload current page content
            if (window.app.currentPage === 'dashboard') {
                window.app.loadDashboard();
            } else if (window.app.currentPage === 'manage') {
                window.app.loadAdminIssuesTable();
            } else if (window.app.currentPage === 'map') {
                if (window.app.mapHandler) {
                    window.app.mapHandler.loadIssuesMap();
                }
            }
            
            window.app.showToast('Data refreshed successfully!', 'success');
        }, 1000);
    }

    assignIssue(issueId) {
        const issue = window.issuesData.getIssueById(issueId);
        if (!issue) return;

        // Available departments/teams
        const departments = [
            'Road Maintenance Team 1',
            'Road Maintenance Team 2',
            'Water Department Team 3',
            'Water Department Team 4',
            'Drainage Maintenance Team 2',
            'Electricity Board Team 5',
            'Sanitation Department',
            'Parks & Recreation Team',
            'Building Department',
            'Traffic Management Team'
        ];

        const categoryDepartments = {
            roads: ['Road Maintenance Team 1', 'Road Maintenance Team 2', 'Traffic Management Team'],
            water: ['Water Department Team 3', 'Water Department Team 4'],
            drainage: ['Drainage Maintenance Team 2', 'Water Department Team 3'],
            electricity: ['Electricity Board Team 5'],
            sanitation: ['Sanitation Department'],
            parks: ['Parks & Recreation Team'],
            other: ['Building Department', 'Traffic Management Team'],
            garbage: ['Sanitation Department'],
            streetlights: ['Electricity Board Team 5']
        };

        // Get relevant departments for the issue category
        const relevantDepartments = categoryDepartments[issue.category] || departments;
        const selectedDepartment = relevantDepartments[Math.floor(Math.random() * relevantDepartments.length)];

        // Update issue
        issue.assignedTo = selectedDepartment;
        if (issue.status === 'open') {
            issue.status = 'in-progress';
        }
        
        // Add update
        issue.updates.push({
            date: new Date().toISOString(),
            message: `Issue assigned to ${selectedDepartment}`,
            updatedBy: 'Admin'
        });

        // Set estimated resolution (2-7 days from now)
        const estimatedDays = Math.floor(Math.random() * 6) + 2;
        const estimatedDate = new Date();
        estimatedDate.setDate(estimatedDate.getDate() + estimatedDays);
        issue.estimatedResolution = estimatedDate.toISOString();

        window.app.showToast(`Issue #${issueId} assigned to ${selectedDepartment}`, 'success');
        
        // Refresh the table
        if (window.app.currentPage === 'manage') {
            this.filterAdminTable();
        }
    }

    exportIssues(format = 'csv') {
        const issues = this.issues;
        
        if (format === 'csv') {
            this.exportToCSV(issues);
        } else if (format === 'json') {
            this.exportToJSON(issues);
        }
    }

    exportToCSV(issues) {
        const headers = ['ID', 'Title', 'Category', 'Status', 'Priority', 'Location', 'Reporter', 'Reported Date', 'Assigned To'];
        const csvContent = [
            headers.join(','),
            ...issues.map(issue => [
                issue.id,
                `"${issue.title.replace(/"/g, '""')}"`,
                window.issuesData.categoryConfig[issue.category].name,
                window.issuesData.statusConfig[issue.status].name,
                issue.priority,
                `"${issue.location.replace(/"/g, '""')}"`,
                issue.reporterName,
                new Date(issue.reportedDate).toLocaleDateString(),
                issue.assignedTo || 'Unassigned'
            ].join(','))
        ].join('\n');

        this.downloadFile(csvContent, 'issues-export.csv', 'text/csv');
    }

    exportToJSON(issues) {
        const jsonContent = JSON.stringify(issues, null, 2);
        this.downloadFile(jsonContent, 'issues-export.json', 'application/json');
    }

    downloadFile(content, filename, contentType) {
        const blob = new Blob([content], { type: contentType });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        window.app.showToast(`Export completed: ${filename}`, 'success');
    }

    getIssueAnalytics() {
        const issues = this.issues;
        const now = new Date();
        const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

        const analytics = {
            totalIssues: issues.length,
            issuesLast30Days: issues.filter(issue => new Date(issue.reportedDate) >= thirtyDaysAgo).length,
            issuesLast7Days: issues.filter(issue => new Date(issue.reportedDate) >= sevenDaysAgo).length,
            
            // Resolution metrics
            avgResolutionTime: this.calculateAverageResolutionTime(issues),
            resolutionRate: Math.round((issues.filter(issue => issue.status === 'resolved').length / issues.length) * 100),
            
            // Category breakdown
            categoryBreakdown: this.getCategoryBreakdown(issues),
            
            // Priority analysis
            priorityBreakdown: this.getPriorityBreakdown(issues),
            
            // Geographic analysis
            locationHotspots: this.getLocationHotspots(issues),
            
            // Time-based trends
            monthlyTrends: this.getMonthlyTrends(issues)
        };

        return analytics;
    }

    calculateAverageResolutionTime(issues) {
        const resolvedIssues = issues.filter(issue => issue.status === 'resolved' && issue.actualResolution);
        
        if (resolvedIssues.length === 0) return 0;

        const totalTime = resolvedIssues.reduce((total, issue) => {
            const reported = new Date(issue.reportedDate);
            const resolved = new Date(issue.actualResolution);
            return total + (resolved - reported);
        }, 0);

        const avgMilliseconds = totalTime / resolvedIssues.length;
        const avgDays = Math.round(avgMilliseconds / (1000 * 60 * 60 * 24));
        
        return avgDays;
    }

    getCategoryBreakdown(issues) {
        const breakdown = {};
        Object.keys(window.issuesData.categoryConfig).forEach(category => {
            breakdown[category] = issues.filter(issue => issue.category === category).length;
        });
        return breakdown;
    }

    getPriorityBreakdown(issues) {
        const breakdown = {};
        ['high', 'medium', 'low'].forEach(priority => {
            breakdown[priority] = issues.filter(issue => issue.priority === priority).length;
        });
        return breakdown;
    }

    getLocationHotspots(issues) {
        const locationCount = {};
        issues.forEach(issue => {
            // Extract area from location (simple approach)
            const area = issue.location.split(',')[0].trim();
            locationCount[area] = (locationCount[area] || 0) + 1;
        });

        // Sort by count and return top 5
        return Object.entries(locationCount)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 5)
            .map(([location, count]) => ({ location, count }));
    }

    getMonthlyTrends(issues) {
        const monthlyData = {};
        issues.forEach(issue => {
            const date = new Date(issue.reportedDate);
            const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
            monthlyData[monthKey] = (monthlyData[monthKey] || 0) + 1;
        });

        return Object.entries(monthlyData)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([month, count]) => ({ month, count }));
    }

    // Utility function for debouncing
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Initialize issue manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.issueManager = new IssueManager();
});