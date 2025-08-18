// Municipal Issue Reporting System - Sample Issues Data

const sampleIssues = [
    {
        id: 1,
        title: "Broken Street Light on Main Road",
        description: "The street light near the bus stop on Main Road has been broken for over a week. It's creating safety concerns for pedestrians and vehicles during night hours.",
        category: "streetlights",
        status: "open",
        priority: "high",
        location: "Main Road, Near Bus Stop, Sector 12",
        coordinates: [28.6139, 77.2090],
        reporterName: "Rajesh Kumar",
        reporterPhone: "+91 98765 43210",
        reportedDate: "2025-01-15T10:30:00Z",
        photos: ["street_light_broken.jpg"],
        assignedTo: null,
        estimatedResolution: null,
        actualResolution: null,
        updates: [
            {
                date: "2025-01-15T10:30:00Z",
                message: "Issue reported by citizen",
                updatedBy: "System"
            }
        ]
    },
    {
        id: 2,
        title: "Water Supply Disruption in Residential Area",
        description: "Water supply has been completely cut off in Block A of Green Valley Society since yesterday morning. Residents are facing severe inconvenience.",
        category: "water",
        status: "in-progress",
        priority: "high",
        location: "Green Valley Society, Block A",
        coordinates: [28.5355, 77.3910],
        reporterName: "Priya Sharma",
        reporterPhone: "+91 87654 32109",
        reportedDate: "2025-01-14T08:15:00Z",
        photos: ["water_supply_issue.jpg"],
        assignedTo: "Water Department Team 3",
        estimatedResolution: "2025-01-16T18:00:00Z",
        actualResolution: null,
        updates: [
            {
                date: "2025-01-14T08:15:00Z",
                message: "Issue reported by citizen",
                updatedBy: "System"
            },
            {
                date: "2025-01-14T14:30:00Z",
                message: "Assigned to Water Department Team 3",
                updatedBy: "Admin"
            },
            {
                date: "2025-01-15T09:00:00Z",
                message: "Team inspecting the pipeline. Main valve issue identified.",
                updatedBy: "Water Department Team 3"
            }
        ]
    },
    {
        id: 3,
        title: "Pothole on Commercial Street",
        description: "Large pothole developed near the market entrance on Commercial Street. It's causing vehicle damage and traffic congestion.",
        category: "roads",
        status: "resolved",
        priority: "medium",
        location: "Commercial Street, Near Market Entrance",
        coordinates: [28.6692, 77.4538],
        reporterName: "Amit Singh",
        reporterPhone: "+91 76543 21098",
        reportedDate: "2025-01-10T16:45:00Z",
        photos: ["pothole_commercial_street.jpg"],
        assignedTo: "Road Maintenance Team 1",
        estimatedResolution: "2025-01-13T17:00:00Z",
        actualResolution: "2025-01-12T15:30:00Z",
        updates: [
            {
                date: "2025-01-10T16:45:00Z",
                message: "Issue reported by citizen",
                updatedBy: "System"
            },
            {
                date: "2025-01-11T09:30:00Z",
                message: "Assigned to Road Maintenance Team 1",
                updatedBy: "Admin"
            },
            {
                date: "2025-01-12T10:00:00Z",
                message: "Work in progress - filling the pothole",
                updatedBy: "Road Maintenance Team 1"
            },
            {
                date: "2025-01-12T15:30:00Z",
                message: "Pothole filled and road surface restored. Issue resolved.",
                updatedBy: "Road Maintenance Team 1"
            }
        ]
    },
    {
        id: 4,
        title: "Garbage Collection Not Done for 3 Days",
        description: "Garbage has not been collected from our locality for the past 3 days. The waste is accumulating and creating unhygienic conditions.",
        category: "garbage",
        status: "open",
        priority: "high",
        location: "Shanti Nagar, Lane 5",
        coordinates: [28.7041, 77.1025],
        reporterName: "Sunita Devi",
        reporterPhone: "+91 65432 10987",
        reportedDate: "2025-01-16T07:00:00Z",
        photos: ["garbage_accumulation.jpg"],
        assignedTo: null,
        estimatedResolution: null,
        actualResolution: null,
        updates: [
            {
                date: "2025-01-16T07:00:00Z",
                message: "Issue reported by citizen",
                updatedBy: "System"
            }
        ]
    },
    {
        id: 5,
        title: "Blocked Drainage System",
        description: "The drainage system in our area is completely blocked, causing water logging during recent rains. Immediate attention required.",
        category: "drainage",
        status: "in-progress",
        priority: "high",
        location: "Model Town, Sector 7",
        coordinates: [28.7196, 77.2094],
        reporterName: "Dr. Vikram Mehta",
        reporterPhone: "+91 54321 09876",
        reportedDate: "2025-01-13T11:20:00Z",
        photos: ["blocked_drainage.jpg", "water_logging.jpg"],
        assignedTo: "Drainage Maintenance Team 2",
        estimatedResolution: "2025-01-17T16:00:00Z",
        actualResolution: null,
        updates: [
            {
                date: "2025-01-13T11:20:00Z",
                message: "Issue reported by citizen",
                updatedBy: "System"
            },
            {
                date: "2025-01-13T15:45:00Z",
                message: "Assigned to Drainage Maintenance Team 2",
                updatedBy: "Admin"
            },
            {
                date: "2025-01-14T10:30:00Z",
                message: "Team investigating blockage points. Heavy silt accumulation found.",
                updatedBy: "Drainage Maintenance Team 2"
            }
        ]
    },
    {
        id: 6,
        title: "Park Maintenance Required",
        description: "The children's park in our locality needs urgent maintenance. Swings are broken, and the area needs cleaning and landscaping.",
        category: "parks",
        status: "open",
        priority: "low",
        location: "Community Park, Vasant Vihar",
        coordinates: [28.5672, 77.1589],
        reporterName: "Residents Welfare Association",
        reporterPhone: "+91 43210 98765",
        reportedDate: "2025-01-14T18:30:00Z",
        photos: ["park_maintenance_needed.jpg"],
        assignedTo: null,
        estimatedResolution: null,
        actualResolution: null,
        updates: [
            {
                date: "2025-01-14T18:30:00Z",
                message: "Issue reported by citizens",
                updatedBy: "System"
            }
        ]
    },
    {
        id: 7,
        title: "Electricity Power Cut for 6 Hours Daily",
        description: "Our area is experiencing scheduled power cuts of 6 hours daily for the past week. No prior notice was given to residents.",
        category: "electricity",
        status: "in-progress",
        priority: "medium",
        location: "Krishna Nagar, Block C",
        coordinates: [28.6748, 77.2424],
        reporterName: "Ravi Gupta",
        reporterPhone: "+91 32109 87654",
        reportedDate: "2025-01-12T14:00:00Z",
        photos: [],
        assignedTo: "Electricity Board Team 5",
        estimatedResolution: "2025-01-18T12:00:00Z",
        actualResolution: null,
        updates: [
            {
                date: "2025-01-12T14:00:00Z",
                message: "Issue reported by citizen",
                updatedBy: "System"
            },
            {
                date: "2025-01-12T16:20:00Z",
                message: "Forwarded to Electricity Board Team 5",
                updatedBy: "Admin"
            },
            {
                date: "2025-01-13T11:00:00Z",
                message: "Transformer maintenance in progress. Schedule will normalize by Jan 18.",
                updatedBy: "Electricity Board Team 5"
            }
        ]
    },
    {
        id: 8,
        title: "Sewage Overflow Near School",
        description: "Sewage is overflowing from manholes near the government school. It's creating health hazards for children and staff.",
        category: "sanitation",
        status: "open",
        priority: "high",
        location: "Government School Road, Civil Lines",
        coordinates: [28.6861, 77.2068],
        reporterName: "School Principal",
        reporterPhone: "+91 21098 76543",
        reportedDate: "2025-01-15T12:45:00Z",
        photos: ["sewage_overflow.jpg"],
        assignedTo: null,
        estimatedResolution: null,
        actualResolution: null,
        updates: [
            {
                date: "2025-01-15T12:45:00Z",
                message: "Issue reported by school administration",
                updatedBy: "System"
            }
        ]
    },
    {
        id: 9,
        title: "Stray Animals in Residential Area",
        description: "Increasing number of stray dogs in our residential area. Some residents have been scared, especially children while playing outside.",
        category: "other",
        status: "open",
        priority: "medium",
        location: "Rajouri Garden, Block B",
        coordinates: [28.6417, 77.1167],
        reporterName: "Neighborhood Watch Group",
        reporterPhone: "+91 10987 65432",
        reportedDate: "2025-01-16T09:15:00Z",
        photos: ["stray_animals.jpg"],
        assignedTo: null,
        estimatedResolution: null,
        actualResolution: null,
        updates: [
            {
                date: "2025-01-16T09:15:00Z",
                message: "Issue reported by residents",
                updatedBy: "System"
            }
        ]
    },
    {
        id: 10,
        title: "Traffic Signal Not Working",
        description: "Traffic signal at the busy intersection has been malfunctioning for 2 days. Traffic police have been manually managing, but it's causing congestion.",
        category: "roads",
        status: "resolved",
        priority: "high",
        location: "Main Market Intersection",
        coordinates: [28.6304, 77.2177],
        reporterName: "Traffic Police",
        reporterPhone: "+91 98765 43211",
        reportedDate: "2025-01-11T08:30:00Z",
        photos: ["traffic_signal_issue.jpg"],
        assignedTo: "Traffic Management Team",
        estimatedResolution: "2025-01-12T16:00:00Z",
        actualResolution: "2025-01-12T14:45:00Z",
        updates: [
            {
                date: "2025-01-11T08:30:00Z",
                message: "Issue reported by traffic police",
                updatedBy: "System"
            },
            {
                date: "2025-01-11T10:00:00Z",
                message: "High priority issue assigned to Traffic Management Team",
                updatedBy: "Admin"
            },
            {
                date: "2025-01-12T09:30:00Z",
                message: "Electrical fault in control unit identified. Replacement in progress.",
                updatedBy: "Traffic Management Team"
            },
            {
                date: "2025-01-12T14:45:00Z",
                message: "New control unit installed and tested. Traffic signal fully operational.",
                updatedBy: "Traffic Management Team"
            }
        ]
    },
    {
        id: 11,
        title: "Illegal Construction Blocking Road",
        description: "An illegal construction is blocking half of the road width, making it difficult for vehicles to pass. Construction material is also scattered on the road.",
        category: "other",
        status: "in-progress",
        priority: "medium",
        location: "Nehru Place, Lane 3",
        coordinates: [28.5494, 77.2500],
        reporterName: "Local Shopkeeper",
        reporterPhone: "+91 87654 32110",
        reportedDate: "2025-01-13T17:20:00Z",
        photos: ["illegal_construction.jpg"],
        assignedTo: "Building Department",
        estimatedResolution: "2025-01-20T17:00:00Z",
        actualResolution: null,
        updates: [
            {
                date: "2025-01-13T17:20:00Z",
                message: "Issue reported by local business",
                updatedBy: "System"
            },
            {
                date: "2025-01-14T11:30:00Z",
                message: "Case forwarded to Building Department for legal action",
                updatedBy: "Admin"
            },
            {
                date: "2025-01-15T14:00:00Z",
                message: "Site inspection completed. Notice served to property owner.",
                updatedBy: "Building Department"
            }
        ]
    },
    {
        id: 12,
        title: "Public Toilet Maintenance Needed",
        description: "The public toilet facility near the bus stand is in very poor condition. It needs immediate cleaning and repair work.",
        category: "sanitation",
        status: "open",
        priority: "medium",
        location: "Bus Stand, Platform 2",
        coordinates: [28.6433, 77.0847],
        reporterName: "Commuters Group",
        reporterPhone: "+91 76543 21099",
        reportedDate: "2025-01-15T16:00:00Z",
        photos: ["public_toilet_condition.jpg"],
        assignedTo: null,
        estimatedResolution: null,
        actualResolution: null,
        updates: [
            {
                date: "2025-01-15T16:00:00Z",
                message: "Issue reported by commuters",
                updatedBy: "System"
            }
        ]
    }
];

