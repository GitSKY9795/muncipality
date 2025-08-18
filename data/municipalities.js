// Municipal Dashboard - Comprehensive Indian Municipalities Data
// This file contains structured data for Indian municipalities with authentic geographical and administrative information

const municipalityData = [
    // Major Municipal Corporations
    {
        id: 1,
        name: "Brihanmumbai Municipal Corporation",
        state: "Maharashtra",
        type: "corporation",
        population: 12442373,
        area: 603.4,
        latitude: 19.0760,
        longitude: 72.8777,
        budget: 39000,
        developmentIndex: 92,
        established: "1888",
        mayor: "Kishori Pednekar",
        website: "https://portal.mcgm.gov.in",
        districts: ["Mumbai City", "Mumbai Suburban"],
        economicActivity: "Financial Capital, Entertainment, IT Services",
        majorInfrastructure: ["Mumbai Metro", "Chhatrapati Shivaji Airport", "Mumbai Port"]
    },
    {
        id: 2,
        name: "Delhi Municipal Corporation",
        state: "Delhi",
        type: "corporation",
        population: 11034555,
        area: 1484,
        latitude: 28.6139,
        longitude: 77.2090,
        budget: 35000,
        developmentIndex: 89,
        established: "1958",
        mayor: "Shelly Oberoi",
        website: "https://www.mcdonline.gov.in",
        districts: ["New Delhi", "Central Delhi", "North Delhi", "South Delhi"],
        economicActivity: "Administrative Capital, IT Services, Manufacturing",
        majorInfrastructure: ["Delhi Metro", "Indira Gandhi Airport", "ISBT"]
    },
    {
        id: 3,
        name: "Bangalore Municipal Corporation",
        state: "Karnataka",
        type: "corporation",
        population: 8443675,
        area: 709,
        latitude: 12.9716,
        longitude: 77.5946,
        budget: 28000,
        developmentIndex: 94,
        established: "1949",
        mayor: "Gangambike Mallikarjun",
        website: "https://www.bbmp.gov.in",
        districts: ["Bangalore Urban"],
        economicActivity: "IT Capital, Aerospace, Biotechnology",
        majorInfrastructure: ["Namma Metro", "Kempegowda Airport", "Electronics City"]
    },
    {
        id: 4,
        name: "Chennai Municipal Corporation",
        state: "Tamil Nadu",
        type: "corporation",
        population: 7088000,
        area: 426,
        latitude: 13.0827,
        longitude: 80.2707,
        budget: 24000,
        developmentIndex: 88,
        established: "1688",
        mayor: "R. Priya",
        website: "https://www.chennaicorporation.gov.in",
        districts: ["Chennai"],
        economicActivity: "Automobile Hub, IT Services, Healthcare",
        majorInfrastructure: ["Chennai Metro", "Chennai Airport", "Chennai Port"]
    },
    {
        id: 5,
        name: "Hyderabad Municipal Corporation",
        state: "Telangana",
        type: "corporation",
        population: 6809970,
        area: 650,
        latitude: 17.3850,
        longitude: 78.4867,
        budget: 22000,
        developmentIndex: 91,
        established: "1955",
        mayor: "Gadwal Vijayalakshmi",
        website: "https://www.ghmc.gov.in",
        districts: ["Hyderabad"],
        economicActivity: "IT Services, Pharmaceuticals, Biotechnology",
        majorInfrastructure: ["Hyderabad Metro", "Rajiv Gandhi Airport", "HITEC City"]
    },
    {
        id: 6,
        name: "Pune Municipal Corporation",
        state: "Maharashtra",
        type: "corporation",
        population: 3124458,
        area: 331.26,
        latitude: 18.5204,
        longitude: 73.8567,
        budget: 15000,
        developmentIndex: 87,
        established: "1950",
        mayor: "Murlidhar Mohol",
        website: "https://www.punecorporation.org",
        districts: ["Pune"],
        economicActivity: "IT Services, Automobile, Education Hub",
        majorInfrastructure: ["Pune Metro", "Pune Airport", "IT Parks"]
    },
    {
        id: 7,
        name: "Ahmedabad Municipal Corporation",
        state: "Gujarat",
        type: "corporation",
        population: 5570585,
        area: 464,
        latitude: 23.0225,
        longitude: 72.5714,
        budget: 18000,
        developmentIndex: 83,
        established: "1950",
        mayor: "Kirit Parmar",
        website: "https://www.ahmedabadcity.gov.in",
        districts: ["Ahmedabad"],
        economicActivity: "Textiles, Chemicals, Pharmaceuticals",
        majorInfrastructure: ["BRTS", "Sardar Vallabhbhai Patel Airport", "Sabarmati Riverfront"]
    },
    {
        id: 8,
        name: "Kolkata Municipal Corporation",
        state: "West Bengal",
        type: "corporation",
        population: 4496694,
        area: 205,
        latitude: 22.5726,
        longitude: 88.3639,
        budget: 16000,
        developmentIndex: 79,
        established: "1876",
        mayor: "Firhad Hakim",
        website: "https://www.kmcgov.in",
        districts: ["Kolkata"],
        economicActivity: "Financial Services, IT, Jute Industry",
        majorInfrastructure: ["Kolkata Metro", "Netaji Subhas Airport", "Kolkata Port"]
    },
    {
        id: 9,
        name: "Surat Municipal Corporation",
        state: "Gujarat",
        type: "corporation",
        population: 4467797,
        area: 326.515,
        latitude: 21.1702,
        longitude: 72.8311,
        budget: 14000,
        developmentIndex: 85,
        established: "1966",
        mayor: "Hemali Boghawala",
        website: "https://www.suratmunicipal.gov.in",
        districts: ["Surat"],
        economicActivity: "Diamond Cutting, Textiles, Petrochemicals",
        majorInfrastructure: ["Surat Airport", "DREAM City", "Tapi Riverfront"]
    },
    {
        id: 10,
        name: "Jaipur Municipal Corporation",
        state: "Rajasthan",
        type: "corporation",
        population: 3073350,
        area: 467,
        latitude: 26.9124,
        longitude: 75.7873,
        budget: 12000,
        developmentIndex: 76,
        established: "1994",
        mayor: "Soumya Gurjar",
        website: "https://www.jaipur.rajasthan.gov.in",
        districts: ["Jaipur"],
        economicActivity: "Tourism, Handicrafts, Gems & Jewelry",
        majorInfrastructure: ["Jaipur Metro", "Jaipur Airport", "Pink City Heritage"]
    },

    // Municipal Councils
    {
        id: 11,
        name: "Nashik Municipal Corporation",
        state: "Maharashtra",
        type: "council",
        population: 1486973,
        area: 264.55,
        latitude: 19.9975,
        longitude: 73.7898,
        budget: 8000,
        developmentIndex: 82,
        established: "1864",
        mayor: "Satish Kulkarni",
        website: "https://www.nmc.gov.in",
        districts: ["Nashik"],
        economicActivity: "Wine Industry, Agriculture, IT Services",
        majorInfrastructure: ["Nashik Airport", "Wine Country", "Godavari Riverfront"]
    },
    {
        id: 12,
        name: "Vadodara Municipal Corporation",
        state: "Gujarat",
        type: "council",
        population: 1670806,
        area: 148.17,
        latitude: 22.3072,
        longitude: 73.1812,
        budget: 7500,
        developmentIndex: 80,
        established: "1950",
        mayor: "Keyur Rokadia",
        website: "https://www.vmc.gov.in",
        districts: ["Vadodara"],
        economicActivity: "Petrochemicals, Engineering, Education",
        majorInfrastructure: ["Vadodara Airport", "Lakshmi Vilas Palace", "MSU Campus"]
    },
    {
        id: 13,
        name: "Rajkot Municipal Corporation",
        state: "Gujarat",
        type: "council",
        population: 1390933,
        area: 170.00,
        latitude: 22.3039,
        longitude: 70.8022,
        budget: 6500,
        developmentIndex: 78,
        established: "1973",
        mayor: "Pradipsinh Jadeja",
        website: "https://www.rmc.gov.in",
        districts: ["Rajkot"],
        economicActivity: "Engineering, Automobile Parts, Agriculture",
        majorInfrastructure: ["Rajkot Airport", "Aji Dam", "Engineering Clusters"]
    },
    {
        id: 14,
        name: "Indore Municipal Corporation",
        state: "Madhya Pradesh",
        type: "corporation",
        population: 1964086,
        area: 530,
        latitude: 22.7196,
        longitude: 75.8577,
        budget: 9000,
        developmentIndex: 84,
        established: "1956",
        mayor: "Pushyamitra Bhargava",
        website: "https://www.imc.gov.in",
        districts: ["Indore"],
        economicActivity: "Pharmaceuticals, Textiles, IT Services",
        majorInfrastructure: ["Devi Ahilya Airport", "IIT Indore", "Super Corridor"]
    },
    {
        id: 15,
        name: "Bhopal Municipal Corporation",
        state: "Madhya Pradesh",
        type: "corporation",
        population: 1798218,
        area: 463,
        latitude: 23.2599,
        longitude: 77.4126,
        budget: 8500,
        developmentIndex: 77,
        established: "1956",
        mayor: "Malti Rai",
        website: "https://www.bmc.gov.in",
        districts: ["Bhopal"],
        economicActivity: "Government Services, Heavy Engineering, IT",
        majorInfrastructure: ["Raja Bhoj Airport", "Upper Lake", "VIP Road"]
    },

    // Nagar Panchayats and Smaller Municipalities
    {
        id: 16,
        name: "Tirupati Municipal Corporation",
        state: "Andhra Pradesh",
        type: "corporation",
        population: 374260,
        area: 27.44,
        latitude: 13.6288,
        longitude: 79.4192,
        budget: 4500,
        developmentIndex: 86,
        established: "2007",
        mayor: "R. Sirisha",
        website: "https://www.tirupatimc.ap.gov.in",
        districts: ["Chittoor"],
        economicActivity: "Tourism, Religious Activities, Agriculture",
        majorInfrastructure: ["Tirupati Airport", "Tirumala Temple", "TTD Complex"]
    },
    {
        id: 17,
        name: "Coimbatore Municipal Corporation",
        state: "Tamil Nadu",
        type: "corporation",
        population: 1061447,
        area: 246.75,
        latitude: 11.0168,
        longitude: 76.9558,
        budget: 6000,
        developmentIndex: 81,
        established: "1981",
        mayor: "Kalpana Anandakumar",
        website: "https://www.coimbatore.tn.gov.in",
        districts: ["Coimbatore"],
        economicActivity: "Textiles, Engineering, IT Services",
        majorInfrastructure: ["Coimbatore Airport", "Codissia Complex", "Textile Mills"]
    },
    {
        id: 18,
        name: "Kochi Municipal Corporation",
        state: "Kerala",
        type: "corporation",
        population: 677381,
        area: 94.88,
        latitude: 9.9312,
        longitude: 76.2673,
        budget: 5500,
        developmentIndex: 88,
        established: "1967",
        mayor: "M. Anilkumar",
        website: "https://www.kochicorporation.org",
        districts: ["Ernakulam"],
        economicActivity: "IT Services, Spices Trade, Tourism",
        majorInfrastructure: ["Cochin Airport", "Info Park", "Cochin Port"]
    },
    {
        id: 19,
        name: "Visakhapatnam Municipal Corporation",
        state: "Andhra Pradesh",
        type: "corporation",
        population: 2035922,
        area: 681.96,
        latitude: 17.6868,
        longitude: 83.2185,
        budget: 7000,
        developmentIndex: 79,
        established: "1979",
        mayor: "Golagani Hari Venkata Kumari",
        website: "https://www.gvmc.gov.in",
        districts: ["Visakhapatnam"],
        economicActivity: "Steel, Petrochemicals, IT Services, Port",
        majorInfrastructure: ["Visakhapatnam Airport", "Visakhapatnam Port", "Vizag Steel Plant"]
    },
    {
        id: 20,
        name: "Thiruvananthapuram Municipal Corporation",
        state: "Kerala",
        type: "corporation",
        population: 957730,
        area: 214.86,
        latitude: 8.5241,
        longitude: 76.9366,
        budget: 5000,
        developmentIndex: 90,
        established: "1940",
        mayor: "Arya Rajendran",
        website: "https://www.trivandrum.corp.gov.in",
        districts: ["Thiruvananthapuram"],
        economicActivity: "IT Services, Government, Tourism",
        majorInfrastructure: ["Trivandrum Airport", "Technopark", "Secretariat"]
    },
    {
        id: 21,
        name: "Guwahati Municipal Corporation",
        state: "Assam",
        type: "corporation",
        population: 968549,
        area: 216,
        latitude: 26.1445,
        longitude: 91.7362,
        budget: 4800,
        developmentIndex: 73,
        established: "1974",
        mayor: "Mrigen Sarania",
        website: "https://www.gmcportal.in",
        districts: ["Kamrup Metropolitan"],
        economicActivity: "Tea Trade, Oil Refining, Handloom",
        majorInfrastructure: ["Guwahati Airport", "IIT Guwahati", "Brahmaputra Riverfront"]
    },
    {
        id: 22,
        name: "Bhubaneswar Municipal Corporation",
        state: "Odisha",
        type: "corporation",
        population: 881988,
        area: 422,
        latitude: 20.2961,
        longitude: 85.8245,
        budget: 4200,
        developmentIndex: 85,
        established: "1994",
        mayor: "Sulochana Das",
        website: "https://www.bmc.gov.in",
        districts: ["Khordha"],
        economicActivity: "Government Services, IT, Handicrafts",
        majorInfrastructure: ["Biju Patnaik Airport", "Infocity", "Kalinga Stadium"]
    },
    {
        id: 23,
        name: "Chandigarh Municipal Corporation",
        state: "Chandigarh",
        type: "corporation",
        population: 1025682,
        area: 114,
        latitude: 30.7333,
        longitude: 76.7794,
        budget: 6500,
        developmentIndex: 93,
        established: "1994",
        mayor: "Sarabjit Kaur",
        website: "https://www.chdcorporation.in",
        districts: ["Chandigarh"],
        economicActivity: "Government Services, IT, Education",
        majorInfrastructure: ["Chandigarh Airport", "Punjab University", "Sector-wise Planning"]
    },
    {
        id: 24,
        name: "Dehradun Municipal Corporation",
        state: "Uttarakhand",
        type: "corporation",
        population: 578420,
        area: 300.13,
        latitude: 30.3165,
        longitude: 78.0322,
        budget: 3800,
        developmentIndex: 75,
        established: "1998",
        mayor: "Sunil Uniyal Gama",
        website: "https://www.dehradunmunicipal.com",
        districts: ["Dehradun"],
        economicActivity: "Education, Tourism, Forest Products",
        majorInfrastructure: ["Jolly Grant Airport", "FRI Campus", "Clock Tower"]
    },
    {
        id: 25,
        name: "Amritsar Municipal Corporation",
        state: "Punjab",
        type: "corporation",
        population: 1132761,
        area: 139.87,
        latitude: 31.6340,
        longitude: 74.8723,
        budget: 5200,
        developmentIndex: 72,
        established: "1976",
        mayor: "Karamjit Singh Rintu",
        website: "https://www.amritsarcorp.com",
        districts: ["Amritsar"],
        economicActivity: "Agriculture Trade, Textiles, Tourism",
        majorInfrastructure: ["Sri Guru Ram Dass Jee Airport", "Golden Temple", "Heritage Street"]
    }
];

