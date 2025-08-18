// Municipal Dashboard - Advanced Charts and Visualizations
class MunicipalCharts {
    constructor() {
        this.charts = {};
        this.chartConfigs = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#64748b',
                        font: { size: 12 }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: 'rgba(255, 107, 53, 1)',
                    borderWidth: 1,
                    cornerRadius: 8
                }
            }
        };
        this.colors = {
            primary: '#FF6B35',
            secondary: '#138808',
            accent: '#000080',
            gradients: [
                'rgba(255, 107, 53, 0.8)',
                'rgba(19, 136, 8, 0.8)',
                'rgba(0, 0, 128, 0.8)',
                'rgba(255, 140, 66, 0.8)',
                'rgba(23, 162, 184, 0.8)',
                'rgba(108, 117, 125, 0.8)'
            ]
        };
    }

    // Initialize all chart types
    initializeCharts() {
        this.initTrendChart();
        this.initPerformanceChart();
        this.initComparisonChart();
        this.initRadarChart();
        this.initHeatmapChart();
    }

    // Multi-dimensional trend analysis chart
    initTrendChart() {
        const ctx = document.getElementById('trendAnalysisChart');
        if (!ctx) return;

        this.charts.trend = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2019-20', '2020-21', '2021-22', '2022-23', '2023-24', '2024-25'],
                datasets: [
                    {
                        label: 'Development Index',
                        data: [65, 68, 71, 73, 75, 78],
                        borderColor: this.colors.primary,
                        backgroundColor: 'rgba(255, 107, 53, 0.1)',
                        tension: 0.4,
                        fill: true,
                        pointRadius: 6,
                        pointHoverRadius: 8
                    },
                    {
                        label: 'Budget Utilization %',
                        data: [72, 75, 78, 82, 85, 87],
                        borderColor: this.colors.secondary,
                        backgroundColor: 'rgba(19, 136, 8, 0.1)',
                        tension: 0.4,
                        fill: true,
                        pointRadius: 6,
                        pointHoverRadius: 8
                    },
                    {
                        label: 'Citizen Satisfaction',
                        data: [3.2, 3.4, 3.6, 3.8, 4.0, 4.2],
                        borderColor: this.colors.accent,
                        backgroundColor: 'rgba(0, 0, 128, 0.1)',
                        tension: 0.4,
                        fill: true,
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                ...this.chartConfigs,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Financial Year',
                            color: '#64748b'
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    },
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: {
                            display: true,
                            text: 'Index / Percentage',
                            color: '#64748b'
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: {
                            display: true,
                            text: 'Satisfaction Score (1-5)',
                            color: '#64748b'
                        },
                        grid: {
                            drawOnChartArea: false,
                        },
                        min: 0,
                        max: 5
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutQuart'
                }
            }
        });
    }

    // Performance matrix scatter plot
    initPerformanceChart() {
        const ctx = document.getElementById('performanceMatrix');
        if (!ctx) return;

        this.charts.performance = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [
                    {
                        label: 'Municipal Corporations',
                        data: [
                            {x: 85, y: 92, municipality: 'Mumbai'},
                            {x: 88, y: 89, municipality: 'Delhi'},
                            {x: 82, y: 91, municipality: 'Bangalore'},
                            {x: 79, y: 87, municipality: 'Chennai'},
                            {x: 81, y: 88, municipality: 'Hyderabad'}
                        ],
                        backgroundColor: 'rgba(255, 107, 53, 0.6)',
                        borderColor: this.colors.primary,
                        pointRadius: 8,
                        pointHoverRadius: 12
                    },
                    {
                        label: 'Municipal Councils',
                        data: [
                            {x: 73, y: 78, municipality: 'Pune'},
                            {x: 76, y: 82, municipality: 'Nashik'},
                            {x: 71, y: 76, municipality: 'Rajkot'},
                            {x: 74, y: 79, municipality: 'Vadodara'},
                            {x: 69, y: 74, municipality: 'Indore'}
                        ],
                        backgroundColor: 'rgba(19, 136, 8, 0.6)',
                        borderColor: this.colors.secondary,
                        pointRadius: 8,
                        pointHoverRadius: 12
                    }
                ]
            },
            options: {
                ...this.chartConfigs,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Efficiency Score',
                            color: '#64748b'
                        },
                        min: 60,
                        max: 100
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Service Quality Score',
                            color: '#64748b'
                        },
                        min: 60,
                        max: 100
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const point = context.parsed;
                                const data = context.raw;
                                return `${data.municipality}: Efficiency ${point.x}, Quality ${point.y}`;
                            }
                        }
                    }
                }
            }
        });
    }

    // Comparative analysis chart
    initComparisonChart() {
        const ctx = document.getElementById('correlationChart');
        if (!ctx) return;

        this.charts.comparison = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Infrastructure', 'Digital Services', 'Healthcare', 'Education', 'Environment', 'Governance'],
                datasets: [
                    {
                        label: 'Tier 1 Cities',
                        data: [85, 78, 82, 76, 71, 88],
                        borderColor: this.colors.primary,
                        backgroundColor: 'rgba(255, 107, 53, 0.2)',
                        pointBackgroundColor: this.colors.primary,
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: this.colors.primary
                    },
                    {
                        label: 'Tier 2 Cities',
                        data: [72, 65, 74, 68, 66, 71],
                        borderColor: this.colors.secondary,
                        backgroundColor: 'rgba(19, 136, 8, 0.2)',
                        pointBackgroundColor: this.colors.secondary,
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: this.colors.secondary
                    }
                ]
            },
            options: {
                ...this.chartConfigs,
                scales: {
                    r: {
                        angleLines: {
                            display: true,
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        suggestedMin: 0,
                        suggestedMax: 100,
                        ticks: {
                            stepSize: 20,
                            color: '#64748b'
                        },
                        pointLabels: {
                            color: '#64748b'
                        }
                    }
                }
            }
        });
    }

    // Predictive analytics chart
    initPredictionChart() {
        const ctx = document.getElementById('predictionChart');
        if (!ctx) return;

        this.charts.prediction = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2024', '2025', '2026', '2027', '2028', '2029', '2030'],
                datasets: [
                    {
                        label: 'Projected Growth',
                        data: [73, 76, 79, 82, 85, 88, 91],
                        borderColor: this.colors.primary,
                        backgroundColor: 'rgba(255, 107, 53, 0.1)',
                        fill: true,
                        tension: 0.4,
                        borderDash: [5, 5],
                        pointStyle: 'triangle'
                    },
                    {
                        label: 'Conservative Estimate',
                        data: [73, 74, 76, 78, 80, 82, 84],
                        borderColor: this.colors.secondary,
                        backgroundColor: 'rgba(19, 136, 8, 0.1)',
                        fill: true,
                        tension: 0.4,
                        borderDash: [10, 5],
                        pointStyle: 'rect'
                    }
                ]
            },
            options: {
                ...this.chartConfigs,
                plugins: {
                    ...this.chartConfigs.plugins,
                    annotation: {
                        annotations: {
                            line1: {
                                type: 'line',
                                xMin: '2024',
                                xMax: '2024',
                                borderColor: 'rgba(255, 0, 0, 0.5)',
                                borderWidth: 2,
                                label: {
                                    content: 'Current Year',
                                    enabled: true
                                }
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Year',
                            color: '#64748b'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Development Index',
                            color: '#64748b'
                        },
                        min: 60,
                        max: 100
                    }
                }
            }
        });
    }

    // D3.js Heatmap for geographic performance
    initHeatmapChart() {
        const container = document.getElementById('heatmapChart');
        if (!container) return;

        // Clear previous content
        d3.select(container).selectAll("*").remove();

        const margin = {top: 30, right: 100, bottom: 60, left: 100};
        const width = container.clientWidth - margin.left - margin.right;
        const height = 300 - margin.top - margin.bottom;

        const svg = d3.select(container)
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // Sample data for Indian states and metrics
        const data = [
            {state: "Maharashtra", metric: "Infrastructure", value: 85},
            {state: "Maharashtra", metric: "Healthcare", value: 78},
            {state: "Maharashtra", metric: "Education", value: 82},
            {state: "Maharashtra", metric: "Digital", value: 88},
            {state: "Karnataka", metric: "Infrastructure", value: 82},
            {state: "Karnataka", metric: "Healthcare", value: 85},
            {state: "Karnataka", metric: "Education", value: 79},
            {state: "Karnataka", metric: "Digital", value: 92},
            {state: "Tamil Nadu", metric: "Infrastructure", value: 79},
            {state: "Tamil Nadu", metric: "Healthcare", value: 88},
            {state: "Tamil Nadu", metric: "Education", value: 85},
            {state: "Tamil Nadu", metric: "Digital", value: 81},
            {state: "Gujarat", metric: "Infrastructure", value: 84},
            {state: "Gujarat", metric: "Healthcare", value: 75},
            {state: "Gujarat", metric: "Education", value: 77},
            {state: "Gujarat", metric: "Digital", value: 83}
        ];

        const states = [...new Set(data.map(d => d.state))];
        const metrics = [...new Set(data.map(d => d.metric))];

        const xScale = d3.scaleBand()
            .range([0, width])
            .domain(metrics)
            .padding(0.05);

        const yScale = d3.scaleBand()
            .range([height, 0])
            .domain(states)
            .padding(0.05);

        const colorScale = d3.scaleSequential()
            .interpolator(d3.interpolateOranges)
            .domain([60, 95]);

        // Add rectangles
        svg.selectAll()
            .data(data)
            .enter()
            .append("rect")
            .attr("x", d => xScale(d.metric))
            .attr("y", d => yScale(d.state))
            .attr("width", xScale.bandwidth())
            .attr("height", yScale.bandwidth())
            .style("fill", d => colorScale(d.value))
            .style("stroke", "white")
            .style("stroke-width", 2)
            .on("mouseover", function(event, d) {
                const tooltip = d3.select("body").append("div")
                    .attr("class", "d3-tooltip")
                    .style("opacity", 0)
                    .style("position", "absolute")
                    .style("background", "rgba(0, 0, 0, 0.8)")
                    .style("color", "white")
                    .style("padding", "8px")
                    .style("border-radius", "4px")
                    .style("font-size", "12px");

                tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
                tooltip.html(`${d.state}<br/>${d.metric}: ${d.value}`)
                    .style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", function(d) {
                d3.selectAll(".d3-tooltip").remove();
            });

        // Add text labels
        svg.selectAll()
            .data(data)
            .enter()
            .append("text")
            .attr("x", d => xScale(d.metric) + xScale.bandwidth()/2)
            .attr("y", d => yScale(d.state) + yScale.bandwidth()/2)
            .attr("dy", ".35em")
            .attr("text-anchor", "middle")
            .style("fill", "white")
            .style("font-size", "12px")
            .style("font-weight", "bold")
            .text(d => d.value);

        // Add axes
        svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(xScale))
            .selectAll("text")
            .style("fill", "#64748b");

        svg.append("g")
            .call(d3.axisLeft(yScale))
            .selectAll("text")
            .style("fill", "#64748b");
    }

    // Chart update methods
    updateChartData(chartName, newData) {
        if (this.charts[chartName]) {
            this.charts[chartName].data = newData;
            this.charts[chartName].update();
        }
    }

    // Export chart as image
    exportChart(chartId) {
        const canvas = document.getElementById(chartId);
        if (canvas) {
            const url = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = `${chartId}_export.png`;
            link.href = url;
            link.click();
        }
    }

    // Resize all charts
    resizeCharts() {
        Object.values(this.charts).forEach(chart => {
            if (chart && typeof chart.resize === 'function') {
                chart.resize();
            }
        });

        // Resize D3 charts
        this.initHeatmapChart();
    }

    // Destroy all charts
    destroyCharts() {
        Object.values(this.charts).forEach(chart => {
            if (chart && typeof chart.destroy === 'function') {
                chart.destroy();
            }
        });
        this.charts = {};
    }

    // Get chart by name
    getChart(name) {
        return this.charts[name];
    }

    // Theme update for charts
    updateChartsTheme(isDark) {
        const textColor = isDark ? '#cbd5e1' : '#64748b';
        const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';

        Object.values(this.charts).forEach(chart => {
            if (chart && chart.options) {
                // Update text colors
                if (chart.options.plugins && chart.options.plugins.legend) {
                    chart.options.plugins.legend.labels.color = textColor;
                }
                
                // Update scales colors
                if (chart.options.scales) {
                    Object.values(chart.options.scales).forEach(scale => {
                        if (scale.title) scale.title.color = textColor;
                        if (scale.ticks) scale.ticks.color = textColor;
                        if (scale.grid) scale.grid.color = gridColor;
                        if (scale.pointLabels) scale.pointLabels.color = textColor;
                    });
                }
                
                chart.update();
            }
        });
    }
}

// Initialize charts when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.municipalCharts = new MunicipalCharts();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MunicipalCharts;
}
