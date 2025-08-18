// Municipal Dashboard - Geographic and GIS Data for Indian Administrative Boundaries
// This file contains comprehensive geographic data for Indian states, districts, and administrative boundaries

// Indian States and Union Territories with detailed boundary information
const stateGeographicData = {
    "Andhra Pradesh": {
        code: "AP",
        capital: "Amaravati",
        region: "South India",
        coordinates: {
            center: [15.9129, 79.7400],
            bounds: [[12.6211, 76.7550], [19.9159, 84.7755]]
        },
        area: 162968, // sq km
        districts: 13,
        population: 49386799,
        languages: ["Telugu", "Urdu", "Hindi"],
        timeZone: "IST",
        climateZone: "Tropical",
        coastalLength: 974, // km
        majorRivers: ["Godavari", "Krishna", "Pennar"],
        elevation: {
            highest: 1680, // meters (Arma Konda)
            lowest: 0 // sea level
        },
        geographicFeatures: ["Eastern Ghats", "Coastal Plains", "Deccan Plateau"]
    },
    "Arunachal Pradesh": {
        code: "AR",
        capital: "Itanagar",
        region: "Northeast India",
        coordinates: {
            center: [28.2180, 94.7278],
            bounds: [[26.6316, 91.6055], [29.5223, 97.4026]]
        },
        area: 83743,
        districts: 25,
        population: 1382611,
        languages: ["Hindi", "English"],
        timeZone: "IST",
        climateZone: "Subtropical Highland",
        borderCountries: ["China", "Myanmar", "Bhutan"],
        majorRivers: ["Brahmaputra", "Lohit", "Subansiri"],
        elevation: {
            highest: 7090, // Kangto Peak
            lowest: 50
        },
        geographicFeatures: ["Himalayas", "Eastern Himalayas", "Patkai Hills"]
    },
    "Assam": {
        code: "AS",
        capital: "Dispur",
        region: "Northeast India",
        coordinates: {
            center: [26.2006, 92.9376],
            bounds: [[24.1309, 89.7222], [28.2180, 96.0252]]
        },
        area: 78438,
        districts: 34,
        population: 31169272,
        languages: ["Assamese", "Bengali", "Hindi"],
        timeZone: "IST",
        climateZone: "Subtropical",
        majorRivers: ["Brahmaputra", "Barak"],
        elevation: {
            highest: 1960, // Dafla Hills
            lowest: 5
        },
        geographicFeatures: ["Brahmaputra Valley", "Barak Valley", "Hills"]
    },
    "Bihar": {
        code: "BR",
        capital: "Patna",
        region: "East India",
        coordinates: {
            center: [25.0961, 85.3131],
            bounds: [[24.2936, 83.3259], [27.5218, 88.2015]]
        },
        area: 94163,
        districts: 38,
        population: 103804637,
        languages: ["Hindi", "Bhojpuri", "Maithili"],
        timeZone: "IST",
        climateZone: "Subtropical",
        majorRivers: ["Ganges", "Son", "Gandak", "Kosi"],
        elevation: {
            highest: 880, // Someshwar Hills
            lowest: 17
        },
        geographicFeatures: ["Indo-Gangetic Plains", "Chota Nagpur Plateau"]
    },
    "Chhattisgarh": {
        code: "CG",
        capital: "Raipur",
        region: "Central India",
        coordinates: {
            center: [21.2787, 81.8661],
            bounds: [[17.7804, 80.0583], [24.0959, 84.3975]]
        },
        area: 135192,
        districts: 32,
        population: 25540196,
        languages: ["Hindi", "Chhattisgarhi"],
        timeZone: "IST",
        climateZone: "Tropical",
        majorRivers: ["Mahanadi", "Godavari", "Narmada"],
        elevation: {
            highest: 1247, // Gaurlata
            lowest: 200
        },
        geographicFeatures: ["Deccan Plateau", "Eastern Ghats", "Chhattisgarh Plains"]
    },
    "Goa": {
        code: "GA",
        capital: "Panaji",
        region: "West India",
        coordinates: {
            center: [15.2993, 74.1240],
            bounds: [[14.8953, 73.6957], [15.7993, 74.3515]]
        },
        area: 3702,
        districts: 2,
        population: 1457723,
        languages: ["Konkani", "Marathi", "Hindi"],
        timeZone: "IST",
        climateZone: "Tropical Monsoon",
        coastalLength: 160,
        majorRivers: ["Mandovi", "Zuari", "Terekhol"],
        elevation: {
            highest: 1167, // Sonsogor
            lowest: 0
        },
        geographicFeatures: ["Coastal Plains", "Western Ghats", "Sahyadri Range"]
    },
    "Gujarat": {
        code: "GJ",
        capital: "Gandhinagar",
        region: "West India",
        coordinates: {
            center: [22.2587, 71.1924],
            bounds: [[20.0633, 68.1097], [24.7065, 74.4832]]
        },
        area: 196244,
        districts: 33,
        population: 60383628,
        languages: ["Gujarati", "Hindi"],
        timeZone: "IST",
        climateZone: "Semi-arid",
        coastalLength: 1596,
        majorRivers: ["Narmada", "Tapi", "Mahi", "Sabarmati"],
        elevation: {
            highest: 1117, // Mount Girnar
            lowest: 0
        },
        geographicFeatures: ["Kathiawar Peninsula", "Kutch Desert", "Gulf of Khambhat"]
    },
    "Haryana": {
        code: "HR",
        capital: "Chandigarh",
        region: "North India",
        coordinates: {
            center: [29.0588, 76.0856],
            bounds: [[27.6519, 74.4399], [30.5581, 77.3615]]
        },
        area: 44212,
        districts: 22,
        population: 25353081,
        languages: ["Hindi", "Haryanvi", "Punjabi"],
        timeZone: "IST",
        climateZone: "Semi-arid",
        majorRivers: ["Yamuna", "Ghaggar-Hakra", "Saraswati"],
        elevation: {
            highest: 1362, // Karoh Peak
            lowest: 200
        },
        geographicFeatures: ["Indo-Gangetic Plains", "Aravalli Range", "Shivalik Hills"]
    },
    "Himachal Pradesh": {
        code: "HP",
        capital: "Shimla",
        region: "North India",
        coordinates: {
            center: [31.1048, 77.1734],
            bounds: [[30.3844, 75.4574], [33.2206, 79.0422]]
        },
        area: 55673,
        districts: 12,
        population: 6856509,
        languages: ["Hindi", "Pahari"],
        timeZone: "IST",
        climateZone: "Alpine/Subtropical",
        borderCountries: ["China", "Pakistan"],
        majorRivers: ["Sutlej", "Beas", "Ravi", "Chenab"],
        elevation: {
            highest: 7026, // Reo Purgyil
            lowest: 350
        },
        geographicFeatures: ["Himalayas", "Trans-Himalaya", "Shivalik Range"]
    },
    "Jharkhand": {
        code: "JH",
        capital: "Ranchi",
        region: "East India",
        coordinates: {
            center: [23.6102, 85.2799],
            bounds: [[21.9599, 83.3259], [25.3267, 87.9570]]
        },
        area: 79716,
        districts: 24,
        population: 32966238,
        languages: ["Hindi", "Santhali", "Bengali"],
        timeZone: "IST",
        climateZone: "Subtropical",
        majorRivers: ["Damodar", "Subarnarekha", "Koel"],
        elevation: {
            highest: 1164, // Parasnath
            lowest: 100
        },
        geographicFeatures: ["Chota Nagpur Plateau", "Santhal Parganas"]
    },
    "Karnataka": {
        code: "KA",
        capital: "Bangalore",
        region: "South India",
        coordinates: {
            center: [15.3173, 75.7139],
            bounds: [[11.5945, 74.0549], [18.4574, 78.5885]]
        },
        area: 191791,
        districts: 30,
        population: 61130704,
        languages: ["Kannada", "Urdu", "Telugu"],
        timeZone: "IST",
        climateZone: "Tropical",
        coastalLength: 320,
        majorRivers: ["Krishna", "Cauvery", "Tungabhadra"],
        elevation: {
            highest: 1925, // Mullayanagiri
            lowest: 0
        },
        geographicFeatures: ["Western Ghats", "Deccan Plateau", "Coastal Plains"]
    },
    "Kerala": {
        code: "KL",
        capital: "Thiruvananthapuram",
        region: "South India",
        coordinates: {
            center: [10.8505, 76.2711],
            bounds: [[8.1717, 74.8520], [12.7969, 77.4173]]
        },
        area: 38852,
        districts: 14,
        population: 33387677,
        languages: ["Malayalam", "Tamil"],
        timeZone: "IST",
        climateZone: "Tropical Monsoon",
        coastalLength: 580,
        majorRivers: ["Periyar", "Bharathapuzha", "Pamba"],
        elevation: {
            highest: 2695, // Anamudi
            lowest: 0
        },
        geographicFeatures: ["Western Ghats", "Coastal Plains", "Backwaters"]
    },
    "Madhya Pradesh": {
        code: "MP",
        capital: "Bhopal",
        region: "Central India",
        coordinates: {
            center: [22.9734, 78.6569],
            bounds: [[21.0651, 74.0236], [26.8768, 82.7881]]
        },
        area: 308245,
        districts: 55,
        population: 72597565,
        languages: ["Hindi", "Bundeli", "Malvi"],
        timeZone: "IST",
        climateZone: "Subtropical",
        majorRivers: ["Narmada", "Tapti", "Chambal", "Son"],
        elevation: {
            highest: 1350, // Dhupgarh
            lowest: 70
        },
        geographicFeatures: ["Malwa Plateau", "Baghelkhand", "Bundelkhand"]
    },
    "Maharashtra": {
        code: "MH",
        capital: "Mumbai",
        region: "West India",
        coordinates: {
            center: [19.7515, 75.7139],
            bounds: [[15.6024, 72.6589], [22.0278, 80.8826]]
        },
        area: 307713,
        districts: 36,
        population: 112372972,
        languages: ["Marathi", "Hindi", "Urdu"],
        timeZone: "IST",
        climateZone: "Tropical Monsoon",
        coastalLength: 720,
        majorRivers: ["Godavari", "Krishna", "Tapti", "Narmada"],
        elevation: {
            highest: 1646, // Kalsubai
            lowest: 0
        },
        geographicFeatures: ["Deccan Plateau", "Western Ghats", "Konkan Coast"]
    },
    "Manipur": {
        code: "MN",
        capital: "Imphal",
        region: "Northeast India",
        coordinates: {
            center: [24.6637, 93.9063],
            bounds: [[23.8020, 93.0308], [25.6821, 94.7833]]
        },
        area: 22327,
        districts: 16,
        population: 2855794,
        languages: ["Meitei", "English"],
        timeZone: "IST",
        climateZone: "Subtropical Highland",
        borderCountries: ["Myanmar"],
        majorRivers: ["Manipur", "Yu", "Farak"],
        elevation: {
            highest: 2994, // Mount Iso
            lowest: 40
        },
        geographicFeatures: ["Central Valley", "Surrounding Hills", "Loktak Lake"]
    },
    "Meghalaya": {
        code: "ML",
        capital: "Shillong",
        region: "Northeast India",
        coordinates: {
            center: [25.4670, 91.3662],
            bounds: [[24.2322, 89.8377], [26.1157, 92.7985]]
        },
        area: 22429,
        districts: 11,
        population: 2964007,
        languages: ["Khasi", "Garo", "English"],
        timeZone: "IST",
        climateZone: "Subtropical Highland",
        majorRivers: ["Brahmaputra", "Surma", "Meghna"],
        elevation: {
            highest: 1966, // Shillong Peak
            lowest: 200
        },
        geographicFeatures: ["Shillong Plateau", "Khasi Hills", "Garo Hills"]
    },
    "Mizoram": {
        code: "MZ",
        capital: "Aizawl",
        region: "Northeast India",
        coordinates: {
            center: [23.1645, 92.9376],
            bounds: [[21.9379, 92.1548], [24.4993, 93.6226]]
        },
        area: 21081,
        districts: 11,
        population: 1091014,
        languages: ["Mizo", "English", "Hindi"],
        timeZone: "IST",
        climateZone: "Subtropical Highland",
        borderCountries: ["Myanmar", "Bangladesh"],
        majorRivers: ["Kaladan", "Chhimtuipui", "Tlawng"],
        elevation: {
            highest: 2157, // Phawngpui Blue Mountain
            lowest: 21
        },
        geographicFeatures: ["Lushai Hills", "Hill Ranges", "Valleys"]
    },
    "Nagaland": {
        code: "NL",
        capital: "Kohima",
        region: "Northeast India",
        coordinates: {
            center: [26.1584, 94.5624],
            bounds: [[25.2080, 93.3252], [27.0440, 95.1537]]
        },
        area: 16579,
        districts: 16,
        population: 1980602,
        languages: ["English", "Ao", "Angami"],
        timeZone: "IST",
        climateZone: "Subtropical Highland",
        borderCountries: ["Myanmar"],
        majorRivers: ["Brahmaputra", "Chindwin"],
        elevation: {
            highest: 3826, // Saramati Peak
            lowest: 194
        },
        geographicFeatures: ["Naga Hills", "Patkai Range", "Barail Range"]
    },
    "Odisha": {
        code: "OR",
        capital: "Bhubaneswar",
        region: "East India",
        coordinates: {
            center: [20.9517, 85.0985],
            bounds: [[17.7804, 81.3790], [22.5645, 87.5299]]
        },
        area: 155707,
        districts: 30,
        population: 42000000,
        languages: ["Odia", "Hindi", "Telugu"],
        timeZone: "IST",
        climateZone: "Tropical",
        coastalLength: 485,
        majorRivers: ["Mahanadi", "Brahmani", "Baitarani"],
        elevation: {
            highest: 1680, // Deomali
            lowest: 0
        },
        geographicFeatures: ["Eastern Ghats", "Coastal Plains", "Central Plateau"]
    },
    "Punjab": {
        code: "PB",
        capital: "Chandigarh",
        region: "North India",
        coordinates: {
            center: [31.1471, 75.3412],
            bounds: [[29.5386, 74.3428], [32.5092, 76.9297]]
        },
        area: 50362,
        districts: 23,
        population: 27704236,
        languages: ["Punjabi", "Hindi"],
        timeZone: "IST",
        climateZone: "Subtropical",
        borderCountries: ["Pakistan"],
        majorRivers: ["Sutlej", "Beas", "Ravi"],
        elevation: {
            highest: 519, // Mukerian Hills
            lowest: 180
        },
        geographicFeatures: ["Indo-Gangetic Plains", "Shivalik Hills", "Doaba"]
    },
    "Rajasthan": {
        code: "RJ",
        capital: "Jaipur",
        region: "North India",
        coordinates: {
            center: [27.0238, 74.2179],
            bounds: [[23.0395, 69.4999], [30.1735, 78.2624]]
        },
        area: 342239,
        districts: 50,
        population: 68621012,
        languages: ["Hindi", "Rajasthani"],
        timeZone: "IST",
        climateZone: "Arid/Semi-arid",
        borderCountries: ["Pakistan"],
        majorRivers: ["Luni", "Chambal", "Banas"],
        elevation: {
            highest: 1722, // Guru Shikhar
            lowest: 70
        },
        geographicFeatures: ["Thar Desert", "Aravalli Range", "Eastern Plains"]
    },
    "Sikkim": {
        code: "SK",
        capital: "Gangtok",
        region: "Northeast India",
        coordinates: {
            center: [27.5330, 88.5122],
            bounds: [[27.0440, 88.0622], [28.1316, 88.9468]]
        },
        area: 7096,
        districts: 6,
        population: 607688,
        languages: ["Nepali", "Sikkimese", "Lepcha"],
        timeZone: "IST",
        climateZone: "Alpine/Temperate",
        borderCountries: ["China", "Nepal", "Bhutan"],
        majorRivers: ["Teesta", "Rangeet"],
        elevation: {
            highest: 8586, // Kangchenjunga
            lowest: 280
        },
        geographicFeatures: ["Himalayas", "Alpine Lakes", "Glaciers"]
    },
    "Tamil Nadu": {
        code: "TN",
        capital: "Chennai",
        region: "South India",
        coordinates: {
            center: [11.1271, 78.6569],
            bounds: [[8.0681, 76.2297], [13.5003, 80.3288]]
        },
        area: 130058,
        districts: 38,
        population: 72138958,
        languages: ["Tamil", "Telugu", "Kannada"],
        timeZone: "IST",
        climateZone: "Tropical",
        coastalLength: 1076,
        majorRivers: ["Cauvery", "Vaigai", "Tamiraparani"],
        elevation: {
            highest: 2695, // Doddabetta
            lowest: 0
        },
        geographicFeatures: ["Eastern Ghats", "Western Ghats", "Coromandel Coast"]
    },
    "Telangana": {
        code: "TS",
        capital: "Hyderabad",
        region: "South India",
        coordinates: {
            center: [18.1124, 79.0193],
            bounds: [[15.8105, 77.2750], [19.9159, 81.7767]]
        },
        area: 112077,
        districts: 33,
        population: 35000000,
        languages: ["Telugu", "Urdu", "Hindi"],
        timeZone: "IST",
        climateZone: "Tropical",
        majorRivers: ["Godavari", "Krishna", "Bhima"],
        elevation: {
            highest: 965, // Bison Hills
            lowest: 100
        },
        geographicFeatures: ["Deccan Plateau", "Eastern Ghats", "Telangana Plateau"]
    },
    "Tripura": {
        code: "TR",
        capital: "Agartala",
        region: "Northeast India",
        coordinates: {
            center: [23.9408, 91.9882],
            bounds: [[22.9567, 91.0995], [24.6321, 92.6739]]
        },
        area: 10486,
        districts: 8,
        population: 3671032,
        languages: ["Bengali", "Kokborok", "English"],
        timeZone: "IST",
        climateZone: "Subtropical",
        borderCountries: ["Bangladesh"],
        majorRivers: ["Gomati", "Muhuri", "Feni"],
        elevation: {
            highest: 975, // Betling Shib
            lowest: 15
        },
        geographicFeatures: ["Hills", "Valleys", "Plains"]
    },
    "Uttar Pradesh": {
        code: "UP",
        capital: "Lucknow",
        region: "North India",
        coordinates: {
            center: [26.8467, 80.9462],
            bounds: [[23.8346, 77.0519], [30.4188, 84.6358]]
        },
        area: 240928,
        districts: 75,
        population: 199581477,
        languages: ["Hindi", "Urdu"],
        timeZone: "IST",
        climateZone: "Subtropical",
        majorRivers: ["Ganges", "Yamuna", "Gomti", "Chambal"],
        elevation: {
            highest: 2479, // Namik Glacier area
            lowest: 60
        },
        geographicFeatures: ["Indo-Gangetic Plains", "Terai", "Central Highlands"]
    },
    "Uttarakhand": {
        code: "UK",
        capital: "Dehradun",
        region: "North India",
        coordinates: {
            center: [30.0668, 79.0193],
            bounds: [[28.4308, 77.5709], [31.4499, 81.0298]]
        },
        area: 53483,
        districts: 13,
        population: 10116752,
        languages: ["Hindi", "Garhwali", "Kumaoni"],
        timeZone: "IST",
        climateZone: "Alpine/Subtropical",
        borderCountries: ["China", "Nepal"],
        majorRivers: ["Ganges", "Yamuna", "Alaknanda", "Bhagirathi"],
        elevation: {
            highest: 7816, // Nanda Devi
            lowest: 210
        },
        geographicFeatures: ["Himalayas", "Shivalik Range", "Gangetic Plains"]
    },
    "West Bengal": {
        code: "WB",
        capital: "Kolkata",
        region: "East India",
        coordinates: {
            center: [22.9868, 87.8550],
            bounds: [[21.4532, 85.8298], [27.2317, 89.8282]]
        },
        area: 88752,
        districts: 23,
        population: 91347736,
        languages: ["Bengali", "Hindi", "Urdu"],
        timeZone: "IST",
        climateZone: "Tropical",
        coastalLength: 158,
        borderCountries: ["Bangladesh", "Nepal", "Bhutan"],
        majorRivers: ["Ganges", "Hooghly", "Teesta"],
        elevation: {
            highest: 3636, // Sandakphu
            lowest: 0
        },
        geographicFeatures: ["Ganges Delta", "Sundarbans", "Darjeeling Hills"]
    }
};

