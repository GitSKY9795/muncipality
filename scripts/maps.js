// Municipal Dashboard - Interactive Maps and GIS Features
class MunicipalMaps {
    constructor() {
        this.map = null;
        this.markers = [];
        this.markerClusters = null;
        this.currentLayer = 'osm';
        this.filters = {
            state: '',
            type: '',
            population: 20000000
        };
        this.overlays = {
            population: true,
            budget: false,
            development: false
        };
        this.userLocation = null;
        this.init();
    }

    init() {
        this.initializeMap();
        this.setupEventListeners();
        this.loadMunicipalityData();
        this.initializeControls();
    }

    // Initialize Leaflet map
    initializeMap() {
        const mapContainer = document.getElementById('map') || document.getElementById('fullMap');
        if (!mapContainer) return;

        // Initialize map centered on India
        this.map = L.map(mapContainer, {
            center: [20.5937, 78.9629], // Center of India
            zoom: 5,
            zoomControl: true,
            attributionControl: true
        });

        // Add base layers
        this.addBaseLayers();
        
        // Add marker cluster group
        this.markerClusters = L.markerClusterGroup({
            chunkedLoading: true,
            maxClusterRadius: 50,
            spiderfyOnMaxZoom: true,
            showCoverageOnHover: false,
            zoomToBoundsOnClick: true
        });
        
        this.map.addLayer(this.markerClusters);

        // Add scale control
        L.control.scale({
            position: 'bottomleft',
            metric: true,
            imperial: false
        }).addTo(this.map);
    }