// Category configurations
const categoryConfig = {
    roads: {
        name: "Roads & Infrastructure",
        icon: "fas fa-road",
        color: "#E74C3C"
    },
    water: {
        name: "Water Supply",
        icon: "fas fa-tint",
        color: "#3498DB"
    },
    sanitation: {
        name: "Sanitation",
        icon: "fas fa-soap",
        color: "#9B59B6"
    },
    electricity: {
        name: "Electricity",
        icon: "fas fa-bolt",
        color: "#F39C12"
    },
    garbage: {
        name: "Garbage Collection",
        icon: "fas fa-trash",
        color: "#27AE60"
    },
    streetlights: {
        name: "Street Lights",
        icon: "fas fa-lightbulb",
        color: "#F1C40F"
    },
    drainage: {
        name: "Drainage",
        icon: "fas fa-water",
        color: "#34495E"
    },
    parks: {
        name: "Parks & Recreation",
        icon: "fas fa-tree",
        color: "#2ECC71"
    },
    other: {
        name: "Other",
        icon: "fas fa-exclamation-circle",
        color: "#6C757D"
    }
};

// Status configurations
const statusConfig = {
    open: {
        name: "Open",
        color: "#DC3545"
    },
    "in-progress": {
        name: "In Progress",
        color: "#FFC107"
    },
    resolved: {
        name: "Resolved",
        color: "#28A745"
    }
};