// Union Territories
const unionTerritoryData = {
    "Andaman and Nicobar Islands": {
        code: "AN",
        capital: "Port Blair",
        coordinates: {
            center: [11.7401, 92.6586],
            bounds: [[6.4594, 92.2346], [13.8378, 93.9569]]
        },
        area: 8249,
        population: 379944,
        languages: ["Hindi", "English", "Bengali"],
        geographicFeatures: ["Islands", "Coral Reefs", "Tropical Forests"]
    },
    "Chandigarh": {
        code: "CH",
        capital: "Chandigarh",
        coordinates: {
            center: [30.7333, 76.7794],
            bounds: [[30.6816, 76.7345], [30.7849, 76.8244]]
        },
        area: 114,
        population: 1054686,
        languages: ["Hindi", "Punjabi", "English"],
        geographicFeatures: ["Shivalik Foothills", "Urban Planning"]
    },
    "Dadra and Nagar Haveli and Daman and Diu": {
        code: "DH",
        capital: "Daman",
        coordinates: {
            center: [20.3974, 72.8328],
            bounds: [[20.1707, 72.7693], [20.4305, 73.0140]]
        },
        area: 603,
        population: 585764,
        languages: ["Gujarati", "Hindi", "Marathi"],
        geographicFeatures: ["Coastal Plains", "Western Ghats Foothills"]
    },
    "Delhi": {
        code: "DL",
        capital: "New Delhi",
        coordinates: {
            center: [28.7041, 77.1025],
            bounds: [[28.4069, 76.8389], [28.8839, 77.3481]]
        },
        area: 1484,
        population: 16787941,
        languages: ["Hindi", "Punjabi", "Urdu"],
        geographicFeatures: ["Indo-Gangetic Plains", "Yamuna River", "Ridge"]
    },
    "Jammu and Kashmir": {
        code: "JK",
        capital: "Srinagar (Summer), Jammu (Winter)",
        coordinates: {
            center: [34.0837, 74.7973],
            bounds: [[32.2689, 73.0260], [36.5844, 80.3002]]
        },
        area: 42241,
        population: 12548926,
        languages: ["Kashmiri", "Dogri", "Hindi"],
        geographicFeatures: ["Himalayas", "Kashmir Valley", "Jammu Plains"]
    },
    "Ladakh": {
        code: "LA",
        capital: "Leh",
        coordinates: {
            center: [34.2996, 78.2932],
            bounds: [[32.2689, 75.9023], [36.4011, 80.3002]]
        },
        area: 59146,
        population: 274000,
        languages: ["Ladakhi", "Hindi", "Tibetan"],
        geographicFeatures: ["High Altitude Desert", "Karakoram Range", "Trans-Himalaya"]
    },
    "Lakshadweep": {
        code: "LD",
        capital: "Kavaratti",
        coordinates: {
            center: [10.3280, 72.7846],
            bounds: [[8.1717, 71.6575], [12.2802, 74.3575]]
        },
        area: 32,
        population: 64429,
        languages: ["Malayalam", "English"],
        geographicFeatures: ["Coral Islands", "Atolls", "Lagoons"]
    },
    "Puducherry": {
        code: "PY",
        capital: "Puducherry",
        coordinates: {
            center: [11.9416, 79.8083],
            bounds: [[11.7401, 79.6325], [12.0481, 79.8707]]
        },
        area: 479,
        population: 1244464,
        languages: ["Tamil", "French", "Telugu"],
        geographicFeatures: ["Coastal Plains", "French Colonial Heritage"]
    }
};

