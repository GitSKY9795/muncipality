// Municipal Dashboard - Main Dashboard Controller
class MunicipalDashboard {
    constructor() {
        this.currentPage = 'dashboard';
        this.theme = localStorage.getItem('theme') || 'light';
        this.charts = {};
        this.init();
    }

    init() {
        this.initTheme();
        this.initNavigation();
        this.initCounters();
        this.initCharts();
        this.initEventListeners();
        this.loadDashboardData();
    }

    // Theme Management
    initTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            icon.className = this.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.theme);
        this.initTheme();
    }

    // Navigation Management
    initNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.getAttribute('data-page');
                this.navigateToPage(page);
            });
        });
    }

    navigateToPage(page) {
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector(`[data-page="${page}"]`).classList.add('active');

        // Show appropriate page
        document.querySelectorAll('.page').forEach(pageEl => {
            pageEl.classList.remove('active');
        });
        document.getElementById(`${page}-page`).classList.add('active');

        // Handle page-specific initialization
        switch(page) {
            case 'maps':
                if (window.municipalMaps) {
                    window.municipalMaps.initMap();
                }
                break;
            case 'analytics':
                if (window.municipalAnalytics) {
                    window.municipalAnalytics.loadAnalytics();
                }
                break;
            case 'dashboard':
                this.refreshDashboard();
                break;
        }

        this.currentPage = page;
    }

    // Animated Counters
    initCounters() {
        const counters = document.querySelectorAll('.stat-number');
        const animateCounter = (counter) => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const start = performance.now();
            
            const updateCounter = (currentTime) => {
                const elapsed = currentTime - start;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function for smooth animation
                const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                const currentValue = Math.floor(target * easeOutExpo);
                
                counter.textContent = this.formatNumber(currentValue);
                
                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                }
            };
            
            requestAnimationFrame(updateCounter);
        };

        // Trigger counter animations when they come into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        });

        counters.forEach(counter => observer.observe(counter));
    }

    // Dashboard Charts Initialization
    initCharts() {
        this.initPopulationChart();
        this.initBudgetChart();
        this.animateProgressBars();
        this.animateCircularMeters();
    }

    initPopulationChart() {
        const ctx = document.getElementById('populationChart');
        if (!ctx) return;

        this.charts.population = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Maharashtra', 'Uttar Pradesh', 'Tamil Nadu', 'Karnataka', 'Gujarat', 'West Bengal'],
                datasets: [{
                    label: 'Population (Crores)',
                    data: [11.24, 19.98, 7.21, 6.11, 6.04, 9.13],
                    backgroundColor: [
                        'rgba(255, 107, 53, 0.8)',
                        'rgba(19, 136, 8, 0.8)',
                        'rgba(0, 0, 128, 0.8)',
                        'rgba(255, 107, 53, 0.6)',
                        'rgba(19, 136, 8, 0.6)',
                        'rgba(0, 0, 128, 0.6)'
                    ],
                    borderColor: [
                        'rgba(255, 107, 53, 1)',
                        'rgba(19, 136, 8, 1)',
                        'rgba(0, 0, 128, 1)',
                        'rgba(255, 107, 53, 0.8)',
                        'rgba(19, 136, 8, 0.8)',
                        'rgba(0, 0, 128, 0.8)'
                    ],
                    borderWidth: 2,
                    borderRadius: 4,
                    borderSkipped: false,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        borderColor: 'rgba(255, 107, 53, 1)',
                        borderWidth: 1,
                        cornerRadius: 8,
                        displayColors: false,
                        callbacks: {
                            label: function(context) {
                                return `Population: ${context.parsed.y} Crores`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)',
                        },
                        ticks: {
                            color: '#64748b',
                            font: {
                                size: 12
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#64748b',
                            font: {
                                size: 12
                            }
                        }
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutQuart'
                }
            }
        });
    }

    initBudgetChart() {
        const ctx = document.getElementById('budgetChart');
        if (!ctx) return;

        this.charts.budget = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Infrastructure', 'Healthcare', 'Education', 'Sanitation', 'Digital Services', 'Others'],
                datasets: [{
                    data: [35, 20, 18, 12, 8, 7],
                    backgroundColor: [
                        '#FF6B35',
                        '#138808',
                        '#000080',
                        '#FF8C42',
                        '#17A2B8',
                        '#6C757D'
                    ],
                    borderColor: '#fff',
                    borderWidth: 3,
                    hoverBorderWidth: 4,
                    hoverOffset: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            color: '#64748b',
                            font: {
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        borderColor: 'rgba(255, 107, 53, 1)',
                        borderWidth: 1,
                        cornerRadius: 8,
                        callbacks: {
                            label: function(context) {
                                const percentage = context.parsed;
                                return `${context.label}: ${percentage}%`;
                            }
                        }
                    }
                },
                animation: {
                    animateRotate: true,
                    duration: 2000
                },
                cutout: '60%'
            }
        });
    }

    animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-fill');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.style.width;
                    entry.target.style.width = '0%';
                    
                    setTimeout(() => {
                        entry.target.style.width = width;
                    }, 500);
                    
                    observer.unobserve(entry.target);
                }
            });
        });

        progressBars.forEach(bar => observer.observe(bar));
    }

    animateCircularMeters() {
        const meters = document.querySelectorAll('.meter-progress');
        
        meters.forEach(meter => {
            const fullCircle = 314; // 2 * π * 50 (radius)
            const targetOffset = parseFloat(meter.getAttribute('stroke-dashoffset'));
            
            // Start from full circle (hidden)
            meter.style.strokeDashoffset = fullCircle;
            
            setTimeout(() => {
                meter.style.strokeDashoffset = targetOffset;
            }, 1000);
        });
    }

    // Event Listeners
    initEventListeners() {
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Budget period change
        const budgetPeriod = document.getElementById('budgetPeriod');
        if (budgetPeriod) {
            budgetPeriod.addEventListener('change', (e) => {
                this.updateBudgetChart(e.target.value);
            });
        }

        // Window resize handler
        window.addEventListener('resize', () => {
            Object.values(this.charts).forEach(chart => {
                if (chart && typeof chart.resize === 'function') {
                    chart.resize();
                }
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.altKey) {
                switch(e.key) {
                    case '1':
                        e.preventDefault();
                        this.navigateToPage('dashboard');
                        break;
                    case '2':
                        e.preventDefault();
                        this.navigateToPage('maps');
                        break;
                    case '3':
                        e.preventDefault();
                        this.navigateToPage('analytics');
                        break;
                }
            }
        });

        // Auto-refresh every 5 minutes
        setInterval(() => {
            if (this.currentPage === 'dashboard') {
                this.refreshDashboard();
            }
        }, 300000);
    }

    // Data Loading and Updates
    async loadDashboardData() {
        try {
            // Simulate API call - In real implementation, this would fetch from your API
            await this.simulateDataLoad();
            this.updateRealtimeStats();
        } catch (error) {
            console.error('Error loading dashboard data:', error);
            this.showErrorState();
        }
    }

    async simulateDataLoad() {
        return new Promise(resolve => {
            setTimeout(resolve, 1000);
        });
    }

    updateRealtimeStats() {
        // Update stat numbers with slight variations to simulate real-time data
        const stats = [
            { element: document.querySelector('[data-target="4378"]'), variation: Math.floor(Math.random() * 10) - 5 },
            { element: document.querySelector('[data-target="140"]'), variation: Math.floor(Math.random() * 2) - 1 },
            { element: document.querySelector('[data-target="2500"]'), variation: Math.floor(Math.random() * 50) - 25 },
            { element: document.querySelector('[data-target="73"]'), variation: Math.floor(Math.random() * 3) - 1 }
        ];

        stats.forEach(stat => {
            if (stat.element) {
                const currentTarget = parseInt(stat.element.getAttribute('data-target'));
                const newTarget = Math.max(0, currentTarget + stat.variation);
                stat.element.setAttribute('data-target', newTarget);
            }
        });
    }

    updateBudgetChart(period) {
        if (!this.charts.budget) return;

        const budgetData = {
            '2024': [35, 20, 18, 12, 8, 7],
            '2023': [32, 22, 16, 14, 9, 7]
        };

        this.charts.budget.data.datasets[0].data = budgetData[period] || budgetData['2024'];
        this.charts.budget.update();
    }

    refreshDashboard() {
        // Refresh all dashboard components
        this.updateRealtimeStats();
        
        // Animate counters again
        this.initCounters();
        
        // Show refresh indicator
        this.showRefreshIndicator();
    }

    showRefreshIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'refresh-indicator';
        indicator.innerHTML = '<i class="fas fa-sync-alt"></i> Data Updated';
        indicator.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--secondary-color);
            color: white;
            padding: 0.75rem 1rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            z-index: 9999;
            animation: slideIn 0.3s ease-out;
        `;

        document.body.appendChild(indicator);

        setTimeout(() => {
            indicator.style.animation = 'slideOut 0.3s ease-in forwards';
            setTimeout(() => indicator.remove(), 300);
        }, 2000);
    }

    showErrorState() {
        const errorMessage = document.createElement('div');
        errorMessage.className = 'alert alert-error';
        errorMessage.innerHTML = `
            <i class="fas fa-exclamation-triangle"></i>
            <span>Unable to load dashboard data. Please check your connection and try again.</span>
            <button onclick="this.parentElement.remove()" style="margin-left: auto; background: none; border: none; color: inherit; cursor: pointer;">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.insertBefore(errorMessage, mainContent.firstChild);
        }
    }

    // Utility Functions
    formatNumber(num) {
        if (num >= 10000000) {
            return (num / 10000000).toFixed(1) + 'Cr';
        } else if (num >= 100000) {
            return (num / 100000).toFixed(1) + 'L';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }

    // Public API for external access
    getChartInstance(chartName) {
        return this.charts[chartName];
    }

    getCurrentPage() {
        return this.currentPage;
    }

    exportDashboard() {
        // Implementation for dashboard export functionality
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Municipal Dashboard Report</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    .header { text-align: center; margin-bottom: 30px; }
                    .stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 30px; }
                    .stat-item { border: 1px solid #ccc; padding: 15px; text-align: center; }
                    .chart-placeholder { border: 1px solid #ccc; height: 300px; margin-bottom: 20px; display: flex; align-items: center; justify-content: center; }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>Municipal Dashboard Report</h1>
                    <p>Generated on: ${new Date().toLocaleDateString()}</p>
                </div>
                <div class="stats">
                    <div class="stat-item">
                        <h3>Total Municipalities</h3>
                        <p>4,378</p>
                    </div>
                    <div class="stat-item">
                        <h3>Total Population</h3>
                        <p>140 Crores</p>
                    </div>
                    <div class="stat-item">
                        <h3>Total Budget</h3>
                        <p>2,500 Crores</p>
                    </div>
                    <div class="stat-item">
                        <h3>Development Index</h3>
                        <p>73%</p>
                    </div>
                </div>
                <div class="chart-placeholder">Population Distribution Chart (Export from Dashboard)</div>
                <div class="chart-placeholder">Budget Allocation Chart (Export from Dashboard)</div>
            </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.print();
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.municipalDashboard = new MunicipalDashboard();

    // Add custom CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        .refresh-indicator {
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .refresh-indicator i {
            animation: spin 1s linear infinite;
        }
    `;
    document.head.appendChild(style);
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MunicipalDashboard;
}
