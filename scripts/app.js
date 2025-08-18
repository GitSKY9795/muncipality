// Municipal Issue Reporting System - Main Application

class MunicipalApp {
    constructor() {
        this.currentUser = null;
        this.currentPage = 'dashboard';
        this.issueManager = null;
        this.mapHandler = null;
        
        this.init();
    }

    init() {
        this.bindRoleSelection();
        this.bindNavigation();
        this.bindLogout();
        this.initializeComponents();
    }

    bindRoleSelection() {
        const roleCards = document.querySelectorAll('.role-card');
        
        roleCards.forEach(card => {
            card.addEventListener('click', (e) => {
                const role = card.dataset.role;
                this.selectRole(role);
            });
            
            // Also bind to button clicks within role cards
            const button = card.querySelector('.btn');
            if (button) {
                button.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const role = card.dataset.role;
                    this.selectRole(role);
                });
            }
        });
    }

    selectRole(role) {
        this.currentUser = {
            role: role,
            name: role === 'admin' ? 'Admin User' : 'Citizen User',
            avatar: role === 'admin' ? 'A' : 'C'
        };

        // Hide role modal and show main container
        document.getElementById('roleModal').style.display = 'none';
        document.getElementById('mainContainer').style.display = 'block';

        // Update UI based on role
        this.updateUIForRole(role);
        
        // Initialize components after role selection
        this.initializeComponents();
        
        // Load initial data
        this.loadDashboard();
    }

    updateUIForRole(role) {
        // Update header
        const headerTitle = document.getElementById('headerTitle');
        const userName = document.getElementById('userName');
        const userRole = document.getElementById('userRole');
        const userIcon = document.getElementById('userIcon');

        if (role === 'admin') {
            headerTitle.textContent = 'Admin Portal';
            userName.textContent = 'Admin User';
            userRole.textContent = 'Administrator';
            userIcon.className = 'fas fa-user-shield';
        } else {
            headerTitle.textContent = 'Citizen Portal';
            userName.textContent = 'Citizen User';
            userRole.textContent = 'Citizen';
            userIcon.className = 'fas fa-user';
        }

        // Update navigation based on role
        this.buildNavigation(role);
    }

    buildNavigation(role) {
        const navigation = document.getElementById('navigation');
        
        let navHTML = '<div class="nav-content"><ul class="nav-links">';
        
        // Common navigation items
        navHTML += `
            <li class="nav-item">
                <a href="#" class="nav-link active" data-page="dashboard">
                    <i class="fas fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </a>
            </li>
        `;

        if (role === 'citizen') {
            navHTML += `
                <li class="nav-item">
                    <a href="#" class="nav-link" data-page="report">
                        <i class="fas fa-plus-circle"></i>
                        <span>Report Issue</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link" data-page="map">
                        <i class="fas fa-map-marked-alt"></i>
                        <span>Issues Map</span>
                    </a>
                </li>
            `;
        } else if (role === 'admin') {
            navHTML += `
                <li class="nav-item">
                    <a href="#" class="nav-link" data-page="manage">
                        <i class="fas fa-tasks"></i>
                        <span>Manage Issues</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link" data-page="map">
                        <i class="fas fa-map-marked-alt"></i>
                        <span>Issues Map</span>
                    </a>
                </li>
            `;
        }

        navHTML += '</ul></div>';
        navigation.innerHTML = navHTML;

        // Bind navigation events
        this.bindNavigation();
    }

    bindNavigation() {
        const navLinks = document.querySelectorAll('.nav-link[data-page]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.dataset.page;
                this.navigateTo(page);
            });
        });
    }

    navigateTo(page) {
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector(`.nav-link[data-page="${page}"]`).classList.add('active');

        // Update breadcrumb
        const currentSection = document.getElementById('currentSection');
        const pageNames = {
            dashboard: 'Dashboard',
            report: 'Report Issue',
            map: 'Issues Map',
            manage: 'Manage Issues'
        };
        currentSection.textContent = pageNames[page] || 'Dashboard';

        // Hide all pages and show selected
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById(`${page}-page`).classList.add('active');

        this.currentPage = page;

        // Load page-specific content
        this.loadPageContent(page);
    }

    loadPageContent(page) {
        switch (page) {
            case 'dashboard':
                this.loadDashboard();
                break;
            case 'report':
                this.loadReportPage();
                break;
            case 'map':
                this.loadMapPage();
                break;
            case 'manage':
                this.loadManagePage();
                break;
        }
    }

    loadDashboard() {
        const stats = window.issuesData.getIssueStats();
        const categoryStats = window.issuesData.getCategoryStats();
        
        // Build stats section based on role
        this.buildStatsSection(stats, categoryStats);
        
        // Build action section based on role
        this.buildActionSection();
        
        // Load recent issues
        this.loadRecentIssues();
    }

    buildStatsSection(stats, categoryStats) {
        const statsSection = document.getElementById('statsSection');
        const role = this.currentUser.role;
        
        let statsHTML = '<div class="stats-grid">';
        
        if (role === 'citizen') {
            statsHTML += `
                <div class="stat-card citizen">
                    <div class="stat-header">
                        <span class="stat-title">Total Issues</span>
                        <i class="stat-icon fas fa-exclamation-triangle"></i>
                    </div>
                    <div class="stat-value">${stats.total}</div>
                    <div class="stat-change positive">+${stats.open} new this week</div>
                </div>
                <div class="stat-card citizen">
                    <div class="stat-header">
                        <span class="stat-title">Your Area</span>
                        <i class="stat-icon fas fa-map-marker-alt"></i>
                    </div>
                    <div class="stat-value">${Math.ceil(stats.total * 0.3)}</div>
                    <div class="stat-change positive">Issues in your vicinity</div>
                </div>
                <div class="stat-card citizen">
                    <div class="stat-header">
                        <span class="stat-title">Resolved Rate</span>
                        <i class="stat-icon fas fa-check-circle"></i>
                    </div>
                    <div class="stat-value">${stats.resolvedPercentage}%</div>
                    <div class="stat-change positive">+5% this month</div>
                </div>
                <div class="stat-card citizen">
                    <div class="stat-header">
                        <span class="stat-title">Avg Response</span>
                        <i class="stat-icon fas fa-clock"></i>
                    </div>
                    <div class="stat-value">2.5 days</div>
                    <div class="stat-change positive">-0.5 days improvement</div>
                </div>
            `;
        } else {
            statsHTML += `
                <div class="stat-card admin">
                    <div class="stat-header">
                        <span class="stat-title">Open Issues</span>
                        <i class="stat-icon fas fa-exclamation-triangle"></i>
                    </div>
                    <div class="stat-value">${stats.open}</div>
                    <div class="stat-change ${stats.open > 5 ? 'negative' : 'positive'}">Needs attention</div>
                </div>
                <div class="stat-card admin">
                    <div class="stat-header">
                        <span class="stat-title">In Progress</span>
                        <i class="stat-icon fas fa-cogs"></i>
                    </div>
                    <div class="stat-value">${stats.inProgress}</div>
                    <div class="stat-change positive">Being worked on</div>
                </div>
                <div class="stat-card admin">
                    <div class="stat-header">
                        <span class="stat-title">Resolved</span>
                        <i class="stat-icon fas fa-check-circle"></i>
                    </div>
                    <div class="stat-value">${stats.resolved}</div>
                    <div class="stat-change positive">${stats.resolvedPercentage}% completion rate</div>
                </div>
                <div class="stat-card admin">
                    <div class="stat-header">
                        <span class="stat-title">High Priority</span>
                        <i class="stat-icon fas fa-flag"></i>
                    </div>
                    <div class="stat-value">${stats.high}</div>
                    <div class="stat-change ${stats.high > 3 ? 'negative' : 'positive'}">Urgent items</div>
                </div>
            `;
        }
        
        statsHTML += '</div>';
        statsSection.innerHTML = statsHTML;
    }

    buildActionSection() {
        const actionSection = document.getElementById('actionSection');
        const role = this.currentUser.role;
        
        let actionHTML = '<div class="action-grid">';
        
        if (role === 'citizen') {
            actionHTML += `
                <div class="action-card citizen">
                    <div class="action-icon">
                        <i class="fas fa-plus-circle"></i>
                    </div>
                    <h3 class="action-title">Report New Issue</h3>
                    <p class="action-description">Spotted a problem in your area? Report it to help improve your community.</p>
                    <button class="btn btn-primary" onclick="app.navigateTo('report')">
                        <i class="fas fa-plus"></i>
                        Report Issue
                    </button>
                </div>
                <div class="action-card citizen">
                    <div class="action-icon">
                        <i class="fas fa-map-marked-alt"></i>
                    </div>
                    <h3 class="action-title">View Issues Map</h3>
                    <p class="action-description">See all reported issues in your area on an interactive map.</p>
                    <button class="btn btn-primary" onclick="app.navigateTo('map')">
                        <i class="fas fa-map"></i>
                        View Map
                    </button>
                </div>
            `;
        } else {
            actionHTML += `
                <div class="action-card admin">
                    <div class="action-icon">
                        <i class="fas fa-tasks"></i>
                    </div>
                    <h3 class="action-title">Manage Issues</h3>
                    <p class="action-description">Review, assign, and update status of reported issues.</p>
                    <button class="btn btn-secondary" onclick="app.navigateTo('manage')">
                        <i class="fas fa-cogs"></i>
                        Manage Issues
                    </button>
                </div>
                <div class="action-card admin">
                    <div class="action-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h3 class="action-title">View Analytics</h3>
                    <p class="action-description">Monitor issue trends and department performance metrics.</p>
                    <button class="btn btn-secondary" onclick="app.showToast('Analytics feature coming soon!', 'info')">
                        <i class="fas fa-analytics"></i>
                        View Analytics
                    </button>
                </div>
            `;
        }
        
        actionHTML += '</div>';
        actionSection.innerHTML = actionHTML;
    }

    loadRecentIssues() {
        const recentIssues = window.issuesData.getRecentIssues(6);
        const issuesGrid = document.getElementById('issuesGrid');
        
        if (recentIssues.length === 0) {
            issuesGrid.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-clipboard-list"></i>
                    <h3>No Issues Reported</h3>
                    <p>No issues have been reported yet. Be the first to report an issue in your community!</p>
                </div>
            `;
            return;
        }
        
        let issuesHTML = '';
        recentIssues.forEach(issue => {
            const category = window.issuesData.categoryConfig[issue.category];
            const statusClass = issue.status.replace('-', '-');
            
            issuesHTML += `
                <div class="issue-card" data-issue-id="${issue.id}" onclick="app.showIssueDetail(${issue.id})">
                    <div class="issue-header">
                        <div class="issue-category">
                            <span class="category-icon ${issue.category}">
                                <i class="${category.icon}"></i>
                            </span>
                            ${category.name}
                        </div>
                        <span class="issue-status ${statusClass}">${window.issuesData.statusConfig[issue.status].name}</span>
                    </div>
                    <h3 class="issue-title">${issue.title}</h3>
                    <p class="issue-description">${issue.description}</p>
                    <div class="issue-footer">
                        <div class="issue-location">
                            <i class="fas fa-map-marker-alt"></i>
                            ${issue.location}
                        </div>
                        <div class="issue-date">${window.issuesData.formatDate(issue.reportedDate)}</div>
                    </div>
                </div>
            `;
        });
        
        issuesGrid.innerHTML = issuesHTML;
    }

    loadReportPage() {
        // Initialize form handlers for report page
        this.bindReportForm();
    }

    loadMapPage() {
        // Initialize map if not already done
        if (!this.mapHandler) {
            this.mapHandler = new MapHandler();
        }
        this.mapHandler.loadIssuesMap();
    }

    loadManagePage() {
        if (this.currentUser.role !== 'admin') {
            this.showToast('Access denied. Admin privileges required.', 'error');
            this.navigateTo('dashboard');
            return;
        }
        
        // Load admin issues table
        this.loadAdminIssuesTable();
        this.bindAdminFilters();
    }

    bindReportForm() {
        const reportForm = document.getElementById('reportForm');
        if (!reportForm) return;

        reportForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitIssueReport(e.target);
        });

        // Bind location button
        const locationBtn = document.getElementById('getCurrentLocation');
        if (locationBtn) {
            locationBtn.addEventListener('click', this.getCurrentLocation.bind(this));
        }

        // Bind cancel button
        const cancelBtn = document.getElementById('cancelReport');
        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => {
                this.navigateTo('dashboard');
            });
        }
    }

    submitIssueReport(form) {
        const formData = new FormData(form);
        const issueData = {
            title: formData.get('title'),
            description: formData.get('description'),
            category: formData.get('category'),
            location: formData.get('location'),
            reporterName: formData.get('reporterName'),
            reporterPhone: formData.get('reporterPhone'),
            priority: 'medium', // Default priority
            coordinates: [28.6139, 77.2090] // Default coordinates, should be updated with actual location
        };

        // Validate required fields
        if (!issueData.title || !issueData.description || !issueData.category || 
            !issueData.location || !issueData.reporterName || !issueData.reporterPhone) {
            this.showToast('Please fill in all required fields.', 'error');
            return;
        }

        // Add the issue
        const newIssue = window.issuesData.addNewIssue(issueData);
        
        // Show success message
        this.showToast('Issue reported successfully! Thank you for helping improve our community.', 'success');
        
        // Reset form
        form.reset();
        
        // Navigate to dashboard
        setTimeout(() => {
            this.navigateTo('dashboard');
        }, 1500);
    }

    getCurrentLocation() {
        const locationInput = document.getElementById('issueLocation');
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    
                    // Use reverse geocoding to get address
                    // For now, just set coordinates
                    locationInput.value = `Location: ${lat.toFixed(4)}, ${lng.toFixed(4)}`;
                    this.showToast('Location detected successfully!', 'success');
                },
                (error) => {
                    this.showToast('Unable to get your location. Please enter manually.', 'warning');
                }
            );
        } else {
            this.showToast('Geolocation is not supported by your browser.', 'error');
        }
    }

    loadAdminIssuesTable() {
        const issues = window.issuesData.sampleIssues;
        const tableBody = document.getElementById('adminIssuesTableBody');
        
        // Update stats
        const stats = window.issuesData.getIssueStats();
        document.getElementById('openIssuesCount').textContent = stats.open;
        document.getElementById('progressIssuesCount').textContent = stats.inProgress;
        document.getElementById('resolvedIssuesCount').textContent = stats.resolved;
        
        let tableHTML = '';
        issues.forEach(issue => {
            const category = window.issuesData.categoryConfig[issue.category];
            const statusClass = issue.status.replace('-', '');
            
            tableHTML += `
                <tr>
                    <td>#${issue.id}</td>
                    <td>${issue.title}</td>
                    <td>
                        <span class="category-icon ${issue.category}">
                            <i class="${category.icon}"></i>
                        </span>
                        ${category.name}
                    </td>
                    <td>${issue.location}</td>
                    <td>
                        <span class="issue-status ${statusClass}">${window.issuesData.statusConfig[issue.status].name}</span>
                    </td>
                    <td>${issue.reporterName}</td>
                    <td>${window.issuesData.formatDate(issue.reportedDate)}</td>
                    <td>
                        <div class="table-actions">
                            <button class="btn-table btn-view" onclick="app.showIssueDetail(${issue.id})" title="View Details">
                                <i class="fas fa-eye"></i>
                            </button>
                            ${issue.status !== 'resolved' ? `
                                <button class="btn-table btn-edit" onclick="app.updateIssueStatus(${issue.id}, 'in-progress')" title="Mark In Progress">
                                    <i class="fas fa-play"></i>
                                </button>
                                <button class="btn-table btn-resolve" onclick="app.updateIssueStatus(${issue.id}, 'resolved')" title="Mark Resolved">
                                    <i class="fas fa-check"></i>
                                </button>
                            ` : ''}
                        </div>
                    </td>
                </tr>
            `;
        });
        
        tableBody.innerHTML = tableHTML;
    }

    bindAdminFilters() {
        const categoryFilter = document.getElementById('adminCategoryFilter');
        const statusFilter = document.getElementById('adminStatusFilter');
        const searchFilter = document.getElementById('adminSearchFilter');
        
        [categoryFilter, statusFilter, searchFilter].forEach(filter => {
            if (filter) {
                filter.addEventListener('change', this.filterAdminTable.bind(this));
                filter.addEventListener('input', this.filterAdminTable.bind(this));
            }
        });
    }

    filterAdminTable() {
        // Implementation for filtering admin table
        // This would filter the table based on selected criteria
        console.log('Filtering admin table...');
    }

    updateIssueStatus(issueId, newStatus) {
        const statusNames = {
            'in-progress': 'In Progress',
            'resolved': 'Resolved'
        };
        
        const updateMessage = `Status updated to ${statusNames[newStatus]} by admin`;
        const updatedIssue = window.issuesData.updateIssueStatus(issueId, newStatus, updateMessage, 'Admin');
        
        if (updatedIssue) {
            this.showToast(`Issue #${issueId} marked as ${statusNames[newStatus]}`, 'success');
            
            // Refresh the current view
            if (this.currentPage === 'manage') {
                this.loadAdminIssuesTable();
            } else if (this.currentPage === 'dashboard') {
                this.loadDashboard();
            }
        }
    }

    showIssueDetail(issueId) {
        const issue = window.issuesData.getIssueById(issueId);
        if (!issue) return;
        
        const modal = document.getElementById('issueModal');
        const modalTitle = document.getElementById('modalIssueTitle');
        const modalContent = document.getElementById('modalIssueContent');
        const modalActions = document.getElementById('modalActions');
        
        modalTitle.textContent = `Issue #${issue.id}`;
        
        const category = window.issuesData.categoryConfig[issue.category];
        const status = window.issuesData.statusConfig[issue.status];
        
        modalContent.innerHTML = `
            <div class="issue-detail">
                <div class="issue-detail-header">
                    <h3 class="issue-detail-title">${issue.title}</h3>
                    <span class="issue-detail-status issue-status ${issue.status.replace('-', '')}">${status.name}</span>
                </div>
                
                <div class="issue-detail-meta">
                    <div class="issue-meta-item">
                        <span class="issue-meta-label">Category</span>
                        <span class="issue-meta-value">
                            <span class="category-icon ${issue.category}">
                                <i class="${category.icon}"></i>
                            </span>
                            ${category.name}
                        </span>
                    </div>
                    <div class="issue-meta-item">
                        <span class="issue-meta-label">Priority</span>
                        <span class="issue-meta-value">
                            <span class="priority-indicator priority-${issue.priority}"></span>
                            ${issue.priority.charAt(0).toUpperCase() + issue.priority.slice(1)}
                        </span>
                    </div>
                    <div class="issue-meta-item">
                        <span class="issue-meta-label">Reporter</span>
                        <span class="issue-meta-value">${issue.reporterName}</span>
                    </div>
                    <div class="issue-meta-item">
                        <span class="issue-meta-label">Reported Date</span>
                        <span class="issue-meta-value">${window.issuesData.formatDate(issue.reportedDate)}</span>
                    </div>
                    <div class="issue-meta-item">
                        <span class="issue-meta-label">Location</span>
                        <span class="issue-meta-value">${issue.location}</span>
                    </div>
                    ${issue.assignedTo ? `
                        <div class="issue-meta-item">
                            <span class="issue-meta-label">Assigned To</span>
                            <span class="issue-meta-value">${issue.assignedTo}</span>
                        </div>
                    ` : ''}
                </div>
                
                <div>
                    <h4>Description</h4>
                    <p class="issue-description-full">${issue.description}</p>
                </div>
                
                ${issue.updates && issue.updates.length > 1 ? `
                    <div>
                        <h4>Updates</h4>
                        <div class="issue-updates">
                            ${issue.updates.slice().reverse().map(update => `
                                <div class="update-item">
                                    <div class="update-date">${window.issuesData.formatDate(update.date)}</div>
                                    <div class="update-message">${update.message}</div>
                                    <div class="update-by">by ${update.updatedBy}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
        
        // Build modal actions based on user role and issue status
        let actionsHTML = '';
        if (this.currentUser.role === 'admin' && issue.status !== 'resolved') {
            if (issue.status === 'open') {
                actionsHTML += `
                    <button class="btn btn-secondary" onclick="app.updateIssueStatus(${issue.id}, 'in-progress'); app.closeModal()">
                        <i class="fas fa-play"></i>
                        Mark In Progress
                    </button>
                `;
            }
            actionsHTML += `
                <button class="btn btn-primary" onclick="app.updateIssueStatus(${issue.id}, 'resolved'); app.closeModal()">
                    <i class="fas fa-check"></i>
                    Mark Resolved
                </button>
            `;
        }
        actionsHTML += `
            <button class="btn btn-outline" onclick="app.closeModal()">Close</button>
        `;
        
        modalActions.innerHTML = actionsHTML;
        modal.classList.add('active');
    }

    closeModal() {
        const modal = document.getElementById('issueModal');
        modal.classList.remove('active');
    }

    bindLogout() {
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', this.logout.bind(this));
        }
    }

    logout() {
        this.currentUser = null;
        this.currentPage = 'dashboard';
        
        // Show role modal and hide main container
        document.getElementById('roleModal').style.display = 'flex';
        document.getElementById('mainContainer').style.display = 'none';
        
        // Reset any active states
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById('dashboard-page').classList.add('active');
    }

    initializeComponents() {
        // Initialize issue manager if not already done
        if (!this.issueManager) {
            this.issueManager = new IssueManager();
        }
        
        // Bind modal close events
        const modalClose = document.getElementById('closeModal');
        if (modalClose) {
            modalClose.addEventListener('click', this.closeModal.bind(this));
        }
        
        // Bind modal background click to close
        const modal = document.getElementById('issueModal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal();
                }
            });
        }
    }

    showToast(message, type = 'info') {
        // Remove existing toasts
        const existingToasts = document.querySelectorAll('.toast');
        existingToasts.forEach(toast => toast.remove());
        
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const icons = {
            success: 'fas fa-check-circle',
            error: 'fas fa-exclamation-circle',
            warning: 'fas fa-exclamation-triangle',
            info: 'fas fa-info-circle'
        };
        
        const titles = {
            success: 'Success',
            error: 'Error',
            warning: 'Warning',
            info: 'Information'
        };
        
        toast.innerHTML = `
            <div class="toast-header">
                <span class="toast-title">
                    <i class="${icons[type]}"></i>
                    ${titles[type]}
                </span>
                <button class="toast-close">&times;</button>
            </div>
            <div class="toast-message">${message}</div>
        `;
        
        document.body.appendChild(toast);
        
        // Show toast
        setTimeout(() => toast.classList.add('show'), 100);
        
        // Bind close button
        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', () => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (toast.parentElement) {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 300);
            }
        }, 5000);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new MunicipalApp();
});