// Geographic boundary data for states (simplified coordinates)
const stateBoundaries = {
    "Maharashtra": {
        center: [19.7515, 75.7139],
        bounds: [[15.6024, 72.6589], [22.0278, 80.8826]]
    },
    "Karnataka": {
        center: [15.3173, 75.7139],
        bounds: [[11.5945, 74.0549], [18.4574, 78.5885]]
    },
    "Tamil Nadu": {
        center: [11.1271, 78.6569],
        bounds: [[8.0681, 76.2297], [13.5003, 80.3288]]
    },
    "Gujarat": {
        center: [22.2587, 71.1924],
        bounds: [[20.0633, 68.1097], [24.7065, 74.4832]]
    },
    "Delhi": {
        center: [28.7041, 77.1025],
        bounds: [[28.4069, 76.8389], [28.8839, 77.3481]]
    },
    "West Bengal": {
        center: [22.9868, 87.8550],
        bounds: [[21.4532, 85.8298], [27.2317, 89.8282]]
    },
    "Telangana": {
        center: [18.1124, 79.0193],
        bounds: [[15.8105, 77.2750], [19.9159, 81.7767]]
    },
    "Rajasthan": {
        center: [27.0238, 74.2179],
        bounds: [[23.0395, 69.4999], [30.1735, 78.2624]]
    },
    "Madhya Pradesh": {
        center: [22.9734, 78.6569],
        bounds: [[21.0651, 74.0236], [26.8768, 82.7881]]
    },
    "Andhra Pradesh": {
        center: [15.9129, 79.7400],
        bounds: [[12.6211, 76.7550], [19.9159, 84.7755]]
    },
    "Kerala": {
        center: [10.8505, 76.2711],
        bounds: [[8.1717, 74.8520], [12.7969, 77.4173]]
    },
    "Assam": {
        center: [26.2006, 92.9376],
        bounds: [[24.1309, 89.7222], [28.2180, 96.0252]]
    },
    "Odisha": {
        center: [20.9517, 85.0985],
        bounds: [[17.7804, 81.3790], [22.5645, 87.5299]]
    },
    "Chandigarh": {
        center: [30.7333, 76.7794],
        bounds: [[30.6816, 76.7345], [30.7849, 76.8244]]
    },
    "Uttarakhand": {
        center: [30.0668, 79.0193],
        bounds: [[28.4308, 77.5709], [31.4499, 81.0298]]
    },
    "Punjab": {
        center: [31.1471, 75.3412],
        bounds: [[29.5386, 74.3428], [32.5092, 76.9297]]
    }
};