// Geographic zones and regions
const geographicZones = {
    "North India": {
        states: ["Himachal Pradesh", "Punjab", "Haryana", "Rajasthan", "Uttar Pradesh", "Uttarakhand"],
        unionTerritories: ["Chandigarh", "Delhi", "Jammu and Kashmir", "Ladakh"],
        characteristics: ["Indo-Gangetic Plains", "Himalayan Range", "Arid Regions"],
        climate: "Subtropical to Alpine"
    },
    "South India": {
        states: ["Andhra Pradesh", "Karnataka", "Kerala", "Tamil Nadu", "Telangana"],
        unionTerritories: ["Puducherry", "Lakshadweep"],
        characteristics: ["Deccan Plateau", "Western Ghats", "Eastern Ghats"],
        climate: "Tropical"
    },
    "East India": {
        states: ["Bihar", "Jharkhand", "Odisha", "West Bengal"],
        unionTerritories: [],
        characteristics: ["Gangetic Plains", "Eastern Ghats", "Coastal Plains"],
        climate: "Subtropical to Tropical"
    },
    "West India": {
        states: ["Goa", "Gujarat", "Maharashtra"],
        unionTerritories: ["Dadra and Nagar Haveli and Daman and Diu"],
        characteristics: ["Western Ghats", "Arabian Sea Coast", "Thar Desert"],
        climate: "Tropical to Arid"
    },
    "Central India": {
        states: ["Chhattisgarh", "Madhya Pradesh"],
        unionTerritories: [],
        characteristics: ["Central Highlands", "Vindhya Range", "Narmada Valley"],
        climate: "Subtropical"
    },
    "Northeast India": {
        states: ["Arunachal Pradesh", "Assam", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Sikkim", "Tripura"],
        unionTerritories: [],
        characteristics: ["Himalayas", "Hills and Valleys", "High Rainfall"],
        climate: "Subtropical Highland"
    }
};

// River systems and watersheds
const riverSystems = {
    "Ganges System": {
        mainRiver: "Ganges",
        tributaries: ["Yamuna", "Gomti", "Ghaghara", "Gandak", "Kosi", "Son"],
        states: ["Uttarakhand", "Uttar Pradesh", "Bihar", "Jharkhand", "West Bengal"],
        length: 2525,
        drainageArea: 1086000,
        economicImportance: ["Agriculture", "Transportation", "Hydropower"]
    },
    "Indus System": {
        mainRiver: "Indus",
        tributaries: ["Sutlej", "Beas", "Ravi", "Chenab", "Jhelum"],
        states: ["Himachal Pradesh", "Punjab", "Haryana", "Rajasthan"],
        length: 3180,
        drainageArea: 1165000,
        economicImportance: ["Agriculture", "Irrigation", "Hydropower"]
    },
    "Brahmaputra System": {
        mainRiver: "Brahmaputra",
        tributaries: ["Subansiri", "Kameng", "Dhansiri", "Teesta"],
        states: ["Arunachal Pradesh", "Assam", "West Bengal"],
        length: 2900,
        drainageArea: 651000,
        economicImportance: ["Agriculture", "Transportation", "Fisheries"]
    },
    "Godavari System": {
        mainRiver: "Godavari",
        tributaries: ["Pranhita", "Indravati", "Manjira", "Sabari"],
        states: ["Maharashtra", "Telangana", "Andhra Pradesh", "Chhattisgarh"],
        length: 1465,
        drainageArea: 312812,
        economicImportance: ["Agriculture", "Irrigation", "Hydropower"]
    },
    "Krishna System": {
        mainRiver: "Krishna",
        tributaries: ["Tungabhadra", "Bhima", "Koyna", "Ghataprabha"],
        states: ["Maharashtra", "Karnataka", "Telangana", "Andhra Pradesh"],
        length: 1400,
        drainageArea: 258948,
        economicImportance: ["Agriculture", "Irrigation", "Hydropower"]
    },
    "Narmada System": {
        mainRiver: "Narmada",
        tributaries: ["Tawa", "Shakkar", "Dudhi", "Tapi"],
        states: ["Madhya Pradesh", "Gujarat", "Maharashtra"],
        length: 1312,
        drainageArea: 98796,
        economicImportance: ["Agriculture", "Hydropower", "Industry"]
    },
    "Cauvery System": {
        mainRiver: "Cauvery",
        tributaries: ["Hemavati", "Arkavathy", "Shimsha", "Kabini"],
        states: ["Karnataka", "Tamil Nadu"],
        length: 765,
        drainageArea: 81155,
        economicImportance: ["Agriculture", "Hydropower", "Industry"]
    },
    "Mahanadi System": {
        mainRiver: "Mahanadi",
        tributaries: ["Seonath", "Hasdeo", "Ong", "Tel"],
        states: ["Chhattisgarh", "Odisha"],
        length: 858,
        drainageArea: 141589,
        economicImportance: ["Agriculture", "Industry", "Hydropower"]
    }
};

// Mountain ranges and elevation data
const mountainRanges = {
    "Himalayas": {
        subRanges: ["Greater Himalayas", "Lesser Himalayas", "Shivalik Range"],
        states: ["Jammu and Kashmir", "Ladakh", "Himachal Pradesh", "Uttarakhand", "Sikkim", "Arunachal Pradesh"],
        highestPeak: "Kangchenjunga",
        elevation: 8586,
        characteristics: ["Young fold mountains", "High altitude", "Glaciers"]
    },
    "Western Ghats": {
        subRanges: ["Sahyadri", "Nilgiri Hills", "Cardamom Hills"],
        states: ["Gujarat", "Maharashtra", "Goa", "Karnataka", "Kerala", "Tamil Nadu"],
        highestPeak: "Anamudi",
        elevation: 2695,
        characteristics: ["Biodiversity hotspot", "Monsoon influence", "Escarpments"]
    },
    "Eastern Ghats": {
        subRanges: ["Shevaroy Hills", "Pachaimalai", "Kolli Hills"],
        states: ["Odisha", "Andhra Pradesh", "Tamil Nadu", "Karnataka"],
        highestPeak: "Arma Konda",
        elevation: 1680,
        characteristics: ["Discontinuous range", "Older formation", "Mineral rich"]
    },
    "Aravalli Range": {
        subRanges: ["Delhi Ridge", "Alwar Hills"],
        states: ["Gujarat", "Rajasthan", "Haryana", "Delhi"],
        highestPeak: "Guru Shikhar",
        elevation: 1722,
        characteristics: ["Oldest mountain range", "Highly eroded", "Mineral deposits"]
    },
    "Vindhya Range": {
        subRanges: ["Kaimur Range", "Bhander Range"],
        states: ["Gujarat", "Rajasthan", "Madhya Pradesh", "Uttar Pradesh"],
        highestPeak: "Sad-bhawna Shikhar",
        elevation: 881,
        characteristics: ["Plateau formation", "Escarpments", "Historical significance"]
    },
    "Satpura Range": {
        subRanges: ["Mahadeo Hills", "Maikala Range"],
        states: ["Gujarat", "Maharashtra", "Madhya Pradesh"],
        highestPeak: "Dhupgarh",
        elevation: 1350,
        characteristics: ["East-west orientation", "Forest cover", "Tribal areas"]
    }
};

// Climate zones and patterns
const climateZones = {
    "Tropical Wet": {
        states: ["Kerala", "Karnataka (Western)", "Goa", "Maharashtra (Western)"],
        characteristics: ["High rainfall", "High humidity", "Moderate temperature"],
        annualRainfall: "2000-4000mm",
        temperature: "25-30°C"
    },
    "Tropical Wet and Dry": {
        states: ["Tamil Nadu", "Andhra Pradesh", "Karnataka (Eastern)", "Odisha"],
        characteristics: ["Distinct wet and dry seasons", "Moderate rainfall"],
        annualRainfall: "600-1200mm",
        temperature: "25-35°C"
    },
    "Tropical Semi-arid": {
        states: ["Rajasthan (Eastern)", "Gujarat", "Madhya Pradesh", "Maharashtra (Interior)"],
        characteristics: ["Low rainfall", "High temperature variation", "Dry climate"],
        annualRainfall: "400-600mm",
        temperature: "20-40°C"
    },
    "Hot Desert": {
        states: ["Rajasthan (Western)"],
        characteristics: ["Very low rainfall", "Extreme temperatures", "Arid conditions"],
        annualRainfall: "100-250mm",
        temperature: "5-50°C"
    },
    "Humid Subtropical": {
        states: ["Punjab", "Haryana", "Uttar Pradesh", "Bihar"],
        characteristics: ["Hot summers", "Cool winters", "Moderate rainfall"],
        annualRainfall: "500-1000mm",
        temperature: "5-45°C"
    },
    "Alpine": {
        states: ["Himachal Pradesh", "Uttarakhand", "Sikkim", "Arunachal Pradesh"],
        characteristics: ["Cold climate", "Snow cover", "High altitude"],
        annualRainfall: "1000-2000mm",
        temperature: "-10-20°C"
    },
    "Subtropical Highland": {
        states: ["Meghalaya", "Mizoram", "Nagaland", "Manipur"],
        characteristics: ["Pleasant climate", "High rainfall", "Moderate temperature"],
        annualRainfall: "2000-4000mm",
        temperature: "15-25°C"
    }
};

// Natural disasters and hazard zones
const hazardZones = {
    "Earthquake": {
        zones: {
            "Zone V": ["Jammu and Kashmir", "Himachal Pradesh", "Uttarakhand", "Sikkim", "Northeast States"],
            "Zone IV": ["Delhi", "Bihar", "West Bengal", "Gujarat", "Maharashtra"],
            "Zone III": ["Kerala", "Goa", "Rajasthan", "Madhya Pradesh", "Chhattisgarh"],
            "Zone II": ["Karnataka", "Tamil Nadu", "Andhra Pradesh", "Telangana"]
        },
        riskLevel: "Very High to Low"
    },
    "Cyclone": {
        affectedStates: ["Odisha", "Andhra Pradesh", "Tamil Nadu", "West Bengal", "Gujarat"],
        season: "April-December",
        riskLevel: "High"
    },
    "Flood": {
        affectedStates: ["Assam", "Bihar", "Uttar Pradesh", "West Bengal", "Odisha", "Kerala"],
        causes: ["Monsoon", "River overflow", "Cyclones"],
        riskLevel: "High to Very High"
    },
    "Drought": {
        affectedStates: ["Rajasthan", "Gujarat", "Maharashtra", "Karnataka", "Andhra Pradesh"],
        causes: ["Monsoon failure", "Water scarcity"],
        riskLevel: "Moderate to High"
    }
};

// Administrative hierarchy structure
const administrativeHierarchy = {
    levels: [
        {
            level: 1,
            name: "State/Union Territory",
            count: 36,
            governance: "State Government/Central Government"
        },
        {
            level: 2,
            name: "District",
            count: 766,
            governance: "District Collector/Magistrate"
        },
        {
            level: 3,
            name: "Sub-District/Tehsil",
            count: 6600,
            governance: "Sub-Divisional Magistrate"
        },
        {
            level: 4,
            name: "Block/Taluka",
            count: 6902,
            governance: "Block Development Officer"
        },
        {
            level: 5,
            name: "Village/Ward",
            count: 664369,
            governance: "Gram Panchayat/Municipal Ward"
        }
    ],
    urbanBodies: {
        "Municipal Corporation": {
            criteria: "Population > 1 million or special status",
            count: 468,
            powers: "Enhanced municipal powers"
        },
        "Municipal Council": {
            criteria: "Population 20,000 - 1 million",
            count: 1861,
            powers: "Standard municipal powers"
        },
        "Nagar Panchayat": {
            criteria: "Transitioning rural areas",
            count: 2022,
            powers: "Basic civic services"
        }
    }
};

// Coastal and marine boundaries
const coastalData = {
    mainlandCoastline: 6100, // km
    islandCoastline: 2094, // km
    totalCoastline: 8194, // km
    coastalStates: [
        {
            state: "Gujarat",
            coastline: 1596,
            majorPorts: ["Kandla", "Mumbai"],
            characteristics: ["Gulf of Kutch", "Gulf of Khambhat"]
        },
        {
            state: "Maharashtra",
            coastline: 720,
            majorPorts: ["Mumbai", "JNPT"],
            characteristics: ["Konkan Coast", "Western Ghats proximity"]
        },
        {
            state: "Goa",
            coastline: 160,
            majorPorts: ["Mormugao"],
            characteristics: ["Beaches", "Estuaries"]
        },
        {
            state: "Karnataka",
            coastline: 320,
            majorPorts: ["New Mangalore"],
            characteristics: ["Coastal Plains", "Western Ghats"]
        },
        {
            state: "Kerala",
            coastline: 580,
            majorPorts: ["Cochin", "Trivandrum"],
            characteristics: ["Backwaters", "Lagoons"]
        },
        {
            state: "Tamil Nadu",
            coastline: 1076,
            majorPorts: ["Chennai", "Tuticorin"],
            characteristics: ["Coromandel Coast", "Deltas"]
        },
        {
            state: "Andhra Pradesh",
            coastline: 974,
            majorPorts: ["Visakhapatnam"],
            characteristics: ["Eastern Coastal Plains", "Deltas"]
        },
        {
            state: "Odisha",
            coastline: 485,
            majorPorts: ["Paradip"],
            characteristics: ["Sandy beaches", "River deltas"]
        },
        {
            state: "West Bengal",
            coastline: 158,
            majorPorts: ["Kolkata", "Haldia"],
            characteristics: ["Sundarbans", "Gangetic Delta"]
        }
    ]
};

// Export all geographic data
if (typeof window !== 'undefined') {
    window.stateGeographicData = stateGeographicData;
    window.unionTerritoryData = unionTerritoryData;
    window.geographicZones = geographicZones;
    window.riverSystems = riverSystems;
    window.mountainRanges = mountainRanges;
    window.climateZones = climateZones;
    window.hazardZones = hazardZones;
    window.administrativeHierarchy = administrativeHierarchy;
    window.coastalData = coastalData;
}

// Export for Node.js environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stateGeographicData,
        unionTerritoryData,
        geographicZones,
        riverSystems,
        mountainRanges,
        climateZones,
        hazardZones,
        administrativeHierarchy,
        coastalData
    };
}