// Priority configurations
const priorityConfig = {
    high: {
        name: "High",
        color: "#DC3545"
    },
    medium: {
        name: "Medium",
        color: "#FFC107"
    },
    low: {
        name: "Low",
        color: "#28A745"
    }
};

// Helper functions
function getIssueById(id) {
    return sampleIssues.find(issue => issue.id === parseInt(id));
}

function getIssuesByStatus(status) {
    return sampleIssues.filter(issue => issue.status === status);
}

function getIssuesByCategory(category) {
    return sampleIssues.filter(issue => issue.category === category);
}

function getIssuesByPriority(priority) {
    return sampleIssues.filter(issue => issue.priority === priority);
}

function getIssueStats() {
    const stats = {
        total: sampleIssues.length,
        open: getIssuesByStatus('open').length,
        inProgress: getIssuesByStatus('in-progress').length,
        resolved: getIssuesByStatus('resolved').length,
        high: getIssuesByPriority('high').length,
        medium: getIssuesByPriority('medium').length,
        low: getIssuesByPriority('low').length
    };
    
    // Calculate percentages
    stats.resolvedPercentage = Math.round((stats.resolved / stats.total) * 100);
    stats.pendingPercentage = Math.round(((stats.open + stats.inProgress) / stats.total) * 100);
    
    return stats;
}