// Development categories and benchmarks
const developmentBenchmarks = {
    infrastructure: {
        excellent: 90,
        good: 75,
        average: 60,
        poor: 45
    },
    digital: {
        excellent: 85,
        good: 70,
        average: 55,
        poor: 40
    },
    healthcare: {
        excellent: 95,
        good: 80,
        average: 65,
        poor: 50
    },
    education: {
        excellent: 92,
        good: 77,
        average: 62,
        poor: 47
    },
    environment: {
        excellent: 88,
        good: 73,
        average: 58,
        poor: 43
    }
};

// Budget allocation categories (typical percentages)
const budgetCategories = {
    infrastructure: 35,
    healthcare: 22,
    education: 18,
    digitalServices: 12,
    environment: 8,
    others: 5
};

// Population growth trends (annual percentage)
const populationTrends = {
    metro: 1.8,
    tier1: 2.1,
    tier2: 2.4,
    tier3: 2.7
};

// Economic indicators
const economicIndicators = {
    gdpContribution: {
        mumbai: 6.16,
        delhi: 4.94,
        bangalore: 4.36,
        hyderabad: 2.75,
        pune: 2.19,
        chennai: 2.12,
        kolkata: 1.96,
        ahmedabad: 1.84
    },
    unemploymentRate: {
        national: 7.2,
        urban: 6.8,
        rural: 7.4
    }
};

// Make data available globally
if (typeof window !== 'undefined') {
    window.municipalityData = municipalityData;
    window.stateBoundaries = stateBoundaries;
    window.developmentBenchmarks = developmentBenchmarks;
    window.budgetCategories = budgetCategories;
    window.populationTrends = populationTrends;
    window.economicIndicators = economicIndicators;
}

// Export for Node.js environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        municipalityData,
        stateBoundaries,
        developmentBenchmarks,
        budgetCategories,
        populationTrends,
        economicIndicators
    };
}
