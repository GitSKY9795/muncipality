// Municipal Issue Reporting System - Map Handler

class MapHandler {
    constructor() {
        this.map = null;
        this.markers = [];
        this.markerGroup = null;
        this.currentFilters = {
            category: '',
            status: ''
        };
        
        this.categoryColors = {
            roads: '#E74C3C',
            water: '#3498DB',
            sanitation: '#9B59B6',
            electricity: '#F39C12',
            garbage: '#27AE60',
            streetlights: '#F1C40F',
            drainage: '#34495E',
            parks: '#2ECC71',
            other: '#6C757D'
        };
    }

    initializeMap() {
        const mapContainer = document.getElementById('issuesMap');
        if (!mapContainer) return;

        // Default center (Delhi, India)
        const defaultCenter = [28.6139, 77.2090];
        const defaultZoom = 11;

        // Initialize Leaflet map
        this.map = L.map('issuesMap').setView(defaultCenter, defaultZoom);

        // Add OpenStreetMap tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 18
        }).addTo(this.map);

        // Create marker group for clustering
        this.markerGroup = L.layerGroup().addTo(this.map);

        // Add map controls
        this.addMapControls();
        
        return this.map;
    }

    loadIssuesMap() {
        if (!this.map) {
            this.initializeMap();
        }

        this.clearMarkers();
        this.addIssueMarkers();
    }

    addMapControls() {
        // Add custom control for legend
        const legendControl = L.control({ position: 'bottomright' });
        
        legendControl.onAdd = () => {
            const div = L.DomUtil.create('div', 'map-legend');
            div.style.cssText = `
                background: white;
                padding: 10px;
                border-radius: 5px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                font-size: 12px;
            `;
            
            let legendHTML = '<h4 style="margin: 0 0 8px 0;">Issue Categories</h4>';
            Object.entries(this.categoryColors).forEach(([category, color]) => {
                const categoryName = window.issuesData.categoryConfig[category]?.name || category;
                legendHTML += `
                    <div style="margin: 4px 0; display: flex; align-items: center;">
                        <div style="width: 12px; height: 12px; background: ${color}; border-radius: 50%; margin-right: 6px;"></div>
                        <span>${categoryName}</span>
                    </div>
                `;
            });
            
            div.innerHTML = legendHTML;
            return div;
        };
        
        legendControl.addTo(this.map);

        // Add zoom to location control
        const locationControl = L.control({ position: 'topleft' });
        
        locationControl.onAdd = () => {
            const div = L.DomUtil.create('div', 'leaflet-bar');
            const button = L.DomUtil.create('a', 'leaflet-control-button', div);
            button.innerHTML = '<i class="fas fa-crosshairs"></i>';
            button.href = '#';
            button.title = 'Zoom to your location';
            button.style.cssText = `
                display: flex;
                align-items: center;
                justify-content: center;
                width: 30px;
                height: 30px;
                text-decoration: none;
                color: #333;
                background: white;
            `;
            
            L.DomEvent.on(button, 'click', (e) => {
                L.DomEvent.preventDefault(e);
                this.zoomToUserLocation();
            });
            
            return div;
        };
        
        locationControl.addTo(this.map);
    }

    addIssueMarkers() {
        const issues = window.issuesData.sampleIssues;
        
        issues.forEach(issue => {
            if (issue.coordinates && issue.coordinates.length === 2) {
                const marker = this.createIssueMarker(issue);
                this.markers.push(marker);
                this.markerGroup.addLayer(marker);
            }
        });

        // Fit map to show all markers if markers exist
        if (this.markers.length > 0) {
            const group = new L.featureGroup(this.markers);
            this.map.fitBounds(group.getBounds().pad(0.1));
        }
    }

    createIssueMarker(issue) {
        const [lat, lng] = issue.coordinates;
        const category = window.issuesData.categoryConfig[issue.category];
        const status = window.issuesData.statusConfig[issue.status];
        
        // Create custom icon based on category and status
        const iconColor = this.categoryColors[issue.category] || '#6C757D';
        const iconClass = this.getStatusIconClass(issue.status);
        
        const customIcon = this.createCustomIcon(iconColor, category.icon, iconClass);
        
        const marker = L.marker([lat, lng], { icon: customIcon });
        
        // Create popup content
        const popupContent = this.createPopupContent(issue);
        marker.bindPopup(popupContent, {
            maxWidth: 300,
            className: 'issue-popup'
        });
        
        // Store issue data with marker
        marker.issueData = issue;
        
        return marker;
    }

    createCustomIcon(color, categoryIcon, statusClass) {
        const iconHTML = `
            <div class="custom-marker ${statusClass}" style="
                background-color: ${color};
                border: 2px solid white;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 12px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.3);
                position: relative;
            ">
                <i class="${categoryIcon}"></i>
                ${statusClass === 'resolved' ? '<div class="status-check"><i class="fas fa-check"></i></div>' : ''}
            </div>
        `;
        
        return L.divIcon({
            html: iconHTML,
            className: 'custom-div-icon',
            iconSize: [30, 30],
            iconAnchor: [15, 15],
            popupAnchor: [0, -15]
        });
    }

    getStatusIconClass(status) {
        const statusClasses = {
            'open': 'status-open',
            'in-progress': 'status-progress',
            'resolved': 'status-resolved'
        };
        return statusClasses[status] || 'status-open';
    }

    createPopupContent(issue) {
        const category = window.issuesData.categoryConfig[issue.category];
        const status = window.issuesData.statusConfig[issue.status];
        const priorityColor = issue.priority === 'high' ? '#DC3545' : issue.priority === 'medium' ? '#FFC107' : '#28A745';
        
        return `
            <div class="map-popup">
                <div class="popup-header">
                    <h4 class="popup-title">${issue.title}</h4>
                    <div class="popup-category">
                        <span class="category-icon ${issue.category}">
                            <i class="${category.icon}"></i>
                        </span>
                        ${category.name}
                    </div>
                </div>
                
                <div class="popup-description">${issue.description}</div>
                
                <div class="popup-meta">
                    <div class="popup-status">
                        <span class="issue-status ${issue.status.replace('-', '')}">${status.name}</span>
                    </div>
                    <div class="popup-priority">
                        <span class="priority-indicator" style="background-color: ${priorityColor}"></span>
                        ${issue.priority.charAt(0).toUpperCase() + issue.priority.slice(1)} Priority
                    </div>
                </div>
                
                <div class="popup-info">
                    <div><strong>Location:</strong> ${issue.location}</div>
                    <div><strong>Reported:</strong> ${window.issuesData.formatDate(issue.reportedDate)}</div>
                    <div><strong>Reporter:</strong> ${issue.reporterName}</div>
                    ${issue.assignedTo ? `<div><strong>Assigned to:</strong> ${issue.assignedTo}</div>` : ''}
                </div>
                
                <div class="popup-actions">
                    <button class="btn btn-sm btn-primary" onclick="app.showIssueDetail(${issue.id})">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                    ${window.app && window.app.currentUser && window.app.currentUser.role === 'admin' && issue.status !== 'resolved' ? `
                        <button class="btn btn-sm btn-outline" onclick="app.updateIssueStatus(${issue.id}, 'resolved')">
                            <i class="fas fa-check"></i> Resolve
                        </button>
                    ` : ''}
                </div>
            </div>
        `;
    }

    filterMapMarkers(filters) {
        this.currentFilters = { ...filters };
        
        this.markers.forEach(marker => {
            const issue = marker.issueData;
            let shouldShow = true;
            
            // Apply category filter
            if (filters.category && issue.category !== filters.category) {
                shouldShow = false;
            }
            
            // Apply status filter
            if (filters.status && issue.status !== filters.status) {
                shouldShow = false;
            }
            
            // Show/hide marker
            if (shouldShow) {
                if (!this.markerGroup.hasLayer(marker)) {
                    this.markerGroup.addLayer(marker);
                }
            } else {
                if (this.markerGroup.hasLayer(marker)) {
                    this.markerGroup.removeLayer(marker);
                }
            }
        });
        
        // Update map bounds to visible markers
        this.fitToVisibleMarkers();
    }

    fitToVisibleMarkers() {
        const visibleMarkers = [];
        this.markerGroup.eachLayer(layer => {
            visibleMarkers.push(layer);
        });
        
        if (visibleMarkers.length > 0) {
            const group = new L.featureGroup(visibleMarkers);
            this.map.fitBounds(group.getBounds().pad(0.1));
        }
    }

    clearMarkers() {
        if (this.markerGroup) {
            this.markerGroup.clearLayers();
        }
        this.markers = [];
    }

    zoomToUserLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    
                    this.map.setView([lat, lng], 15);
                    
                    // Add user location marker
                    const userIcon = L.divIcon({
                        html: `
                            <div style="
                                background-color: #007bff;
                                border: 3px solid white;
                                border-radius: 50%;
                                width: 20px;
                                height: 20px;
                                box-shadow: 0 2px 5px rgba(0,0,0,0.3);
                            "></div>
                        `,
                        className: 'user-location-icon',
                        iconSize: [20, 20],
                        iconAnchor: [10, 10]
                    });
                    
                    L.marker([lat, lng], { icon: userIcon })
                        .addTo(this.map)
                        .bindPopup('Your Location')
                        .openPopup();
                    
                    window.app.showToast('Location found and map centered!', 'success');
                },
                (error) => {
                    let errorMessage = 'Unable to get your location.';
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            errorMessage = 'Location access denied by user.';
                            break;
                        case error.POSITION_UNAVAILABLE:
                            errorMessage = 'Location information unavailable.';
                            break;
                        case error.TIMEOUT:
                            errorMessage = 'Location request timed out.';
                            break;
                    }
                    window.app.showToast(errorMessage, 'warning');
                }
            );
        } else {
            window.app.showToast('Geolocation is not supported by your browser.', 'error');
        }
    }

    addNewIssueToMap(issue) {
        if (issue.coordinates && issue.coordinates.length === 2) {
            const marker = this.createIssueMarker(issue);
            this.markers.push(marker);
            this.markerGroup.addLayer(marker);
            
            // Zoom to the new issue
            this.map.setView(issue.coordinates, 16);
            marker.openPopup();
        }
    }

    updateIssueMarker(issueId) {
        const issue = window.issuesData.getIssueById(issueId);
        if (!issue) return;
        
        // Find and update the marker
        const markerIndex = this.markers.findIndex(marker => marker.issueData.id === issueId);
        if (markerIndex !== -1) {
            const oldMarker = this.markers[markerIndex];
            this.markerGroup.removeLayer(oldMarker);
            
            const newMarker = this.createIssueMarker(issue);
            this.markers[markerIndex] = newMarker;
            this.markerGroup.addLayer(newMarker);
        }
    }

    exportMapData() {
        const visibleIssues = [];
        this.markerGroup.eachLayer(layer => {
            visibleIssues.push(layer.issueData);
        });
        
        const mapData = {
            center: this.map.getCenter(),
            zoom: this.map.getZoom(),
            bounds: this.map.getBounds(),
            filters: this.currentFilters,
            visibleIssues: visibleIssues.length,
            exportDate: new Date().toISOString(),
            issues: visibleIssues.map(issue => ({
                id: issue.id,
                title: issue.title,
                category: issue.category,
                status: issue.status,
                coordinates: issue.coordinates,
                location: issue.location,
                reportedDate: issue.reportedDate
            }))
        };
        
        const jsonContent = JSON.stringify(mapData, null, 2);
        const blob = new Blob([jsonContent], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'map-export.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        window.app.showToast('Map data exported successfully!', 'success');
    }

    getMapStats() {
        const visibleIssues = [];
        this.markerGroup.eachLayer(layer => {
            visibleIssues.push(layer.issueData);
        });
        
        const stats = {
            totalVisible: visibleIssues.length,
            totalMarkers: this.markers.length,
            byCategory: {},
            byStatus: {},
            byPriority: {}
        };
        
        visibleIssues.forEach(issue => {
            // Category stats
            stats.byCategory[issue.category] = (stats.byCategory[issue.category] || 0) + 1;
            
            // Status stats
            stats.byStatus[issue.status] = (stats.byStatus[issue.status] || 0) + 1;
            
            // Priority stats
            stats.byPriority[issue.priority] = (stats.byPriority[issue.priority] || 0) + 1;
        });
        
        return stats;
    }
}

// Export for use in main app
if (typeof window !== 'undefined') {
    window.MapHandler = MapHandler;
}