    // Add different base map layers
    addBaseLayers() {
        const layers = {
            osm: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors',
                maxZoom: 18
            }),
            satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles © Esri',
                maxZoom: 18
            }),
            terrain: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap',
                maxZoom: 17
            })
        };

        // Add default layer
        layers[this.currentLayer].addTo(this.map);
        
        // Store layers for switching
        this.baseLayers = layers;
    }

    // Load and display municipality data
    async loadMunicipalityData() {
        try {
            if (typeof municipalityData === 'undefined') {
                throw new Error('Municipality data not loaded');
            }

            this.clearMarkers();
            const filteredData = this.applyFilters(municipalityData);
            this.createMarkers(filteredData);
            this.updateMapLegend();
            
        } catch (error) {
            console.error('Error loading municipality data:', error);
            this.showErrorMessage('Failed to load municipality data. Please refresh the page.');
        }
    }

    // Apply current filters to municipality data
    applyFilters(data) {
        return data.filter(municipality => {
            // State filter
            if (this.filters.state && municipality.state.toLowerCase() !== this.filters.state.toLowerCase()) {
                return false;
            }
            
            // Type filter
            if (this.filters.type && municipality.type !== this.filters.type) {
                return false;
            }
            
            // Population filter
            if (municipality.population > this.filters.population) {
                return false;
            }
            
            return true;
        });
    }

    // Create markers for municipalities
    createMarkers(data) {
        data.forEach(municipality => {
            const marker = this.createMunicipalityMarker(municipality);
            this.markers.push(marker);
            this.markerClusters.addLayer(marker);
        });
    }

    // Create individual municipality marker
    createMunicipalityMarker(municipality) {
        const markerColor = this.getMarkerColor(municipality.type);
        const markerSize = this.getMarkerSize(municipality.population);
        
        // Create custom icon
        const icon = L.divIcon({
            className: 'custom-marker',
            html: `<div class="custom-marker ${municipality.type}" style="width: ${markerSize}px; height: ${markerSize}px; background-color: ${markerColor};"></div>`,
            iconSize: [markerSize, markerSize],
            iconAnchor: [markerSize/2, markerSize/2]
        });

        const marker = L.marker([municipality.latitude, municipality.longitude], { icon })
            .bindPopup(this.createPopupContent(municipality), {
                maxWidth: 300,
                className: 'custom-popup'
            });

        // Add click event for sidebar info update
        marker.on('click', () => {
            this.updateMunicipalityInfo(municipality);
            this.highlightMarker(marker);
        });

        return marker;
    }

    // Get marker color based on municipality type
    getMarkerColor(type) {
        const colors = {
            'corporation': '#FF6B35',
            'council': '#138808',
            'panchayat': '#000080'
        };
        return colors[type] || '#6C757D';
    }

    // Get marker size based on population
    getMarkerSize(population) {
        if (population > 5000000) return 24;
        if (population > 1000000) return 20;
        if (population > 500000) return 16;
        return 12;
    }

    // Create popup content for municipality
    createPopupContent(municipality) {
        return `
            <div class="municipality-popup">
                <h3>${municipality.name}</h3>
                <div class="popup-info">
                    <div class="popup-row">
                        <span class="popup-label">State:</span>
                        <span class="popup-value">${municipality.state}</span>
                    </div>
                    <div class="popup-row">
                        <span class="popup-label">Type:</span>
                        <span class="popup-value">${this.formatType(municipality.type)}</span>
                    </div>
                    <div class="popup-row">
                        <span class="popup-label">Population:</span>
                        <span class="popup-value">${this.formatNumber(municipality.population)}</span>
                    </div>
                    <div class="popup-row">
                        <span class="popup-label">Budget:</span>
                        <span class="popup-value">₹${municipality.budget} Cr</span>
                    </div>
                    <div class="popup-row">
                        <span class="popup-label">Development Index:</span>
                        <span class="popup-value">${municipality.developmentIndex}%</span>
                    </div>
                    ${municipality.website ? `<div class="popup-row">
                        <span class="popup-label">Website:</span>
                        <span class="popup-value"><a href="${municipality.website}" target="_blank">Visit</a></span>
                    </div>` : ''}
                </div>
            </div>
        `;
    }

    // Update municipality info in sidebar
    updateMunicipalityInfo(municipality) {
        const infoContainer = document.getElementById('municipalityInfo');
        if (!infoContainer) return;

        infoContainer.innerHTML = `
            <div class="municipality-info has-data">
                <h4>${municipality.name}</h4>
                <div class="info-item">
                    <span class="info-label">State:</span>
                    <span class="info-value">${municipality.state}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Type:</span>
                    <span class="info-value">${this.formatType(municipality.type)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Population:</span>
                    <span class="info-value">${this.formatNumber(municipality.population)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Area:</span>
                    <span class="info-value">${municipality.area} km²</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Budget:</span>
                    <span class="info-value">₹${municipality.budget} Cr</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Development Index:</span>
                    <span class="info-value">${municipality.developmentIndex}%</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Established:</span>
                    <span class="info-value">${municipality.established}</span>
                </div>
                ${municipality.mayor ? `<div class="info-item">
                    <span class="info-label">Mayor:</span>
                    <span class="info-value">${municipality.mayor}</span>
                </div>` : ''}
            </div>
        `;
    }

    // Clear all markers
    clearMarkers() {
        this.markerClusters.clearLayers();
        this.markers = [];
    }

    // Highlight selected marker
    highlightMarker(selectedMarker) {
        // Remove previous highlights
        this.markers.forEach(marker => {
            const element = marker.getElement();
            if (element) {
                element.classList.remove('marker-pulse');
            }
        });

        // Add highlight to selected marker
        const element = selectedMarker.getElement();
        if (element) {
            element.classList.add('marker-pulse');
        }
    }

    // Setup event listeners
    setupEventListeners() {
        // Map layer change
        const mapLayerSelect = document.getElementById('mapLayer');
        if (mapLayerSelect) {
            mapLayerSelect.addEventListener('change', (e) => {
                this.changeBaseLayer(e.target.value);
            });
        }

        // Filter controls
        const stateFilter = document.getElementById('stateFilter');
        if (stateFilter) {
            stateFilter.addEventListener('change', (e) => {
                this.filters.state = e.target.value;
                this.loadMunicipalityData();
            });
        }

        const typeFilter = document.getElementById('typeFilter');
        if (typeFilter) {
            typeFilter.addEventListener('change', (e) => {
                this.filters.type = e.target.value;
                this.loadMunicipalityData();
            });
        }

        const populationRange = document.getElementById('populationRange');
        if (populationRange) {
            populationRange.addEventListener('input', (e) => {
                this.filters.population = parseInt(e.target.value);
                this.updatePopulationDisplay(e.target.value);
                this.loadMunicipalityData();
            });
        }

        // Overlay checkboxes
        const overlayCheckboxes = ['showPopulation', 'showBudget', 'showDevelopment'];
        overlayCheckboxes.forEach(id => {
            const checkbox = document.getElementById(id);
            if (checkbox) {
                checkbox.addEventListener('change', (e) => {
                    const overlayType = id.replace('show', '').toLowerCase();
                    this.overlays[overlayType] = e.target.checked;
                    this.updateOverlays();
                });
            }
        });

        // Location button
        const locateBtn = document.getElementById('locateUser') || document.getElementById('locateBtn');
        if (locateBtn) {
            locateBtn.addEventListener('click', () => {
                this.locateUser();
            });
        }

        // Fullscreen button
        const fullscreenBtn = document.getElementById('fullscreen');
        if (fullscreenBtn) {
            fullscreenBtn.addEventListener('click', () => {
                this.toggleFullscreen();
            });
        }

        // Export button
        const exportBtn = document.getElementById('exportMap');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => {
                this.exportMap();
            });
        }
    }

    // Initialize filter controls
    initializeControls() {
        this.populateStateFilter();
        this.updatePopulationDisplay(20000000);
    }

    // Populate state filter with available states
    populateStateFilter() {
        const stateFilter = document.getElementById('stateFilter');
        if (!stateFilter || typeof municipalityData === 'undefined') return;

        const states = [...new Set(municipalityData.map(m => m.state))].sort();
        
        // Clear existing options (except "All States")
        while (stateFilter.children.length > 1) {
            stateFilter.removeChild(stateFilter.lastChild);
        }

        // Add state options
        states.forEach(state => {
            const option = document.createElement('option');
            option.value = state.toLowerCase().replace(/\s+/g, '-');
            option.textContent = state;
            stateFilter.appendChild(option);
        });
    }

    // Update population range display
    updatePopulationDisplay(value) {
        const display = document.getElementById('populationValue');
        if (!display) return;

        const val = parseInt(value);
        if (val >= 10000000) {
            display.textContent = Math.round(val / 10000000) + 'Cr+';
        } else if (val >= 100000) {
            display.textContent = Math.round(val / 100000) + 'L+';
        } else if (val >= 1000) {
            display.textContent = Math.round(val / 1000) + 'K+';
        } else {
            display.textContent = val + '+';
        }
    }

    // Change base map layer
    changeBaseLayer(layerName) {
        this.map.removeLayer(this.baseLayers[this.currentLayer]);
        this.map.addLayer(this.baseLayers[layerName]);
        this.currentLayer = layerName;
    }

    // Update data overlays
    updateOverlays() {
        // Implementation for showing different data overlays
        // This would typically involve adding/removing additional layers
        console.log('Updating overlays:', this.overlays);
    }

    // Locate user's current position
    locateUser() {
        if (!navigator.geolocation) {
            this.showErrorMessage('Geolocation is not supported by this browser.');
            return;
        }

        const locateBtn = document.getElementById('locateUser') || document.getElementById('locateBtn');
        if (locateBtn) {
            locateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                this.userLocation = [latitude, longitude];
                
                // Add user location marker
                if (this.userMarker) {
                    this.map.removeLayer(this.userMarker);
                }
                
                this.userMarker = L.marker([latitude, longitude], {
                    icon: L.divIcon({
                        className: 'user-location-marker',
                        html: '<i class="fas fa-user-circle" style="color: #007bff; font-size: 24px;"></i>',
                        iconSize: [24, 24],
                        iconAnchor: [12, 12]
                    })
                }).addTo(this.map);

                // Pan to user location
                this.map.setView([latitude, longitude], 12);

                // Find nearest municipalities
                this.findNearestMunicipalities(latitude, longitude);

                if (locateBtn) {
                    locateBtn.innerHTML = '<i class="fas fa-location-arrow"></i>';
                }
            },
            (error) => {
                let message = 'Unable to retrieve your location. ';
                switch(error.code) {
                    case error.PERMISSION_DENIED:
                        message += 'Please allow location access.';
                        break;
                    case error.POSITION_UNAVAILABLE:
                        message += 'Location information unavailable.';
                        break;
                    case error.TIMEOUT:
                        message += 'Location request timed out.';
                        break;
                }
                this.showErrorMessage(message);
                
                if (locateBtn) {
                    locateBtn.innerHTML = '<i class="fas fa-location-arrow"></i>';
                }
            },
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            }
        );
    }

    // Find nearest municipalities to user location
    findNearestMunicipalities(userLat, userLng) {
        if (typeof municipalityData === 'undefined') return;

        const nearest = municipalityData
            .map(municipality => ({
                ...municipality,
                distance: this.calculateDistance(userLat, userLng, municipality.latitude, municipality.longitude)
            }))
            .sort((a, b) => a.distance - b.distance)
            .slice(0, 5);

        this.showNearestMunicipalities(nearest);
    }

    // Calculate distance between two coordinates
    calculateDistance(lat1, lng1, lat2, lng2) {
        const R = 6371; // Earth's radius in kilometers
        const dLat = this.toRadians(lat2 - lat1);
        const dLng = this.toRadians(lng2 - lng1);
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                  Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2)) *
                  Math.sin(dLng/2) * Math.sin(dLng/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    }

    toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }

    // Show nearest municipalities
    showNearestMunicipalities(nearest) {
        const infoContainer = document.getElementById('municipalityInfo');
        if (!infoContainer) return;

        let html = '<div class="municipality-info has-data"><h4>Nearest Municipalities</h4>';
        nearest.forEach(municipality => {
            html += `
                <div class="info-item" style="cursor: pointer; padding: 0.5rem; border-radius: 4px; margin-bottom: 0.5rem; background: rgba(255, 107, 53, 0.1);" 
                     onclick="window.municipalMaps.focusOnMunicipality('${municipality.name}')">
                    <span class="info-label">${municipality.name}</span>
                    <span class="info-value">${municipality.distance.toFixed(1)} km</span>
                </div>
            `;
        });
        html += '</div>';
        infoContainer.innerHTML = html;
    }

    // Focus on specific municipality
    focusOnMunicipality(name) {
        if (typeof municipalityData === 'undefined') return;

        const municipality = municipalityData.find(m => m.name === name);
        if (municipality) {
            this.map.setView([municipality.latitude, municipality.longitude], 12);
            
            // Find and open the marker popup
            this.markers.forEach(marker => {
                const popup = marker.getPopup();
                if (popup && popup.getContent().includes(name)) {
                    marker.openPopup();
                    this.updateMunicipalityInfo(municipality);
                }
            });
        }
    }

    // Toggle fullscreen mode
    toggleFullscreen() {
        const mapContainer = this.map.getContainer();
        if (!document.fullscreenElement) {
            mapContainer.requestFullscreen().then(() => {
                setTimeout(() => this.map.invalidateSize(), 100);
            });
        } else {
            document.exitFullscreen();
        }
    }

    // Export map as image
    exportMap() {
        // Use leaflet-image plugin or html2canvas for map export
        this.showInfoMessage('Map export functionality would be implemented with additional libraries like leaflet-image or html2canvas.');
    }

    // Update map legend
    updateMapLegend() {
        // Legend is handled in CSS and HTML
    }

    // Utility functions
    formatType(type) {
        const types = {
            'corporation': 'Municipal Corporation',
            'council': 'Municipal Council',
            'panchayat': 'Nagar Panchayat'
        };
        return types[type] || type;
    }

    formatNumber(num) {
        if (num >= 10000000) {
            return (num / 10000000).toFixed(1) + ' Cr';
        } else if (num >= 100000) {
            return (num / 100000).toFixed(1) + ' L';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }

    // Show error message
    showErrorMessage(message) {
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-error';
        alertDiv.innerHTML = `
            <i class="fas fa-exclamation-triangle"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.remove()" style="margin-left: auto; background: none; border: none; color: inherit; cursor: pointer;">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        const container = document.querySelector('.map-content') || document.body;
        container.insertBefore(alertDiv, container.firstChild);

        setTimeout(() => alertDiv.remove(), 5000);
    }

    // Show info message
    showInfoMessage(message) {
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-info';
        alertDiv.innerHTML = `
            <i class="fas fa-info-circle"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.remove()" style="margin-left: auto; background: none; border: none; color: inherit; cursor: pointer;">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        const container = document.querySelector('.map-content') || document.body;
        container.insertBefore(alertDiv, container.firstChild);

        setTimeout(() => alertDiv.remove(), 3000);
    }

    // Public method to initialize map (called from main dashboard)
    initMap() {
        if (this.map) {
            setTimeout(() => {
                this.map.invalidateSize();
                this.loadMunicipalityData();
            }, 100);
        } else {
            this.init();
        }
    }

    // Cleanup
    destroy() {
        if (this.map) {
            this.map.remove();
        }
    }
}

// Initialize maps when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.municipalMaps = new MunicipalMaps();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MunicipalMaps;
}