// Utility functions for geographic calculations and data processing
const GeographicUtils = {
    // Calculate distance between two coordinates (Haversine formula)
    calculateDistance: function(lat1, lon1, lat2, lon2) {
        const R = 6371; // Earth's radius in kilometers
        const dLat = this.toRadians(lat2 - lat1);
        const dLon = this.toRadians(lon2 - lon1);
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                  Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2)) *
                  Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    },

    // Convert degrees to radians
    toRadians: function(degrees) {
        return degrees * (Math.PI / 180);
    },

    // Get state information by coordinates
    getStateByCoordinates: function(lat, lon) {
        for (const [stateName, stateData] of Object.entries(stateGeographicData)) {
            const bounds = stateData.coordinates.bounds;
            if (lat >= bounds[0][0] && lat <= bounds[1][0] &&
                lon >= bounds[0][1] && lon <= bounds[1][1]) {
                return stateName;
            }
        }
        return null;
    },

    // Get climate zone for coordinates
    getClimateZone: function(lat, lon) {
        // Simplified climate zone detection based on coordinates
        if (lat > 30) return "Alpine";
        if (lat > 28 && lon < 77) return "Humid Subtropical";
        if (lat > 23 && lon < 75) return "Hot Desert";
        if (lat > 20 && lon < 78) return "Tropical Semi-arid";
        if (lon < 76 && lat < 20) return "Tropical Wet";
        return "Tropical Wet and Dry";
    },

    // Get elevation zone
    getElevationZone: function(elevation) {
        if (elevation > 4000) return "High Alpine";
        if (elevation > 2000) return "Alpine";
        if (elevation > 1000) return "Montane";
        if (elevation > 500) return "Hill";
        if (elevation > 200) return "Upland";
        return "Plain";
    },

    // Generate GeoJSON for state boundaries (simplified)
    generateStateGeoJSON: function(stateName) {
        const stateData = stateGeographicData[stateName];
        if (!stateData) return null;

        const bounds = stateData.coordinates.bounds;
        
        // Create a simplified rectangular boundary
        // In a real implementation, this would use actual boundary coordinates
        return {
            type: "Feature",
            properties: {
                name: stateName,
                state_code: stateData.code || stateName.substring(0, 2).toUpperCase(),
                area: stateData.area,
                population: stateData.population
            },
            geometry: {
                type: "Polygon",
                coordinates: [[
                    [bounds[0][1], bounds[0][0]], // SW
                    [bounds[1][1], bounds[0][0]], // SE
                    [bounds[1][1], bounds[1][0]], // NE
                    [bounds[0][1], bounds[1][0]], // NW
                    [bounds[0][1], bounds[0][0]]  // SW (close)
                ]]
            }
        };
    },

    // Get nearby states
    getNearbyStates: function(stateName, radius = 500) {
        const stateData = stateGeographicData[stateName];
        if (!stateData) return [];

        const center = stateData.coordinates.center;
        const nearbyStates = [];

        for (const [name, data] of Object.entries(stateGeographicData)) {
            if (name !== stateName) {
                const distance = this.calculateDistance(
                    center[0], center[1],
                    data.coordinates.center[0], data.coordinates.center[1]
                );
                
                if (distance <= radius) {
                    nearbyStates.push({
                        name: name,
                        distance: Math.round(distance),
                        direction: this.getDirection(center, data.coordinates.center)
                    });
                }
            }
        }

        return nearbyStates.sort((a, b) => a.distance - b.distance);
    },

    // Get direction between two points
    getDirection: function(from, to) {
        const dLat = to[0] - from[0];
        const dLon = to[1] - from[1];
        const angle = Math.atan2(dLon, dLat) * 180 / Math.PI;
        
        if (angle >= -22.5 && angle < 22.5) return "North";
        if (angle >= 22.5 && angle < 67.5) return "Northeast";
        if (angle >= 67.5 && angle < 112.5) return "East";
        if (angle >= 112.5 && angle < 157.5) return "Southeast";
        if (angle >= 157.5 || angle < -157.5) return "South";
        if (angle >= -157.5 && angle < -112.5) return "Southwest";
        if (angle >= -112.5 && angle < -67.5) return "West";
        if (angle >= -67.5 && angle < -22.5) return "Northwest";
    }
};

// Make utility functions available globally
if (typeof window !== 'undefined') {
    window.GeographicUtils = GeographicUtils;
}

// Export utilities
if (typeof module !== 'undefined' && module.exports) {
    module.exports.GeographicUtils = GeographicUtils;
}