function getCategoryStats() {
    const categoryStats = {};
    Object.keys(categoryConfig).forEach(category => {
        categoryStats[category] = getIssuesByCategory(category).length;
    });
    return categoryStats;
}

function getRecentIssues(limit = 5) {
    return [...sampleIssues]
        .sort((a, b) => new Date(b.reportedDate) - new Date(a.reportedDate))
        .slice(0, limit);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    
    if (diffDays === 0) {
        if (diffHours === 0) {
            return 'Just now';
        } else if (diffHours === 1) {
            return '1 hour ago';
        } else {
            return `${diffHours} hours ago`;
        }
    } else if (diffDays === 1) {
        return 'Yesterday';
    } else if (diffDays < 7) {
        return `${diffDays} days ago`;
    } else {
        return date.toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }
}

// Function to generate a new issue ID
function generateIssueId() {
    return Math.max(...sampleIssues.map(issue => issue.id)) + 1;
}

// Function to add a new issue
function addNewIssue(issueData) {
    const newIssue = {
        id: generateIssueId(),
        ...issueData,
        status: 'open',
        reportedDate: new Date().toISOString(),
        assignedTo: null,
        estimatedResolution: null,
        actualResolution: null,
        updates: [
            {
                date: new Date().toISOString(),
                message: "Issue reported by citizen",
                updatedBy: "System"
            }
        ]
    };
    
    sampleIssues.push(newIssue);
    return newIssue;
}

// Function to update issue status
function updateIssueStatus(issueId, newStatus, updateMessage, updatedBy) {
    const issue = getIssueById(issueId);
    if (issue) {
        issue.status = newStatus;
        issue.updates.push({
            date: new Date().toISOString(),
            message: updateMessage,
            updatedBy: updatedBy
        });
        
        if (newStatus === 'resolved' && !issue.actualResolution) {
            issue.actualResolution = new Date().toISOString();
        }
        
        return issue;
    }
    return null;
}

// Export for use in other files
if (typeof window !== 'undefined') {
    window.issuesData = {
        sampleIssues,
        categoryConfig,
        statusConfig,
        priorityConfig,
        getIssueById,
        getIssuesByStatus,
        getIssuesByCategory,
        getIssuesByPriority,
        getIssueStats,
        getCategoryStats,
        getRecentIssues,
        formatDate,
        addNewIssue,
        updateIssueStatus
    };
}