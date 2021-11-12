
//   AirportInput("id-of-the-input-1", options)
// const fuse = new Fuse(intlAirports, options)
// console.log(fuse);
// const results = fuse.search(["Intl","city"]);
// console.log(results);

// var cities = [];
// results.forEach(element => {
//     cities.push(element.item.name)
// });
// console.log(cities);

//Fuzzy complete____________________________________________________
// var airports = [
//     {"IATA":"MEL","cityName":"Melbourne, Australia intl"},
//     {"IATA":"LAX","cityName":"Los Angeles, USA"},
//     {"IATA":"LHR","cityName":"Heathrow, London"},
//     {"IATA":"HKG","cityName":"Hong Kong"},
//     {"IATA":"NRT","cityName":"Narita, Tokyo, Japan"},
//     {"IATA":"FRA","cityName":"Frankfurt, Germany"}
// ];

var selectedAirports = [
    [
        {
            "name": "Port Moresby Jacksons Intl ",
            "city": "Port Moresby",
            "country": "Papua New Guinea",
            "IATA": "POM",
            "ICAO": "AYPY",
            "lat": "-9.443380355834961",
            "lon": "147.22000122070312",
            "timezone": "10"
        },
        {
            "name": "Wewak Intl ",
            "city": "Wewak",
            "country": "Papua New Guinea",
            "IATA": "WWK",
            "ICAO": "AYWK",
            "lat": "-3.58383011818",
            "lon": "143.669006348",
            "timezone": "10"
        },
        {
            "name": "Keflavik Intl ",
            "city": "Keflavik",
            "country": "Iceland",
            "IATA": "KEF",
            "ICAO": "BIKF",
            "lat": "63.985000610352",
            "lon": "-22.605600357056",
            "timezone": "0"
        },
        {
            "name": "Edmonton Intl ",
            "city": "Edmonton",
            "country": "Canada",
            "IATA": "YEG",
            "ICAO": "CYEG",
            "lat": "53.309700012200004",
            "lon": "-113.580001831",
            "timezone": "-7"
        },
        {
            "name": "John C. Munro Hamilton Intl ",
            "city": "Hamilton",
            "country": "Canada",
            "IATA": "YHM",
            "ICAO": "CYHM",
            "lat": "43.173599243199995",
            "lon": "-79.93499755859999",
            "timezone": "-5"
        },
        {
            "name": "Halifax / Stanfield Intl ",
            "city": "Halifax",
            "country": "Canada",
            "IATA": "YHZ",
            "ICAO": "CYHZ",
            "lat": "44.8807983398",
            "lon": "-63.5085983276",
            "timezone": "-4"
        },
        {
            "name": "Kelowna Intl ",
            "city": "Kelowna",
            "country": "Canada",
            "IATA": "YLW",
            "ICAO": "CYLW",
            "lat": "49.9561004639",
            "lon": "-119.377998352",
            "timezone": "-8"
        },
        {
            "name": "Montreal Intl (Mirabel) ",
            "city": "Montreal",
            "country": "Canada",
            "IATA": "YMX",
            "ICAO": "CYMX",
            "lat": "45.679501",
            "lon": "-74.038696",
            "timezone": "-5"
        },
        {
            "name": "Ottawa Macdonald-Cartier Intl ",
            "city": "Ottawa",
            "country": "Canada",
            "IATA": "YOW",
            "ICAO": "CYOW",
            "lat": "45.3224983215332",
            "lon": "-75.66919708251953",
            "timezone": "-5"
        },
        {
            "name": "Quebec Jean Lesage Intl ",
            "city": "Quebec",
            "country": "Canada",
            "IATA": "YQB",
            "ICAO": "CYQB",
            "lat": "46.7911",
            "lon": "-71.393303",
            "timezone": "-5"
        },
        {
            "name": "Greater Moncton Intl ",
            "city": "Moncton",
            "country": "Canada",
            "IATA": "YQM",
            "ICAO": "CYQM",
            "lat": "46.11220169067383",
            "lon": "-64.67859649658203",
            "timezone": "-4"
        },
        {
            "name": "Regina Intl ",
            "city": "Regina",
            "country": "Canada",
            "IATA": "YQR",
            "ICAO": "CYQR",
            "lat": "50.43190002441406",
            "lon": "-104.66600036621094",
            "timezone": "-6"
        },
        {
            "name": "Gander Intl ",
            "city": "Gander",
            "country": "Canada",
            "IATA": "YQX",
            "ICAO": "CYQX",
            "lat": "48.9369010925293",
            "lon": "-54.56809997558594",
            "timezone": "-3.5"
        },
        {
            "name": "Montreal / Pierre Elliott Trudeau Intl ",
            "city": "Montreal",
            "country": "Canada",
            "IATA": "YUL",
            "ICAO": "CYUL",
            "lat": "45.4706001282",
            "lon": "-73.7407989502",
            "timezone": "-5"
        },
        {
            "name": "Vancouver Intl ",
            "city": "Vancouver",
            "country": "Canada",
            "IATA": "YVR",
            "ICAO": "CYVR",
            "lat": "49.193901062",
            "lon": "-123.183998108",
            "timezone": "-8"
        },
        {
            "name": "Winnipeg / James Armstrong Richardson Intl ",
            "city": "Winnipeg",
            "country": "Canada",
            "IATA": "YWG",
            "ICAO": "CYWG",
            "lat": "49.909999847399995",
            "lon": "-97.2398986816",
            "timezone": "-6"
        },
        {
            "name": "Cranbrook/Canadian Rockies Intl ",
            "city": "Cranbrook",
            "country": "Canada",
            "IATA": "YXC",
            "ICAO": "CYXC",
            "lat": "49.610801696777",
            "lon": "-115.78199768066",
            "timezone": "-7"
        },
        {
            "name": "Saskatoon John G. Diefenbaker Intl ",
            "city": "Saskatoon",
            "country": "Canada",
            "IATA": "YXE",
            "ICAO": "CYXE",
            "lat": "52.170799255371094",
            "lon": "-106.69999694824219",
            "timezone": "-6"
        },
        {
            "name": "Whitehorse / Erik Nielsen Intl ",
            "city": "Whitehorse",
            "country": "Canada",
            "IATA": "YXY",
            "ICAO": "CYXY",
            "lat": "60.7095985413",
            "lon": "-135.067001343",
            "timezone": "-8"
        },
        {
            "name": "Calgary Intl ",
            "city": "Calgary",
            "country": "Canada",
            "IATA": "YYC",
            "ICAO": "CYYC",
            "lat": "51.113899231",
            "lon": "-114.019996643",
            "timezone": "-7"
        },
        {
            "name": "Victoria Intl ",
            "city": "Victoria",
            "country": "Canada",
            "IATA": "YYJ",
            "ICAO": "CYYJ",
            "lat": "48.646900177",
            "lon": "-123.426002502",
            "timezone": "-8"
        },
        {
            "name": "St. John's Intl ",
            "city": "St. John's",
            "country": "Canada",
            "IATA": "YYT",
            "ICAO": "CYYT",
            "lat": "47.618598938",
            "lon": "-52.7518997192",
            "timezone": "-3.5"
        },
        {
            "name": "Lester B. Pearson Intl ",
            "city": "Toronto",
            "country": "Canada",
            "IATA": "YYZ",
            "ICAO": "CYYZ",
            "lat": "43.6772003174",
            "lon": "-79.63059997559999",
            "timezone": "-5"
        },
        {
            "name": "Mohamed Boudiaf Intl ",
            "city": "Constantine",
            "country": "Algeria",
            "IATA": "CZL",
            "ICAO": "DABC",
            "lat": "36.2760009765625",
            "lon": "6.620389938354492",
            "timezone": "1"
        },
        {
            "name": "Kotoka Intl ",
            "city": "Accra",
            "country": "Ghana",
            "IATA": "ACC",
            "ICAO": "DGAA",
            "lat": "5.605189800262451",
            "lon": "-0.16678600013256073",
            "timezone": "0"
        },
        {
            "name": "Nnamdi Azikiwe Intl ",
            "city": "Abuja",
            "country": "Nigeria",
            "IATA": "ABV",
            "ICAO": "DNAA",
            "lat": "9.006790161132812",
            "lon": "7.263169765472412",
            "timezone": "1"
        },
        {
            "name": "Margaret Ekpo Intl ",
            "city": "Calabar",
            "country": "Nigeria",
            "IATA": "CBQ",
            "ICAO": "DNCA",
            "lat": "4.976019859313965",
            "lon": "8.347200393676758",
            "timezone": "1"
        },
        {
            "name": "Akanu Ibiam Intl ",
            "city": "Enugu",
            "country": "Nigeria",
            "IATA": "ENU",
            "ICAO": "DNEN",
            "lat": "6.474269866943359",
            "lon": "7.561960220336914",
            "timezone": "1"
        },
        {
            "name": "Ilorin Intl ",
            "city": "Ilorin",
            "country": "Nigeria",
            "IATA": "ILR",
            "ICAO": "DNIL",
            "lat": "8.440210342407227",
            "lon": "4.493919849395752",
            "timezone": "1"
        },
        {
            "name": "Mallam Aminu Intl ",
            "city": "Kano",
            "country": "Nigeria",
            "IATA": "KAN",
            "ICAO": "DNKN",
            "lat": "12.0476",
            "lon": "8.52462",
            "timezone": "1"
        },
        {
            "name": "Maiduguri Intl ",
            "city": "Maiduguri",
            "country": "Nigeria",
            "IATA": "MIU",
            "ICAO": "DNMA",
            "lat": "11.855299949645996",
            "lon": "13.080900192260742",
            "timezone": "1"
        },
        {
            "name": "Murtala Muhammed Intl ",
            "city": "Lagos",
            "country": "Nigeria",
            "IATA": "LOS",
            "ICAO": "DNMM",
            "lat": "6.5773701667785645",
            "lon": "3.321160078048706",
            "timezone": "1"
        },
        {
            "name": "Port Harcourt Intl ",
            "city": "Port Hartcourt",
            "country": "Nigeria",
            "IATA": "PHC",
            "ICAO": "DNPO",
            "lat": "5.0154900550842285",
            "lon": "6.94959020614624",
            "timezone": "1"
        },
        {
            "name": "Sadiq Abubakar III Intl ",
            "city": "Sokoto",
            "country": "Nigeria",
            "IATA": "SKO",
            "ICAO": "DNSO",
            "lat": "12.916299819946289",
            "lon": "5.207190036773682",
            "timezone": "1"
        },
        {
            "name": "Diori Hamani Intl ",
            "city": "Niamey",
            "country": "Niger",
            "IATA": "NIM",
            "ICAO": "DRRN",
            "lat": "13.4815",
            "lon": "2.18361",
            "timezone": "1"
        },
        {
            "name": "Mano Dayak Intl ",
            "city": "Agadez",
            "country": "Niger",
            "IATA": "AJY",
            "ICAO": "DRZA",
            "lat": "16.965999603271484",
            "lon": "8.000109672546387",
            "timezone": "1"
        },
        {
            "name": "Monastir Habib Bourguiba Intl ",
            "city": "Monastir",
            "country": "Tunisia",
            "IATA": "MIR",
            "ICAO": "DTMB",
            "lat": "35.75809860229492",
            "lon": "10.75469970703125",
            "timezone": "1"
        },
        {
            "name": "Tunis Carthage Intl ",
            "city": "Tunis",
            "country": "Tunisia",
            "IATA": "TUN",
            "ICAO": "DTTA",
            "lat": "36.85100173950195",
            "lon": "10.22719955444336",
            "timezone": "1"
        },
        {
            "name": "Gafsa Ksar Intl ",
            "city": "Gafsa",
            "country": "Tunisia",
            "IATA": "GAF",
            "ICAO": "DTTF",
            "lat": "34.422000885009766",
            "lon": "8.822500228881836",
            "timezone": "1"
        },
        {
            "name": "Gabès Matmata Intl ",
            "city": "Gabes",
            "country": "Tunisia",
            "IATA": "GAE",
            "ICAO": "DTTG",
            "lat": "33.87689971923828",
            "lon": "10.103300094604492",
            "timezone": "1"
        },
        {
            "name": "Djerba Zarzis Intl ",
            "city": "Djerba",
            "country": "Tunisia",
            "IATA": "DJE",
            "ICAO": "DTTJ",
            "lat": "33.875",
            "lon": "10.775500297546387",
            "timezone": "1"
        },
        {
            "name": "Sfax Thyna Intl ",
            "city": "Sfax",
            "country": "Tunisia",
            "IATA": "SFA",
            "ICAO": "DTTX",
            "lat": "34.71799850463867",
            "lon": "10.690999984741211",
            "timezone": "1"
        },
        {
            "name": "Tozeur Nefta Intl ",
            "city": "Tozeur",
            "country": "Tunisia",
            "IATA": "TOE",
            "ICAO": "DTTZ",
            "lat": "33.939701080322266",
            "lon": "8.110560417175293",
            "timezone": "1"
        },
        {
            "name": "Niamtougou Intl ",
            "city": "Niatougou",
            "country": "Togo",
            "IATA": "LRL",
            "ICAO": "DXNG",
            "lat": "9.767330169677734",
            "lon": "1.091249942779541",
            "timezone": "0"
        },
        {
            "name": "Antwerp Intl  (Deurne)",
            "city": "Antwerp",
            "country": "Belgium",
            "IATA": "ANR",
            "ICAO": "EBAW",
            "lat": "51.1893997192",
            "lon": "4.46027994156",
            "timezone": "1"
        },
        {
            "name": "Ostend-Bruges Intl ",
            "city": "Ostend",
            "country": "Belgium",
            "IATA": "OST",
            "ICAO": "EBOS",
            "lat": "51.198898315399994",
            "lon": "2.8622200489",
            "timezone": "1"
        },
        {
            "name": "Berlin-Tempelhof Intl ",
            "city": "Berlin",
            "country": "Germany",
            "IATA": "THF",
            "ICAO": "EDDI",
            "lat": "52.472999572753906",
            "lon": "13.403900146484375",
            "timezone": "1"
        },
        {
            "name": "Belfast Intl ",
            "city": "Belfast",
            "country": "United Kingdom",
            "IATA": "BFS",
            "ICAO": "EGAA",
            "lat": "54.6575012207",
            "lon": "-6.2158298492399995",
            "timezone": "0"
        },
        {
            "name": "Birmingham Intl ",
            "city": "Birmingham",
            "country": "United Kingdom",
            "IATA": "BHX",
            "ICAO": "EGBB",
            "lat": "52.453899383499994",
            "lon": "-1.74802994728",
            "timezone": "0"
        },
        {
            "name": "Cardiff Intl ",
            "city": "Cardiff",
            "country": "United Kingdom",
            "IATA": "CWL",
            "ICAO": "EGFF",
            "lat": "51.39670181274414",
            "lon": "-3.343329906463623",
            "timezone": "0"
        },
        {
            "name": "Kent Intl ",
            "city": "Manston",
            "country": "United Kingdom",
            "IATA": "MSE",
            "ICAO": "EGMH",
            "lat": "51.342201",
            "lon": "1.34611",
            "timezone": "0"
        },
        {
            "name": "Blackpool Intl ",
            "city": "Blackpool",
            "country": "United Kingdom",
            "IATA": "BLK",
            "ICAO": "EGNH",
            "lat": "53.77170181274414",
            "lon": "-3.0286099910736084",
            "timezone": "0"
        },
        {
            "name": "Glasgow Intl ",
            "city": "Glasgow",
            "country": "United Kingdom",
            "IATA": "GLA",
            "ICAO": "EGPF",
            "lat": "55.8718986511",
            "lon": "-4.43306016922",
            "timezone": "0"
        },
        {
            "name": "Norwich Intl ",
            "city": "Norwich",
            "country": "United Kingdom",
            "IATA": "NWI",
            "ICAO": "EGSH",
            "lat": "52.6758003235",
            "lon": "1.28278005123",
            "timezone": "0"
        },
        {
            "name": "Exeter Intl ",
            "city": "Exeter",
            "country": "United Kingdom",
            "IATA": "EXT",
            "ICAO": "EGTE",
            "lat": "50.73440170288086",
            "lon": "-3.4138898849487305",
            "timezone": "0"
        },
        {
            "name": "Luxembourg-Findel Intl ",
            "city": "Luxemburg",
            "country": "Luxembourg",
            "IATA": "LUX",
            "ICAO": "ELLX",
            "lat": "49.6233333",
            "lon": "6.2044444",
            "timezone": "1"
        },
        {
            "name": "Kraków John Paul II Intl ",
            "city": "Krakow",
            "country": "Poland",
            "IATA": "KRK",
            "ICAO": "EPKK",
            "lat": "50.077702",
            "lon": "19.7848",
            "timezone": "1"
        },
        {
            "name": "Katowice Intl ",
            "city": "Katowice",
            "country": "Poland",
            "IATA": "KTW",
            "ICAO": "EPKT",
            "lat": "50.4743",
            "lon": "19.08",
            "timezone": "1"
        },
        {
            "name": "Bram Fischer Intl ",
            "city": "Bloemfontein",
            "country": "South Africa",
            "IATA": "BFN",
            "ICAO": "FABL",
            "lat": "-29.092699050900002",
            "lon": "26.302400589",
            "timezone": "2"
        },
        {
            "name": "Cape Town Intl ",
            "city": "Cape Town",
            "country": "South Africa",
            "IATA": "CPT",
            "ICAO": "FACT",
            "lat": "-33.9648017883",
            "lon": "18.6016998291",
            "timezone": "2"
        },
        {
            "name": "King Shaka Intl ",
            "city": "Durban",
            "country": "South Africa",
            "IATA": "DUR",
            "ICAO": "FALE",
            "lat": "-29.6144444444",
            "lon": "31.1197222222",
            "timezone": "2"
        },
        {
            "name": "OR Tambo Intl ",
            "city": "Johannesburg",
            "country": "South Africa",
            "IATA": "JNB",
            "ICAO": "FAOR",
            "lat": "-26.1392",
            "lon": "28.246",
            "timezone": "2"
        },
        {
            "name": "Pilanesberg Intl ",
            "city": "Pilanesberg",
            "country": "South Africa",
            "IATA": "NTY",
            "ICAO": "FAPN",
            "lat": "-25.333799362199997",
            "lon": "27.173400878900004",
            "timezone": "2"
        },
        {
            "name": "Polokwane Intl ",
            "city": "Potgietersrus",
            "country": "South Africa",
            "IATA": "PTG",
            "ICAO": "FAPP",
            "lat": "-23.845269",
            "lon": "29.458615",
            "timezone": "2"
        },
        {
            "name": "Sir Seretse Khama Intl ",
            "city": "Gaberone",
            "country": "Botswana",
            "IATA": "GBE",
            "ICAO": "FBSK",
            "lat": "-24.555201",
            "lon": "25.9182",
            "timezone": "2"
        },
        {
            "name": "Bangui M'Poko Intl ",
            "city": "Bangui",
            "country": "Central African Republic",
            "IATA": "BGF",
            "ICAO": "FEFF",
            "lat": "4.39847993850708",
            "lon": "18.518800735473633",
            "timezone": "1"
        },
        {
            "name": "Sir Seewoosagur Ramgoolam Intl ",
            "city": "Plaisance",
            "country": "Mauritius",
            "IATA": "MRU",
            "ICAO": "FIMP",
            "lat": "-20.430201",
            "lon": "57.683601",
            "timezone": "4"
        },
        {
            "name": "Douala Intl ",
            "city": "Douala",
            "country": "Cameroon",
            "IATA": "DLA",
            "ICAO": "FKKD",
            "lat": "4.0060801506",
            "lon": "9.719479560849999",
            "timezone": "1"
        },
        {
            "name": "Garoua Intl ",
            "city": "Garoua",
            "country": "Cameroon",
            "IATA": "GOU",
            "ICAO": "FKKR",
            "lat": "9.33588981628418",
            "lon": "13.370100021362305",
            "timezone": "1"
        },
        {
            "name": "Kenneth Kaunda Intl  Lusaka",
            "city": "Lusaka",
            "country": "Zambia",
            "IATA": "LUN",
            "ICAO": "FLLS",
            "lat": "-15.3308000565",
            "lon": "28.4526004791",
            "timezone": "2"
        },
        {
            "name": "Simon Mwansa Kapwepwe Intl ",
            "city": "Ndola",
            "country": "Zambia",
            "IATA": "NLA",
            "ICAO": "FLND",
            "lat": "-12.998100280762",
            "lon": "28.66489982605",
            "timezone": "2"
        },
        {
            "name": "Prince Said Ibrahim Intl ",
            "city": "Moroni",
            "country": "Comoros",
            "IATA": "HAH",
            "ICAO": "FMCH",
            "lat": "-11.5337",
            "lon": "43.2719",
            "timezone": "3"
        },
        {
            "name": "Dzaoudzi Pamandzi Intl ",
            "city": "Dzaoudzi",
            "country": "Mayotte",
            "IATA": "DZA",
            "ICAO": "FMCZ",
            "lat": "-12.804699897766113",
            "lon": "45.28110122680664",
            "timezone": "3"
        },
        {
            "name": "Libreville Leon M'ba Intl ",
            "city": "Libreville",
            "country": "Gabon",
            "IATA": "LBV",
            "ICAO": "FOOL",
            "lat": "0.458600014448",
            "lon": "9.412280082699999",
            "timezone": "1"
        },
        {
            "name": "M'Vengue El Hadj Omar Bongo Ondimba Intl ",
            "city": "Franceville",
            "country": "Gabon",
            "IATA": "MVB",
            "ICAO": "FOON",
            "lat": "-1.6561599969863892",
            "lon": "13.437999725341797",
            "timezone": "1"
        },
        {
            "name": "São Tomé Intl ",
            "city": "Sao Tome",
            "country": "Sao Tome and Principe",
            "IATA": "TMS",
            "ICAO": "FPST",
            "lat": "0.3781749904155731",
            "lon": "6.7121500968933105",
            "timezone": "0"
        },
        {
            "name": "Seychelles Intl ",
            "city": "Mahe",
            "country": "Seychelles",
            "IATA": "SEZ",
            "ICAO": "FSIA",
            "lat": "-4.67434",
            "lon": "55.521801",
            "timezone": "4"
        },
        {
            "name": "N'Djamena Intl ",
            "city": "N'djamena",
            "country": "Chad",
            "IATA": "NDJ",
            "ICAO": "FTTJ",
            "lat": "12.1337",
            "lon": "15.034",
            "timezone": "1"
        },
        {
            "name": "Joshua Mqabuko Nkomo Intl ",
            "city": "Bulawayo",
            "country": "Zimbabwe",
            "IATA": "BUQ",
            "ICAO": "FVBU",
            "lat": "-20.017401",
            "lon": "28.617901",
            "timezone": "2"
        },
        {
            "name": "Victoria Falls Intl ",
            "city": "Victoria Falls",
            "country": "Zimbabwe",
            "IATA": "VFA",
            "ICAO": "FVFA",
            "lat": "-18.09589958190918",
            "lon": "25.839000701904297",
            "timezone": "2"
        },
        {
            "name": "Robert Gabriel Mugabe Intl ",
            "city": "Harare",
            "country": "Zimbabwe",
            "IATA": "HRE",
            "ICAO": "FVHA",
            "lat": "-17.931801",
            "lon": "31.0928",
            "timezone": "2"
        },
        {
            "name": "Kariba Intl ",
            "city": "Kariba",
            "country": "Zimbabwe",
            "IATA": "KAB",
            "ICAO": "FVKB",
            "lat": "-16.519800186157227",
            "lon": "28.885000228881836",
            "timezone": "2"
        },
        {
            "name": "Masvingo Intl ",
            "city": "Masvingo",
            "country": "Zimbabwe",
            "IATA": "MVZ",
            "ICAO": "FVMV",
            "lat": "-20.055299758911133",
            "lon": "30.859100341796875",
            "timezone": "2"
        },
        {
            "name": "Chileka Intl ",
            "city": "Blantyre",
            "country": "Malawi",
            "IATA": "BLZ",
            "ICAO": "FWCL",
            "lat": "-15.679100036621094",
            "lon": "34.9739990234375",
            "timezone": "2"
        },
        {
            "name": "Lilongwe Intl ",
            "city": "Lilongwe",
            "country": "Malawi",
            "IATA": "LLW",
            "ICAO": "FWKI",
            "lat": "-13.7894001007",
            "lon": "33.78099823",
            "timezone": "2"
        },
        {
            "name": "Moshoeshoe I Intl ",
            "city": "Maseru",
            "country": "Lesotho",
            "IATA": "MSU",
            "ICAO": "FXMM",
            "lat": "-29.462299346923828",
            "lon": "27.552499771118164",
            "timezone": "2"
        },
        {
            "name": "Ndjili Intl ",
            "city": "Kinshasa",
            "country": "Congo (Kinshasa)",
            "IATA": "FIH",
            "ICAO": "FZAA",
            "lat": "-4.38575",
            "lon": "15.4446",
            "timezone": "1"
        },
        {
            "name": "Bangoka Intl ",
            "city": "Kisangani",
            "country": "Congo (Kinshasa)",
            "IATA": "FKI",
            "ICAO": "FZIC",
            "lat": "0.481638997793",
            "lon": "25.3379993439",
            "timezone": "2"
        },
        {
            "name": "Goma Intl ",
            "city": "Goma",
            "country": "Congo (Kinshasa)",
            "IATA": "GOM",
            "ICAO": "FZNA",
            "lat": "-1.6708099842071533",
            "lon": "29.238500595092773",
            "timezone": "2"
        },
        {
            "name": "Lubumbashi Intl ",
            "city": "Lubumashi",
            "country": "Congo (Kinshasa)",
            "IATA": "FBM",
            "ICAO": "FZQA",
            "lat": "-11.5913000107",
            "lon": "27.5308990479",
            "timezone": "2"
        },
        {
            "name": "Modibo Keita Intl ",
            "city": "Bamako",
            "country": "Mali",
            "IATA": "BKO",
            "ICAO": "GABS",
            "lat": "12.5335",
            "lon": "-7.94994",
            "timezone": "0"
        },
        {
            "name": "Banjul Intl ",
            "city": "Banjul",
            "country": "Gambia",
            "IATA": "BJL",
            "ICAO": "GBYD",
            "lat": "13.338000297546387",
            "lon": "-16.65220069885254",
            "timezone": "0"
        },
        {
            "name": "Lungi Intl ",
            "city": "Freetown",
            "country": "Sierra Leone",
            "IATA": "FNA",
            "ICAO": "GFLL",
            "lat": "8.61644",
            "lon": "-13.1955",
            "timezone": "0"
        },
        {
            "name": "Roberts Intl ",
            "city": "Monrovia",
            "country": "Liberia",
            "IATA": "ROB",
            "ICAO": "GLRB",
            "lat": "6.23379",
            "lon": "-10.3623",
            "timezone": "0"
        },
        {
            "name": "Mohammed V Intl ",
            "city": "Casablanca",
            "country": "Morocco",
            "IATA": "CMN",
            "ICAO": "GMMN",
            "lat": "33.36750030517578",
            "lon": "-7.589970111846924",
            "timezone": "0"
        },
        {
            "name": "Léopold Sédar Senghor Intl ",
            "city": "Dakar",
            "country": "Senegal",
            "IATA": "DKR",
            "ICAO": "GOOY",
            "lat": "14.739700317382812",
            "lon": "-17.49020004272461",
            "timezone": "0"
        },
        {
            "name": "Nouakchott–Oumtounsy Intl ",
            "city": "Nouakschott",
            "country": "Mauritania",
            "IATA": "NKC",
            "ICAO": "GQNO",
            "lat": "18.31",
            "lon": "-15.9697222",
            "timezone": "0"
        },
        {
            "name": "Atar Intl ",
            "city": "Atar",
            "country": "Mauritania",
            "IATA": "ATR",
            "ICAO": "GQPA",
            "lat": "20.506799697875977",
            "lon": "-13.04319953918457",
            "timezone": "0"
        },
        {
            "name": "Nouadhibou Intl ",
            "city": "Nouadhibou",
            "country": "Mauritania",
            "IATA": "NDB",
            "ICAO": "GQPP",
            "lat": "20.9330997467041",
            "lon": "-17.030000686645508",
            "timezone": "0"
        },
        {
            "name": "Amílcar Cabral Intl ",
            "city": "Amilcar Cabral",
            "country": "Cape Verde",
            "IATA": "SID",
            "ICAO": "GVAC",
            "lat": "16.7414",
            "lon": "-22.9494",
            "timezone": "-1"
        },
        {
            "name": "Addis Ababa Bole Intl ",
            "city": "Addis Ababa",
            "country": "Ethiopia",
            "IATA": "ADD",
            "ICAO": "HAAB",
            "lat": "8.97789001465",
            "lon": "38.799301147499996",
            "timezone": "3"
        },
        {
            "name": "Aba Tenna Dejazmach Yilma Intl ",
            "city": "Dire Dawa",
            "country": "Ethiopia",
            "IATA": "DIR",
            "ICAO": "HADR",
            "lat": "9.624699592590332",
            "lon": "41.85419845581055",
            "timezone": "3"
        },
        {
            "name": "Bujumbura Intl ",
            "city": "Bujumbura",
            "country": "Burundi",
            "IATA": "BJM",
            "ICAO": "HBBA",
            "lat": "-3.3240199089050293",
            "lon": "29.318500518798828",
            "timezone": "2"
        },
        {
            "name": "Egal Intl ",
            "city": "Hargeisa",
            "country": "Somalia",
            "IATA": "HGA",
            "ICAO": "HCMH",
            "lat": "9.518170356750488",
            "lon": "44.08879852294922",
            "timezone": "3"
        },
        {
            "name": "Cairo Intl ",
            "city": "Cairo",
            "country": "Egypt",
            "IATA": "CAI",
            "ICAO": "HECA",
            "lat": "30.12190055847168",
            "lon": "31.40559959411621",
            "timezone": "2"
        },
        {
            "name": "Hurghada Intl ",
            "city": "Hurghada",
            "country": "Egypt",
            "IATA": "HRG",
            "ICAO": "HEGN",
            "lat": "27.178300857543945",
            "lon": "33.799400329589844",
            "timezone": "2"
        },
        {
            "name": "Luxor Intl ",
            "city": "Luxor",
            "country": "Egypt",
            "IATA": "LXR",
            "ICAO": "HELX",
            "lat": "25.671",
            "lon": "32.7066",
            "timezone": "2"
        },
        {
            "name": "St Catherine Intl ",
            "city": "St. Catherine",
            "country": "Egypt",
            "IATA": "SKV",
            "ICAO": "HESC",
            "lat": "28.685300827",
            "lon": "34.0625",
            "timezone": "2"
        },
        {
            "name": "Aswan Intl ",
            "city": "Aswan",
            "country": "Egypt",
            "IATA": "ASW",
            "ICAO": "HESN",
            "lat": "23.9643993378",
            "lon": "32.8199996948",
            "timezone": "2"
        },
        {
            "name": "Eldoret Intl ",
            "city": "Eldoret",
            "country": "Kenya",
            "IATA": "EDL",
            "ICAO": "HKEL",
            "lat": "0.4044579863548279",
            "lon": "35.23889923095703",
            "timezone": "3"
        },
        {
            "name": "Mombasa Moi Intl ",
            "city": "Mombasa",
            "country": "Kenya",
            "IATA": "MBA",
            "ICAO": "HKMO",
            "lat": "-4.034830093383789",
            "lon": "39.594200134277344",
            "timezone": "3"
        },
        {
            "name": "Benina Intl ",
            "city": "Benghazi",
            "country": "Libya",
            "IATA": "BEN",
            "ICAO": "HLLB",
            "lat": "32.096801757799994",
            "lon": "20.2695007324",
            "timezone": "2"
        },
        {
            "name": "Tripoli Intl ",
            "city": "Tripoli",
            "country": "Libya",
            "IATA": "TIP",
            "ICAO": "HLLT",
            "lat": "32.6635017395",
            "lon": "13.1590003967",
            "timezone": "2"
        },
        {
            "name": "Kigali Intl ",
            "city": "Kigali",
            "country": "Rwanda",
            "IATA": "KGL",
            "ICAO": "HRYR",
            "lat": "-1.96863",
            "lon": "30.1395",
            "timezone": "2"
        },
        {
            "name": "Juba Intl ",
            "city": "Juba",
            "country": "South Sudan",
            "IATA": "JUB",
            "ICAO": "HSSJ",
            "lat": "4.87201023102",
            "lon": "31.6011009216",
            "timezone": "3"
        },
        {
            "name": "Khartoum Intl ",
            "city": "Khartoum",
            "country": "Sudan",
            "IATA": "KRT",
            "ICAO": "HSSS",
            "lat": "15.589500427246094",
            "lon": "32.553199768066406",
            "timezone": "3"
        },
        {
            "name": "Julius Nyerere Intl ",
            "city": "Dar Es Salaam",
            "country": "Tanzania",
            "IATA": "DAR",
            "ICAO": "HTDA",
            "lat": "-6.87811",
            "lon": "39.202599",
            "timezone": "3"
        },
        {
            "name": "Kilimanjaro Intl ",
            "city": "Kilimanjaro",
            "country": "Tanzania",
            "IATA": "JRO",
            "ICAO": "HTKJ",
            "lat": "-3.42940998077",
            "lon": "37.0745010376",
            "timezone": "3"
        },
        {
            "name": "Abeid Amani Karume Intl ",
            "city": "Zanzibar",
            "country": "Tanzania",
            "IATA": "ZNZ",
            "ICAO": "HTZA",
            "lat": "-6.22202",
            "lon": "39.224899",
            "timezone": "3"
        },
        {
            "name": "Entebbe Intl ",
            "city": "Entebbe",
            "country": "Uganda",
            "IATA": "EBB",
            "ICAO": "HUEN",
            "lat": "0.042386",
            "lon": "32.443501",
            "timezone": "3"
        },
        {
            "name": "Tirana Intl  Mother Teresa",
            "city": "Tirana",
            "country": "Albania",
            "IATA": "TIA",
            "ICAO": "LATI",
            "lat": "41.4146995544",
            "lon": "19.7206001282",
            "timezone": "1"
        },
        {
            "name": "Plovdiv Intl ",
            "city": "Plovdiv",
            "country": "Bulgaria",
            "IATA": "PDV",
            "ICAO": "LBPD",
            "lat": "42.067799",
            "lon": "24.8508",
            "timezone": "2"
        },
        {
            "name": "Larnaca Intl ",
            "city": "Larnaca",
            "country": "Cyprus",
            "IATA": "LCA",
            "ICAO": "LCLK",
            "lat": "34.875099182128906",
            "lon": "33.624900817871094",
            "timezone": "2"
        },
        {
            "name": "Paphos Intl ",
            "city": "Paphos",
            "country": "Cyprus",
            "IATA": "PFO",
            "ICAO": "LCPH",
            "lat": "34.71799850463867",
            "lon": "32.48569869995117",
            "timezone": "2"
        },
        {
            "name": "Alicante Intl ",
            "city": "Alicante",
            "country": "Spain",
            "IATA": "ALC",
            "ICAO": "LEAL",
            "lat": "38.28219985961914",
            "lon": "-0.5581560134887695",
            "timezone": "1"
        },
        {
            "name": "Almería Intl ",
            "city": "Almeria",
            "country": "Spain",
            "IATA": "LEI",
            "ICAO": "LEAM",
            "lat": "36.84389877319336",
            "lon": "-2.3701000213623047",
            "timezone": "1"
        },
        {
            "name": "Barcelona Intl ",
            "city": "Barcelona",
            "country": "Spain",
            "IATA": "BCN",
            "ICAO": "LEBL",
            "lat": "41.2971",
            "lon": "2.07846",
            "timezone": "1"
        },
        {
            "name": "Charles de Gaulle Intl ",
            "city": "Paris",
            "country": "France",
            "IATA": "CDG",
            "ICAO": "LFPG",
            "lat": "49.012798",
            "lon": "2.55",
            "timezone": "1"
        },
        {
            "name": "Heraklion Intl Nikos Kazantzakis ",
            "city": "Heraklion",
            "country": "Greece",
            "IATA": "HER",
            "ICAO": "LGIR",
            "lat": "35.3396987915",
            "lon": "25.180299758900002",
            "timezone": "2"
        },
        {
            "name": "Ioannis Kapodistrias Intl ",
            "city": "Kerkyra/corfu",
            "country": "Greece",
            "IATA": "CFU",
            "ICAO": "LGKR",
            "lat": "39.601898193359375",
            "lon": "19.911699295043945",
            "timezone": "2"
        },
        {
            "name": "Alexander the Great Intl ",
            "city": "Kavala",
            "country": "Greece",
            "IATA": "KVA",
            "ICAO": "LGKV",
            "lat": "40.913299560546875",
            "lon": "24.619199752807617",
            "timezone": "2"
        },
        {
            "name": "Mytilene Intl ",
            "city": "Mytilini",
            "country": "Greece",
            "IATA": "MJT",
            "ICAO": "LGMT",
            "lat": "39.0567016602",
            "lon": "26.5983009338",
            "timezone": "2"
        },
        {
            "name": "Chania Intl ",
            "city": "Chania",
            "country": "Greece",
            "IATA": "CHQ",
            "ICAO": "LGSA",
            "lat": "35.531700134277344",
            "lon": "24.149700164794922",
            "timezone": "2"
        },
        {
            "name": "Thessaloniki Macedonia Intl ",
            "city": "Thessaloniki",
            "country": "Greece",
            "IATA": "SKG",
            "ICAO": "LGTS",
            "lat": "40.51969909667969",
            "lon": "22.97089958190918",
            "timezone": "2"
        },
        {
            "name": "Zakynthos Intl  Dionysios Solomos",
            "city": "Zakynthos",
            "country": "Greece",
            "IATA": "ZTH",
            "ICAO": "LGZA",
            "lat": "37.7509",
            "lon": "20.8843",
            "timezone": "2"
        },
        {
            "name": "Budapest Liszt Ferenc Intl ",
            "city": "Budapest",
            "country": "Hungary",
            "IATA": "BUD",
            "ICAO": "LHBP",
            "lat": "47.42976",
            "lon": "19.261093",
            "timezone": "1"
        },
        {
            "name": "Debrecen Intl ",
            "city": "Debrecen",
            "country": "Hungary",
            "IATA": "DEB",
            "ICAO": "LHDC",
            "lat": "47.48889923095703",
            "lon": "21.615299224853516",
            "timezone": "1"
        },
        {
            "name": "Pescara Intl ",
            "city": "Pescara",
            "country": "Italy",
            "IATA": "PSR",
            "ICAO": "LIBP",
            "lat": "42.431702",
            "lon": "14.1811",
            "timezone": "1"
        },
        {
            "name": "Malpensa Intl ",
            "city": "Milano",
            "country": "Italy",
            "IATA": "MXP",
            "ICAO": "LIMC",
            "lat": "45.6306",
            "lon": "8.72811",
            "timezone": "1"
        },
        {
            "name": "Il Caravaggio Intl ",
            "city": "Bergamo",
            "country": "Italy",
            "IATA": "BGY",
            "ICAO": "LIME",
            "lat": "45.673901",
            "lon": "9.70417",
            "timezone": "1"
        },
        {
            "name": "Villanova D'Albenga Intl ",
            "city": "Albenga",
            "country": "Italy",
            "IATA": "ALL",
            "ICAO": "LIMG",
            "lat": "44.050598",
            "lon": "8.12743",
            "timezone": "1"
        },
        {
            "name": "Cuneo Intl ",
            "city": "Cuneo",
            "country": "Italy",
            "IATA": "CUF",
            "ICAO": "LIMZ",
            "lat": "44.547001",
            "lon": "7.62322",
            "timezone": "1"
        },
        {
            "name": "Federico Fellini Intl ",
            "city": "Rimini",
            "country": "Italy",
            "IATA": "RMI",
            "ICAO": "LIPR",
            "lat": "44.020302",
            "lon": "12.6117",
            "timezone": "1"
        },
        {
            "name": "Ciampino–G. B. Pastine Intl ",
            "city": "Rome",
            "country": "Italy",
            "IATA": "CIA",
            "ICAO": "LIRA",
            "lat": "41.7994",
            "lon": "12.5949",
            "timezone": "1"
        },
        {
            "name": "Naples Intl ",
            "city": "Naples",
            "country": "Italy",
            "IATA": "NAP",
            "ICAO": "LIRN",
            "lat": "40.886002",
            "lon": "14.2908",
            "timezone": "1"
        },
        {
            "name": "Pisa Intl ",
            "city": "Pisa",
            "country": "Italy",
            "IATA": "PSA",
            "ICAO": "LIRP",
            "lat": "43.683899",
            "lon": "10.3927",
            "timezone": "1"
        },
        {
            "name": "Perugia San Francesco d'Assisi – Umbria Intl ",
            "city": "Perugia",
            "country": "Italy",
            "IATA": "PEG",
            "ICAO": "LIRZ",
            "lat": "43.095901",
            "lon": "12.5132",
            "timezone": "1"
        },
        {
            "name": "Karlovy Vary Intl ",
            "city": "Karlovy Vary",
            "country": "Czech Republic",
            "IATA": "KLV",
            "ICAO": "LKKV",
            "lat": "50.202999114990234",
            "lon": "12.914999961853027",
            "timezone": "1"
        },
        {
            "name": "Ben Gurion Intl ",
            "city": "Tel-aviv",
            "country": "Israel",
            "IATA": "TLV",
            "ICAO": "LLBG",
            "lat": "32.01139831542969",
            "lon": "34.88669967651367",
            "timezone": "2"
        },
        {
            "name": "Haifa Intl ",
            "city": "Haifa",
            "country": "Israel",
            "IATA": "HFA",
            "ICAO": "LLHA",
            "lat": "32.80939865112305",
            "lon": "35.04309844970703",
            "timezone": "2"
        },
        {
            "name": "Ovda Intl ",
            "city": "Ovda",
            "country": "Israel",
            "IATA": "VDA",
            "ICAO": "LLOV",
            "lat": "29.94029998779297",
            "lon": "34.93579864501953",
            "timezone": "2"
        },
        {
            "name": "Malta Intl ",
            "city": "Malta",
            "country": "Malta",
            "IATA": "MLA",
            "ICAO": "LMML",
            "lat": "35.857498",
            "lon": "14.4775",
            "timezone": "1"
        },
        {
            "name": "Vienna Intl ",
            "city": "Vienna",
            "country": "Austria",
            "IATA": "VIE",
            "ICAO": "LOWW",
            "lat": "48.110298156738",
            "lon": "16.569700241089",
            "timezone": "1"
        },
        {
            "name": "Mostar Intl ",
            "city": "Mostar",
            "country": "Bosnia and Herzegovina",
            "IATA": "OMO",
            "ICAO": "LQMO",
            "lat": "43.282901763916016",
            "lon": "17.84589958190918",
            "timezone": "1"
        },
        {
            "name": "Sarajevo Intl ",
            "city": "Sarajevo",
            "country": "Bosnia and Herzegovina",
            "IATA": "SJJ",
            "ICAO": "LQSA",
            "lat": "43.82460021972656",
            "lon": "18.331499099731445",
            "timezone": "1"
        },
        {
            "name": "Arad Intl ",
            "city": "Arad",
            "country": "Romania",
            "IATA": "ARW",
            "ICAO": "LRAR",
            "lat": "46.17660140991211",
            "lon": "21.261999130249023",
            "timezone": "2"
        },
        {
            "name": "Băneasa Intl ",
            "city": "Bucharest",
            "country": "Romania",
            "IATA": "BBU",
            "ICAO": "LRBS",
            "lat": "44.50320053100586",
            "lon": "26.102100372314453",
            "timezone": "2"
        },
        {
            "name": "Mihail Kogălniceanu Intl ",
            "city": "Constanta",
            "country": "Romania",
            "IATA": "CND",
            "ICAO": "LRCK",
            "lat": "44.36220169067383",
            "lon": "28.488300323486328",
            "timezone": "2"
        },
        {
            "name": "Cluj-Napoca Intl ",
            "city": "Cluj-napoca",
            "country": "Romania",
            "IATA": "CLJ",
            "ICAO": "LRCL",
            "lat": "46.78519821166992",
            "lon": "23.686199188232422",
            "timezone": "2"
        },
        {
            "name": "Oradea Intl ",
            "city": "Oradea",
            "country": "Romania",
            "IATA": "OMR",
            "ICAO": "LROD",
            "lat": "47.025299072265625",
            "lon": "21.90250015258789",
            "timezone": "2"
        },
        {
            "name": "Henri Coandă Intl ",
            "city": "Bucharest",
            "country": "Romania",
            "IATA": "OTP",
            "ICAO": "LROP",
            "lat": "44.5711111",
            "lon": "26.085",
            "timezone": "2"
        },
        {
            "name": "Sibiu Intl ",
            "city": "Sibiu",
            "country": "Romania",
            "IATA": "SBZ",
            "ICAO": "LRSB",
            "lat": "45.78559875488281",
            "lon": "24.091299057006836",
            "timezone": "2"
        },
        {
            "name": "Transilvania Târgu Mureş Intl ",
            "city": "Tirgu Mures",
            "country": "Romania",
            "IATA": "TGM",
            "ICAO": "LRTM",
            "lat": "46.46770095825195",
            "lon": "24.412500381469727",
            "timezone": "2"
        },
        {
            "name": "Geneva Cointrin Intl ",
            "city": "Geneva",
            "country": "Switzerland",
            "IATA": "GVA",
            "ICAO": "LSGG",
            "lat": "46.23809814453125",
            "lon": "6.108950138092041",
            "timezone": "1"
        },
        {
            "name": "Esenboğa Intl ",
            "city": "Ankara",
            "country": "Turkey",
            "IATA": "ESB",
            "ICAO": "LTAC",
            "lat": "40.128101348899996",
            "lon": "32.995098114",
            "timezone": "3"
        },
        {
            "name": "Antalya Intl ",
            "city": "Antalya",
            "country": "Turkey",
            "IATA": "AYT",
            "ICAO": "LTAI",
            "lat": "36.898701",
            "lon": "30.800501",
            "timezone": "3"
        },
        {
            "name": "Gaziantep Intl ",
            "city": "Gaziantep",
            "country": "Turkey",
            "IATA": "GZT",
            "ICAO": "LTAJ",
            "lat": "36.9472007751",
            "lon": "37.4786987305",
            "timezone": "3"
        },
        {
            "name": "Atatürk Intl ",
            "city": "Istanbul",
            "country": "Turkey",
            "IATA": "ISL",
            "ICAO": "LTBA",
            "lat": "40.976898",
            "lon": "28.8146",
            "timezone": "3"
        },
        {
            "name": "Adnan Menderes Intl ",
            "city": "Izmir",
            "country": "Turkey",
            "IATA": "ADB",
            "ICAO": "LTBJ",
            "lat": "38.2924003601",
            "lon": "27.156999588",
            "timezone": "3"
        },
        {
            "name": "Dalaman Intl ",
            "city": "Dalaman",
            "country": "Turkey",
            "IATA": "DLM",
            "ICAO": "LTBS",
            "lat": "36.7131004333",
            "lon": "28.7924995422",
            "timezone": "3"
        },
        {
            "name": "Erzurum Intl ",
            "city": "Erzurum",
            "country": "Turkey",
            "IATA": "ERZ",
            "ICAO": "LTCE",
            "lat": "39.9565010071",
            "lon": "41.17020034789999",
            "timezone": "3"
        },
        {
            "name": "Trabzon Intl ",
            "city": "Trabzon",
            "country": "Turkey",
            "IATA": "TZX",
            "ICAO": "LTCG",
            "lat": "40.99509811401367",
            "lon": "39.78969955444336",
            "timezone": "3"
        },
        {
            "name": "Bălți Intl ",
            "city": "Saltsy",
            "country": "Moldova",
            "IATA": "BZY",
            "ICAO": "LUBL",
            "lat": "47.843056",
            "lon": "27.777222",
            "timezone": "2"
        },
        {
            "name": "Chişinău Intl ",
            "city": "Chisinau",
            "country": "Moldova",
            "IATA": "KIV",
            "ICAO": "LUKK",
            "lat": "46.92770004272461",
            "lon": "28.930999755859375",
            "timezone": "2"
        },
        {
            "name": "Priština Intl ",
            "city": "Pristina",
            "country": "Serbia",
            "IATA": "PRN",
            "ICAO": "BKPR",
            "lat": "42.5728",
            "lon": "21.035801",
            "timezone": "1"
        },
        {
            "name": "Vršac Intl ",
            "city": "Vrsac",
            "country": "Serbia",
            "IATA": "\\N",
            "ICAO": "LYVR",
            "lat": "45.1469",
            "lon": "21.3099",
            "timezone": "1"
        },
        {
            "name": "Maria Montez Intl ",
            "city": "Barahona",
            "country": "Dominican Republic",
            "IATA": "BRX",
            "ICAO": "MDBH",
            "lat": "18.25149917602539",
            "lon": "-71.12039947509766",
            "timezone": "-4"
        },
        {
            "name": "Casa De Campo Intl ",
            "city": "La Romana",
            "country": "Dominican Republic",
            "IATA": "LRM",
            "ICAO": "MDLR",
            "lat": "18.450700759887695",
            "lon": "-68.91179656982422",
            "timezone": "-4"
        },
        {
            "name": "Punta Cana Intl ",
            "city": "Punta Cana",
            "country": "Dominican Republic",
            "IATA": "PUJ",
            "ICAO": "MDPC",
            "lat": "18.567399978599997",
            "lon": "-68.36340332030001",
            "timezone": "-4"
        },
        {
            "name": "Gregorio Luperon Intl ",
            "city": "Puerto Plata",
            "country": "Dominican Republic",
            "IATA": "POP",
            "ICAO": "MDPP",
            "lat": "19.75790023803711",
            "lon": "-70.56999969482422",
            "timezone": "-4"
        },
        {
            "name": "Las Américas Intl ",
            "city": "Santo Domingo",
            "country": "Dominican Republic",
            "IATA": "SDQ",
            "ICAO": "MDSD",
            "lat": "18.42970085144",
            "lon": "-69.668899536133",
            "timezone": "-4"
        },
        {
            "name": "Cibao Intl ",
            "city": "Santiago",
            "country": "Dominican Republic",
            "IATA": "STI",
            "ICAO": "MDST",
            "lat": "19.406099319458008",
            "lon": "-70.60469818115234",
            "timezone": "-4"
        },
        {
            "name": "Goloson Intl ",
            "city": "La Ceiba",
            "country": "Honduras",
            "IATA": "LCE",
            "ICAO": "MHLC",
            "lat": "15.7425",
            "lon": "-86.852997",
            "timezone": "-6"
        },
        {
            "name": "Ramón Villeda Morales Intl ",
            "city": "San Pedro Sula",
            "country": "Honduras",
            "IATA": "SAP",
            "ICAO": "MHLM",
            "lat": "15.4526",
            "lon": "-87.923599",
            "timezone": "-6"
        },
        {
            "name": "Juan Manuel Galvez Intl ",
            "city": "Roatan",
            "country": "Honduras",
            "IATA": "RTB",
            "ICAO": "MHRO",
            "lat": "16.316799",
            "lon": "-86.523003",
            "timezone": "-6"
        },
        {
            "name": "Toncontín Intl ",
            "city": "Tegucigalpa",
            "country": "Honduras",
            "IATA": "TGU",
            "ICAO": "MHTG",
            "lat": "14.06089973449707",
            "lon": "-87.21720123291016",
            "timezone": "-6"
        },
        {
            "name": "Norman Manley Intl ",
            "city": "Kingston",
            "country": "Jamaica",
            "IATA": "KIN",
            "ICAO": "MKJP",
            "lat": "17.935699462890625",
            "lon": "-76.7874984741211",
            "timezone": "-5"
        },
        {
            "name": "Sangster Intl ",
            "city": "Montego Bay",
            "country": "Jamaica",
            "IATA": "MBJ",
            "ICAO": "MKJS",
            "lat": "18.503700256347656",
            "lon": "-77.91339874267578",
            "timezone": "-5"
        },
        {
            "name": "General Juan N Alvarez Intl ",
            "city": "Acapulco",
            "country": "Mexico",
            "IATA": "ACA",
            "ICAO": "MMAA",
            "lat": "16.757099151611328",
            "lon": "-99.75399780273438",
            "timezone": "-6"
        },
        {
            "name": "Del Norte Intl ",
            "city": "Monterrey",
            "country": "Mexico",
            "IATA": "NTR",
            "ICAO": "MMAN",
            "lat": "25.865601",
            "lon": "-100.237",
            "timezone": "-6"
        },
        {
            "name": "Jesús Terán Paredo Intl ",
            "city": "Aguascalientes",
            "country": "Mexico",
            "IATA": "AGU",
            "ICAO": "MMAS",
            "lat": "21.705601",
            "lon": "-102.318001",
            "timezone": "-6"
        },
        {
            "name": "Bahías de Huatulco Intl ",
            "city": "Huatulco",
            "country": "Mexico",
            "IATA": "HUX",
            "ICAO": "MMBT",
            "lat": "15.7753",
            "lon": "-96.262604",
            "timezone": "-6"
        },
        {
            "name": "Ciudad Acuña New Intl ",
            "city": "Ciudad Acuna",
            "country": "Mexico",
            "IATA": "ACN",
            "ICAO": "MMCC",
            "lat": "29.332899",
            "lon": "-101.098998",
            "timezone": "-6"
        },
        {
            "name": "Ciudad del Carmen Intl ",
            "city": "Ciudad Del Carmen",
            "country": "Mexico",
            "IATA": "CME",
            "ICAO": "MMCE",
            "lat": "18.65369987487793",
            "lon": "-91.79900360107422",
            "timezone": "-6"
        },
        {
            "name": "Bachigualato Federal Intl ",
            "city": "Culiacan",
            "country": "Mexico",
            "IATA": "CUL",
            "ICAO": "MMCL",
            "lat": "24.7644996643",
            "lon": "-107.474998474",
            "timezone": "-7"
        },
        {
            "name": "Chetumal Intl ",
            "city": "Chetumal",
            "country": "Mexico",
            "IATA": "CTM",
            "ICAO": "MMCM",
            "lat": "18.50469970703125",
            "lon": "-88.32679748535156",
            "timezone": "-5"
        },
        {
            "name": "Ciudad Obregón Intl ",
            "city": "Ciudad Obregon",
            "country": "Mexico",
            "IATA": "CEN",
            "ICAO": "MMCN",
            "lat": "27.39259910583496",
            "lon": "-109.83300018310547",
            "timezone": "-7"
        },
        {
            "name": "Ingeniero Alberto Acuña Ongay Intl ",
            "city": "Campeche",
            "country": "Mexico",
            "IATA": "CPE",
            "ICAO": "MMCP",
            "lat": "19.816799163800003",
            "lon": "-90.5002975464",
            "timezone": "-6"
        },
        {
            "name": "Abraham González Intl ",
            "city": "Ciudad Juarez",
            "country": "Mexico",
            "IATA": "CJS",
            "ICAO": "MMCS",
            "lat": "31.63610076904297",
            "lon": "-106.42900085449219",
            "timezone": "-7"
        },
        {
            "name": "General Roberto Fierro Villalobos Intl ",
            "city": "Chihuahua",
            "country": "Mexico",
            "IATA": "CUU",
            "ICAO": "MMCU",
            "lat": "28.702899932900003",
            "lon": "-105.964996338",
            "timezone": "-7"
        },
        {
            "name": "General Pedro Jose Mendez Intl ",
            "city": "Ciudad Victoria",
            "country": "Mexico",
            "IATA": "CVM",
            "ICAO": "MMCV",
            "lat": "23.7033004761",
            "lon": "-98.9564971924",
            "timezone": "-6"
        },
        {
            "name": "Cozumel Intl ",
            "city": "Cozumel",
            "country": "Mexico",
            "IATA": "CZM",
            "ICAO": "MMCZ",
            "lat": "20.52239990234375",
            "lon": "-86.92559814453125",
            "timezone": "-5"
        },
        {
            "name": "General Guadalupe Victoria Intl ",
            "city": "Durango",
            "country": "Mexico",
            "IATA": "DGO",
            "ICAO": "MMDO",
            "lat": "24.1242008209",
            "lon": "-104.527999878",
            "timezone": "-6"
        },
        {
            "name": "Ensenada Intl ",
            "city": "Ensenada",
            "country": "Mexico",
            "IATA": "ESE",
            "ICAO": "MMES",
            "lat": "31.7953",
            "lon": "-116.602997",
            "timezone": "-8"
        },
        {
            "name": "Don Miguel Hidalgo Y Costilla Intl ",
            "city": "Guadalajara",
            "country": "Mexico",
            "IATA": "GDL",
            "ICAO": "MMGL",
            "lat": "20.521799087524414",
            "lon": "-103.31099700927734",
            "timezone": "-6"
        },
        {
            "name": "General José María Yáñez Intl ",
            "city": "Guaymas",
            "country": "Mexico",
            "IATA": "GYM",
            "ICAO": "MMGM",
            "lat": "27.9689998626709",
            "lon": "-110.92500305175781",
            "timezone": "-7"
        },
        {
            "name": "General Ignacio P. Garcia Intl ",
            "city": "Hermosillo",
            "country": "Mexico",
            "IATA": "HMO",
            "ICAO": "MMHO",
            "lat": "29.095899581900003",
            "lon": "-111.047996521",
            "timezone": "-7"
        },
        {
            "name": "Plan De Guadalupe Intl ",
            "city": "Saltillo",
            "country": "Mexico",
            "IATA": "SLW",
            "ICAO": "MMIO",
            "lat": "25.54949951171875",
            "lon": "-100.92900085449219",
            "timezone": "-6"
        },
        {
            "name": "Valle del Fuerte Intl ",
            "city": "Los Mochis",
            "country": "Mexico",
            "IATA": "LMM",
            "ICAO": "MMLM",
            "lat": "25.6851997375",
            "lon": "-109.081001282",
            "timezone": "-7"
        },
        {
            "name": "Del Bajío Intl ",
            "city": "Del Bajio",
            "country": "Mexico",
            "IATA": "BJX",
            "ICAO": "MMLO",
            "lat": "20.9935",
            "lon": "-101.481003",
            "timezone": "-6"
        },
        {
            "name": "Manuel Márquez de León Intl ",
            "city": "La Paz",
            "country": "Mexico",
            "IATA": "LAP",
            "ICAO": "MMLP",
            "lat": "24.072700500499998",
            "lon": "-110.361999512",
            "timezone": "-7"
        },
        {
            "name": "Loreto Intl ",
            "city": "Loreto",
            "country": "Mexico",
            "IATA": "LTO",
            "ICAO": "MMLT",
            "lat": "25.989200592041016",
            "lon": "-111.3479995727539",
            "timezone": "-7"
        },
        {
            "name": "General Servando Canales Intl ",
            "city": "Matamoros",
            "country": "Mexico",
            "IATA": "MAM",
            "ICAO": "MMMA",
            "lat": "25.7698993683",
            "lon": "-97.5252990723",
            "timezone": "-6"
        },
        {
            "name": "General Rodolfo Sánchez Taboada Intl ",
            "city": "Mexicali",
            "country": "Mexico",
            "IATA": "MXL",
            "ICAO": "MMML",
            "lat": "32.6306",
            "lon": "-115.241997",
            "timezone": "-8"
        },
        {
            "name": "General Francisco J. Mujica Intl ",
            "city": "Morelia",
            "country": "Mexico",
            "IATA": "MLM",
            "ICAO": "MMMM",
            "lat": "19.849899292",
            "lon": "-101.025001526",
            "timezone": "-6"
        },
        {
            "name": "Monclova Intl ",
            "city": "Monclova",
            "country": "Mexico",
            "IATA": "LOV",
            "ICAO": "MMMV",
            "lat": "26.9557",
            "lon": "-101.470001",
            "timezone": "-6"
        },
        {
            "name": "Licenciado Benito Juarez Intl ",
            "city": "Mexico City",
            "country": "Mexico",
            "IATA": "MEX",
            "ICAO": "MMMX",
            "lat": "19.4363",
            "lon": "-99.072098",
            "timezone": "-6"
        },
        {
            "name": "General Mariano Escobedo Intl ",
            "city": "Monterrey",
            "country": "Mexico",
            "IATA": "MTY",
            "ICAO": "MMMY",
            "lat": "25.7784996033",
            "lon": "-100.107002258",
            "timezone": "-6"
        },
        {
            "name": "General Rafael Buelna Intl ",
            "city": "Mazatlan",
            "country": "Mexico",
            "IATA": "MZT",
            "ICAO": "MMMZ",
            "lat": "23.1613998413",
            "lon": "-106.26599884",
            "timezone": "-7"
        },
        {
            "name": "Nogales Intl ",
            "city": "Nogales",
            "country": "Mexico",
            "IATA": "NOG",
            "ICAO": "MMNG",
            "lat": "31.22610092163086",
            "lon": "-110.97599792480469",
            "timezone": "-7"
        },
        {
            "name": "Quetzalcóatl Intl ",
            "city": "Nuevo Laredo",
            "country": "Mexico",
            "IATA": "NLD",
            "ICAO": "MMNL",
            "lat": "27.4438991547",
            "lon": "-99.5705032349",
            "timezone": "-6"
        },
        {
            "name": "Xoxocotlán Intl ",
            "city": "Oaxaca",
            "country": "Mexico",
            "IATA": "OAX",
            "ICAO": "MMOX",
            "lat": "16.9999008179",
            "lon": "-96.726600647",
            "timezone": "-6"
        },
        {
            "name": "Hermanos Serdán Intl ",
            "city": "Puebla",
            "country": "Mexico",
            "IATA": "PBC",
            "ICAO": "MMPB",
            "lat": "19.1581001282",
            "lon": "-98.3713989258",
            "timezone": "-6"
        },
        {
            "name": "Mar de Cortés Intl ",
            "city": "Punta Penasco",
            "country": "Mexico",
            "IATA": "PPE",
            "ICAO": "MMPE",
            "lat": "31.351987",
            "lon": "-113.305177",
            "timezone": "-7"
        },
        {
            "name": "Piedras Negras Intl ",
            "city": "Piedras Negras",
            "country": "Mexico",
            "IATA": "PDS",
            "ICAO": "MMPG",
            "lat": "28.627399",
            "lon": "-100.535004",
            "timezone": "-6"
        },
        {
            "name": "Licenciado Gustavo Díaz Ordaz Intl ",
            "city": "Puerto Vallarta",
            "country": "Mexico",
            "IATA": "PVR",
            "ICAO": "MMPR",
            "lat": "20.680099487304688",
            "lon": "-105.25399780273438",
            "timezone": "-6"
        },
        {
            "name": "Puerto Escondido Intl ",
            "city": "Puerto Escondido",
            "country": "Mexico",
            "IATA": "PXM",
            "ICAO": "MMPS",
            "lat": "15.8769",
            "lon": "-97.089103",
            "timezone": "-6"
        },
        {
            "name": "General Lucio Blanco Intl ",
            "city": "Reynosa",
            "country": "Mexico",
            "IATA": "REX",
            "ICAO": "MMRX",
            "lat": "26.0089",
            "lon": "-98.2285",
            "timezone": "-6"
        },
        {
            "name": "Los Cabos Intl ",
            "city": "San Jose Del Cabo",
            "country": "Mexico",
            "IATA": "SJD",
            "ICAO": "MMSD",
            "lat": "23.15180015563965",
            "lon": "-109.72100067138672",
            "timezone": "-7"
        },
        {
            "name": "San Felipe Intl ",
            "city": "San Filipe",
            "country": "Mexico",
            "IATA": "SFH",
            "ICAO": "MMSF",
            "lat": "30.930200576782",
            "lon": "-114.80899810791",
            "timezone": "-8"
        },
        {
            "name": "Ponciano Arriaga Intl ",
            "city": "San Luis Potosi",
            "country": "Mexico",
            "IATA": "SLP",
            "ICAO": "MMSP",
            "lat": "22.254299163800003",
            "lon": "-100.930999756",
            "timezone": "-6"
        },
        {
            "name": "Francisco Sarabia Intl ",
            "city": "Torreon",
            "country": "Mexico",
            "IATA": "TRC",
            "ICAO": "MMTC",
            "lat": "25.568300247199996",
            "lon": "-103.411003113",
            "timezone": "-6"
        },
        {
            "name": "Angel Albino Corzo Intl ",
            "city": "Tuxtla Gutierrez",
            "country": "Mexico",
            "IATA": "TGZ",
            "ICAO": "MMTG",
            "lat": "16.5636005402",
            "lon": "-93.02249908450001",
            "timezone": "-6"
        },
        {
            "name": "General Abelardo L. Rodríguez Intl ",
            "city": "Tijuana",
            "country": "Mexico",
            "IATA": "TIJ",
            "ICAO": "MMTJ",
            "lat": "32.541099548339844",
            "lon": "-116.97000122070312",
            "timezone": "-8"
        },
        {
            "name": "General Francisco Javier Mina Intl ",
            "city": "Tampico",
            "country": "Mexico",
            "IATA": "TAM",
            "ICAO": "MMTM",
            "lat": "22.2964000702",
            "lon": "-97.8658981323",
            "timezone": "-6"
        },
        {
            "name": "Licenciado Adolfo Lopez Mateos Intl ",
            "city": "Toluca",
            "country": "Mexico",
            "IATA": "TLC",
            "ICAO": "MMTO",
            "lat": "19.3370990753",
            "lon": "-99.56600189210002",
            "timezone": "-6"
        },
        {
            "name": "Tapachula Intl ",
            "city": "Tapachula",
            "country": "Mexico",
            "IATA": "TAP",
            "ICAO": "MMTP",
            "lat": "14.7943000793",
            "lon": "-92.3700027466",
            "timezone": "-6"
        },
        {
            "name": "Cancún Intl ",
            "city": "Cancun",
            "country": "Mexico",
            "IATA": "CUN",
            "ICAO": "MMUN",
            "lat": "21.036500930800003",
            "lon": "-86.8770980835",
            "timezone": "-5"
        },
        {
            "name": "Carlos Rovirosa Pérez Intl ",
            "city": "Villahermosa",
            "country": "Mexico",
            "IATA": "VSA",
            "ICAO": "MMVA",
            "lat": "17.996999740600586",
            "lon": "-92.81739807128906",
            "timezone": "-6"
        },
        {
            "name": "General Heriberto Jara Intl ",
            "city": "Vera Cruz",
            "country": "Mexico",
            "IATA": "VER",
            "ICAO": "MMVR",
            "lat": "19.1459007263",
            "lon": "-96.1873016357",
            "timezone": "-6"
        },
        {
            "name": "General Leobardo C. Ruiz Intl ",
            "city": "Zacatecas",
            "country": "Mexico",
            "IATA": "ZCL",
            "ICAO": "MMZC",
            "lat": "22.8971004486",
            "lon": "-102.68699646",
            "timezone": "-6"
        },
        {
            "name": "Ixtapa Zihuatanejo Intl ",
            "city": "Zihuatanejo",
            "country": "Mexico",
            "IATA": "ZIH",
            "ICAO": "MMZH",
            "lat": "17.601600647",
            "lon": "-101.460998535",
            "timezone": "-6"
        },
        {
            "name": "Playa De Oro Intl ",
            "city": "Manzanillo",
            "country": "Mexico",
            "IATA": "ZLO",
            "ICAO": "MMZO",
            "lat": "19.144800186199998",
            "lon": "-104.558998108",
            "timezone": "-6"
        },
        {
            "name": "Augusto C. Sandino (Managua) Intl ",
            "city": "Managua",
            "country": "Nicaragua",
            "IATA": "MGA",
            "ICAO": "MNMG",
            "lat": "12.141500473022461",
            "lon": "-86.16819763183594",
            "timezone": "-6"
        },
        {
            "name": "Bocas Del Toro Intl ",
            "city": "Bocas Del Toro",
            "country": "Panama",
            "IATA": "BOC",
            "ICAO": "MPBO",
            "lat": "9.340849876403809",
            "lon": "-82.25080108642578",
            "timezone": "-5"
        },
        {
            "name": "Cap Manuel Niño Intl ",
            "city": "Changuinola",
            "country": "Panama",
            "IATA": "CHX",
            "ICAO": "MPCH",
            "lat": "9.458962",
            "lon": "-82.515062",
            "timezone": "-5"
        },
        {
            "name": "Enrique Malek Intl ",
            "city": "David",
            "country": "Panama",
            "IATA": "DAV",
            "ICAO": "MPDA",
            "lat": "8.390999794006348",
            "lon": "-82.43499755859375",
            "timezone": "-5"
        },
        {
            "name": "Panama Pacific Intl ",
            "city": "Howard",
            "country": "Panama",
            "IATA": "BLB",
            "ICAO": "MPHO",
            "lat": "8.91479",
            "lon": "-79.599602",
            "timezone": "-5"
        },
        {
            "name": "Marcos A. Gelabert Intl ",
            "city": "Panama",
            "country": "Panama",
            "IATA": "PAC",
            "ICAO": "MPMG",
            "lat": "8.973340034484863",
            "lon": "-79.55560302734375",
            "timezone": "-5"
        },
        {
            "name": "Tocumen Intl ",
            "city": "Panama City",
            "country": "Panama",
            "IATA": "PTY",
            "ICAO": "MPTO",
            "lat": "9.0713596344",
            "lon": "-79.3834991455",
            "timezone": "-5"
        },
        {
            "name": "Daniel Oduber Quiros Intl ",
            "city": "Liberia",
            "country": "Costa Rica",
            "IATA": "LIR",
            "ICAO": "MRLB",
            "lat": "10.5933",
            "lon": "-85.544403",
            "timezone": "-6"
        },
        {
            "name": "Limon Intl ",
            "city": "Limon",
            "country": "Costa Rica",
            "IATA": "LIO",
            "ICAO": "MRLM",
            "lat": "9.95796012878418",
            "lon": "-83.02200317382812",
            "timezone": "-6"
        },
        {
            "name": "Juan Santamaria Intl ",
            "city": "San Jose",
            "country": "Costa Rica",
            "IATA": "SJO",
            "ICAO": "MROC",
            "lat": "9.993860244750977",
            "lon": "-84.20880126953125",
            "timezone": "-6"
        },
        {
            "name": "Monseñor Óscar Arnulfo Romero Intl ",
            "city": "San Salvador",
            "country": "El Salvador",
            "IATA": "SAL",
            "ICAO": "MSLP",
            "lat": "13.4409",
            "lon": "-89.055702",
            "timezone": "-6"
        },
        {
            "name": "Ilopango Intl ",
            "city": "San Salvador",
            "country": "El Salvador",
            "IATA": "\\N",
            "ICAO": "MSSS",
            "lat": "13.69950008392334",
            "lon": "-89.11990356445312",
            "timezone": "-6"
        },
        {
            "name": "Cap Haitien Intl ",
            "city": "Cap Haitien",
            "country": "Haiti",
            "IATA": "CAP",
            "ICAO": "MTCH",
            "lat": "19.733",
            "lon": "-72.194702",
            "timezone": "-5"
        },
        {
            "name": "Toussaint Louverture Intl ",
            "city": "Port-au-prince",
            "country": "Haiti",
            "IATA": "PAP",
            "ICAO": "MTPP",
            "lat": "18.579999923706055",
            "lon": "-72.2925033569336",
            "timezone": "-5"
        },
        {
            "name": "Vilo Acuña Intl ",
            "city": "Cayo Largo del Sur",
            "country": "Cuba",
            "IATA": "CYO",
            "ICAO": "MUCL",
            "lat": "21.6165008545",
            "lon": "-81.5459976196",
            "timezone": "-5"
        },
        {
            "name": "Ignacio Agramonte Intl ",
            "city": "Camaguey",
            "country": "Cuba",
            "IATA": "CMW",
            "ICAO": "MUCM",
            "lat": "21.420299530029297",
            "lon": "-77.84750366210938",
            "timezone": "-5"
        },
        {
            "name": "Antonio Maceo Intl ",
            "city": "Santiago De Cuba",
            "country": "Cuba",
            "IATA": "SCU",
            "ICAO": "MUCU",
            "lat": "19.96980094909668",
            "lon": "-75.83540344238281",
            "timezone": "-5"
        },
        {
            "name": "José Martí Intl ",
            "city": "Havana",
            "country": "Cuba",
            "IATA": "HAV",
            "ICAO": "MUHA",
            "lat": "22.989200592041016",
            "lon": "-82.40910339355469",
            "timezone": "-5"
        },
        {
            "name": "Frank Pais Intl ",
            "city": "Holguin",
            "country": "Cuba",
            "IATA": "HOG",
            "ICAO": "MUHG",
            "lat": "20.785600662231445",
            "lon": "-76.31510162353516",
            "timezone": "-5"
        },
        {
            "name": "Juan Gualberto Gomez Intl ",
            "city": "Varadero",
            "country": "Cuba",
            "IATA": "VRA",
            "ICAO": "MUVR",
            "lat": "23.034400939941406",
            "lon": "-81.435302734375",
            "timezone": "-5"
        },
        {
            "name": "Gerrard Smith Intl ",
            "city": "Cayman Brac",
            "country": "Cayman Islands",
            "IATA": "CYB",
            "ICAO": "MWCB",
            "lat": "19.687000274658203",
            "lon": "-79.88279724121094",
            "timezone": "-5"
        },
        {
            "name": "Owen Roberts Intl ",
            "city": "Georgetown",
            "country": "Cayman Islands",
            "IATA": "GCM",
            "ICAO": "MWCR",
            "lat": "19.292800903299998",
            "lon": "-81.3576965332",
            "timezone": "-5"
        },
        {
            "name": "Leonard M Thompson Intl ",
            "city": "Marsh Harbor",
            "country": "Bahamas",
            "IATA": "MHH",
            "ICAO": "MYAM",
            "lat": "26.5114",
            "lon": "-77.083503",
            "timezone": "-5"
        },
        {
            "name": "Exuma Intl ",
            "city": "Great Exuma",
            "country": "Bahamas",
            "IATA": "GGT",
            "ICAO": "MYEF",
            "lat": "23.5625991821",
            "lon": "-75.8779983521",
            "timezone": "-5"
        },
        {
            "name": "Grand Bahama Intl ",
            "city": "Freeport",
            "country": "Bahamas",
            "IATA": "FPO",
            "ICAO": "MYGF",
            "lat": "26.5587005615",
            "lon": "-78.695602417",
            "timezone": "-5"
        },
        {
            "name": "Lynden Pindling Intl ",
            "city": "Nassau",
            "country": "Bahamas",
            "IATA": "NAS",
            "ICAO": "MYNN",
            "lat": "25.0389995575",
            "lon": "-77.46620178219999",
            "timezone": "-5"
        },
        {
            "name": "Philip S. W. Goldson Intl ",
            "city": "Belize City",
            "country": "Belize",
            "IATA": "BZE",
            "ICAO": "MZBZ",
            "lat": "17.539100646972656",
            "lon": "-88.30819702148438",
            "timezone": "-6"
        },
        {
            "name": "Rarotonga Intl ",
            "city": "Avarua",
            "country": "Cook Islands",
            "IATA": "RAR",
            "ICAO": "NCRG",
            "lat": "-21.2026996613",
            "lon": "-159.805999756",
            "timezone": "-10"
        },
        {
            "name": "Nadi Intl ",
            "city": "Nandi",
            "country": "Fiji",
            "IATA": "NAN",
            "ICAO": "NFFN",
            "lat": "-17.755399703979492",
            "lon": "177.4429931640625",
            "timezone": "12"
        },
        {
            "name": "Nausori Intl ",
            "city": "Nausori",
            "country": "Fiji",
            "IATA": "SUV",
            "ICAO": "NFNA",
            "lat": "-18.04330062866211",
            "lon": "178.5590057373047",
            "timezone": "12"
        },
        {
            "name": "Fua'amotu Intl ",
            "city": "Tongatapu",
            "country": "Tonga",
            "IATA": "TBU",
            "ICAO": "NFTF",
            "lat": "-21.241199493408203",
            "lon": "-175.14999389648438",
            "timezone": "13"
        },
        {
            "name": "Vava'u Intl ",
            "city": "Vava'u",
            "country": "Tonga",
            "IATA": "VAV",
            "ICAO": "NFTV",
            "lat": "-18.58530044555664",
            "lon": "-173.96200561523438",
            "timezone": "13"
        },
        {
            "name": "Bonriki Intl ",
            "city": "Tarawa",
            "country": "Kiribati",
            "IATA": "TRW",
            "ICAO": "NGTA",
            "lat": "1.3816399574279785",
            "lon": "173.14700317382812",
            "timezone": "12"
        },
        {
            "name": "Faleolo Intl ",
            "city": "Faleolo",
            "country": "Samoa",
            "IATA": "APW",
            "ICAO": "NSFA",
            "lat": "-13.829999923706055",
            "lon": "-172.00799560546875",
            "timezone": "13"
        },
        {
            "name": "Pago Pago Intl ",
            "city": "Pago Pago",
            "country": "American Samoa",
            "IATA": "PPG",
            "ICAO": "NSTU",
            "lat": "-14.3310003281",
            "lon": "-170.710006714",
            "timezone": "-11"
        },
        {
            "name": "Bauerfield Intl ",
            "city": "Port-vila",
            "country": "Vanuatu",
            "IATA": "VLI",
            "ICAO": "NVVV",
            "lat": "-17.699300765991",
            "lon": "168.32000732422",
            "timezone": "11"
        },
        {
            "name": "La Tontouta Intl ",
            "city": "Noumea",
            "country": "New Caledonia",
            "IATA": "NOU",
            "ICAO": "NWWW",
            "lat": "-22.01460075378418",
            "lon": "166.21299743652344",
            "timezone": "11"
        },
        {
            "name": "Auckland Intl ",
            "city": "Auckland",
            "country": "New Zealand",
            "IATA": "AKL",
            "ICAO": "NZAA",
            "lat": "-37.008098602299995",
            "lon": "174.792007446",
            "timezone": "12"
        },
        {
            "name": "Christchurch Intl ",
            "city": "Christchurch",
            "country": "New Zealand",
            "IATA": "CHC",
            "ICAO": "NZCH",
            "lat": "-43.48939895629883",
            "lon": "172.53199768066406",
            "timezone": "12"
        },
        {
            "name": "Hamilton Intl ",
            "city": "Hamilton",
            "country": "New Zealand",
            "IATA": "HLZ",
            "ICAO": "NZHN",
            "lat": "-37.8666992188",
            "lon": "175.332000732",
            "timezone": "12"
        },
        {
            "name": "Queenstown Intl ",
            "city": "Queenstown International",
            "country": "New Zealand",
            "IATA": "ZQN",
            "ICAO": "NZQN",
            "lat": "-45.0210990906",
            "lon": "168.738998413",
            "timezone": "12"
        },
        {
            "name": "Wellington Intl ",
            "city": "Wellington",
            "country": "New Zealand",
            "IATA": "WLG",
            "ICAO": "NZWN",
            "lat": "-41.3272018433",
            "lon": "174.804992676",
            "timezone": "12"
        },
        {
            "name": "Hamid Karzai Intl ",
            "city": "Kabul",
            "country": "Afghanistan",
            "IATA": "KBL",
            "ICAO": "OAKB",
            "lat": "34.565899",
            "lon": "69.212303",
            "timezone": "4.5"
        },
        {
            "name": "Bahrain Intl ",
            "city": "Bahrain",
            "country": "Bahrain",
            "IATA": "BAH",
            "ICAO": "OBBI",
            "lat": "26.27079963684082",
            "lon": "50.63359832763672",
            "timezone": "3"
        },
        {
            "name": "King Fahd Intl ",
            "city": "Dammam",
            "country": "Saudi Arabia",
            "IATA": "DMM",
            "ICAO": "OEDF",
            "lat": "26.471200942993164",
            "lon": "49.79790115356445",
            "timezone": "3"
        },
        {
            "name": "King Abdulaziz Intl ",
            "city": "Jeddah",
            "country": "Saudi Arabia",
            "IATA": "JED",
            "ICAO": "OEJN",
            "lat": "21.6796",
            "lon": "39.156502",
            "timezone": "3"
        },
        {
            "name": "King Khaled Intl ",
            "city": "Riyadh",
            "country": "Saudi Arabia",
            "IATA": "RUH",
            "ICAO": "OERK",
            "lat": "24.957599639892578",
            "lon": "46.69879913330078",
            "timezone": "3"
        },
        {
            "name": "Kish Intl ",
            "city": "Kish Island",
            "country": "Iran",
            "IATA": "KIH",
            "ICAO": "OIBK",
            "lat": "26.5261993408",
            "lon": "53.980201721200004",
            "timezone": "3.5"
        },
        {
            "name": "Esfahan Shahid Beheshti Intl ",
            "city": "Esfahan",
            "country": "Iran",
            "IATA": "IFN",
            "ICAO": "OIFM",
            "lat": "32.75080108642578",
            "lon": "51.86130142211914",
            "timezone": "3.5"
        },
        {
            "name": "Mehrabad Intl ",
            "city": "Teheran",
            "country": "Iran",
            "IATA": "THR",
            "ICAO": "OIII",
            "lat": "35.68920135498047",
            "lon": "51.31340026855469",
            "timezone": "3.5"
        },
        {
            "name": "Bandar Abbas Intl ",
            "city": "Bandar Abbas",
            "country": "Iran",
            "IATA": "BND",
            "ICAO": "OIKB",
            "lat": "27.218299865722656",
            "lon": "56.37779998779297",
            "timezone": "3.5"
        },
        {
            "name": "Shiraz Shahid Dastghaib Intl ",
            "city": "Shiraz",
            "country": "Iran",
            "IATA": "SYZ",
            "ICAO": "OISS",
            "lat": "29.539199829101562",
            "lon": "52.58980178833008",
            "timezone": "3.5"
        },
        {
            "name": "Tabriz Intl ",
            "city": "Tabriz",
            "country": "Iran",
            "IATA": "TBZ",
            "ICAO": "OITT",
            "lat": "38.1338996887207",
            "lon": "46.23500061035156",
            "timezone": "3.5"
        },
        {
            "name": "Zahedan Intl ",
            "city": "Zahedan",
            "country": "Iran",
            "IATA": "ZAH",
            "ICAO": "OIZH",
            "lat": "29.47570037841797",
            "lon": "60.90620040893555",
            "timezone": "3.5"
        },
        {
            "name": "Queen Alia Intl ",
            "city": "Amman",
            "country": "Jordan",
            "IATA": "AMM",
            "ICAO": "OJAI",
            "lat": "31.7226009369",
            "lon": "35.9931983948",
            "timezone": "2"
        },
        {
            "name": "Amman-Marka Intl ",
            "city": "Amman",
            "country": "Jordan",
            "IATA": "ADJ",
            "ICAO": "OJAM",
            "lat": "31.972700119018555",
            "lon": "35.991600036621094",
            "timezone": "2"
        },
        {
            "name": "Aqaba King Hussein Intl ",
            "city": "Aqaba",
            "country": "Jordan",
            "IATA": "AQJ",
            "ICAO": "OJAQ",
            "lat": "29.611600875854492",
            "lon": "35.01810073852539",
            "timezone": "2"
        },
        {
            "name": "Kuwait Intl ",
            "city": "Kuwait",
            "country": "Kuwait",
            "IATA": "KWI",
            "ICAO": "OKBK",
            "lat": "29.226600646972656",
            "lon": "47.96889877319336",
            "timezone": "3"
        },
        {
            "name": "Beirut Rafic Hariri Intl ",
            "city": "Beirut",
            "country": "Lebanon",
            "IATA": "BEY",
            "ICAO": "OLBA",
            "lat": "33.820899963378906",
            "lon": "35.488399505615234",
            "timezone": "2"
        },
        {
            "name": "Abu Dhabi Intl ",
            "city": "Abu Dhabi",
            "country": "United Arab Emirates",
            "IATA": "AUH",
            "ICAO": "OMAA",
            "lat": "24.433000564575195",
            "lon": "54.651100158691406",
            "timezone": "4"
        },
        {
            "name": "Dubai Intl ",
            "city": "Dubai",
            "country": "United Arab Emirates",
            "IATA": "DXB",
            "ICAO": "OMDB",
            "lat": "25.2527999878",
            "lon": "55.3643989563",
            "timezone": "4"
        },
        {
            "name": "Fujairah Intl ",
            "city": "Fujeirah",
            "country": "United Arab Emirates",
            "IATA": "FJR",
            "ICAO": "OMFJ",
            "lat": "25.112199783325195",
            "lon": "56.32400131225586",
            "timezone": "4"
        },
        {
            "name": "Ras Al Khaimah Intl ",
            "city": "Ras Al Khaimah",
            "country": "United Arab Emirates",
            "IATA": "RKT",
            "ICAO": "OMRK",
            "lat": "25.613500595092773",
            "lon": "55.93880081176758",
            "timezone": "4"
        },
        {
            "name": "Sharjah Intl ",
            "city": "Sharjah",
            "country": "United Arab Emirates",
            "IATA": "SHJ",
            "ICAO": "OMSJ",
            "lat": "25.32859992980957",
            "lon": "55.5172004699707",
            "timezone": "4"
        },
        {
            "name": "Muscat Intl ",
            "city": "Muscat",
            "country": "Oman",
            "IATA": "MCT",
            "ICAO": "OOMS",
            "lat": "23.593299865722656",
            "lon": "58.284400939941406",
            "timezone": "4"
        },
        {
            "name": "Faisalabad Intl ",
            "city": "Faisalabad",
            "country": "Pakistan",
            "IATA": "LYP",
            "ICAO": "OPFA",
            "lat": "31.364999771118164",
            "lon": "72.99479675292969",
            "timezone": "5"
        },
        {
            "name": "Gwadar Intl ",
            "city": "Gwadar",
            "country": "Pakistan",
            "IATA": "GWD",
            "ICAO": "OPGD",
            "lat": "25.233299255371094",
            "lon": "62.329498291015625",
            "timezone": "5"
        },
        {
            "name": "Jinnah Intl ",
            "city": "Karachi",
            "country": "Pakistan",
            "IATA": "KHI",
            "ICAO": "OPKC",
            "lat": "24.9065",
            "lon": "67.160797",
            "timezone": "5"
        },
        {
            "name": "Alama Iqbal Intl ",
            "city": "Lahore",
            "country": "Pakistan",
            "IATA": "LHE",
            "ICAO": "OPLA",
            "lat": "31.5216007232666",
            "lon": "74.40360260009766",
            "timezone": "5"
        },
        {
            "name": "Multan Intl ",
            "city": "Multan",
            "country": "Pakistan",
            "IATA": "MUX",
            "ICAO": "OPMT",
            "lat": "30.20319938659668",
            "lon": "71.41909790039062",
            "timezone": "5"
        },
        {
            "name": "Peshawar Intl ",
            "city": "Peshawar",
            "country": "Pakistan",
            "IATA": "PEW",
            "ICAO": "OPPS",
            "lat": "33.993900299072266",
            "lon": "71.51460266113281",
            "timezone": "5"
        },
        {
            "name": "Quetta Intl ",
            "city": "Quetta",
            "country": "Pakistan",
            "IATA": "UET",
            "ICAO": "OPQT",
            "lat": "30.251399993896484",
            "lon": "66.93779754638672",
            "timezone": "5"
        },
        {
            "name": "Benazir Bhutto Intl ",
            "city": "Islamabad",
            "country": "Pakistan",
            "IATA": "\\N",
            "ICAO": "OPRN",
            "lat": "33.616699",
            "lon": "73.099197",
            "timezone": "5"
        },
        {
            "name": "Basrah Intl ",
            "city": "Basrah",
            "country": "Iraq",
            "IATA": "BSR",
            "ICAO": "ORMM",
            "lat": "30.549100875854492",
            "lon": "47.66210174560547",
            "timezone": "3"
        },
        {
            "name": "Aleppo Intl ",
            "city": "Aleppo",
            "country": "Syria",
            "IATA": "ALP",
            "ICAO": "OSAP",
            "lat": "36.18069839477539",
            "lon": "37.22439956665039",
            "timezone": "2"
        },
        {
            "name": "Damascus Intl ",
            "city": "Damascus",
            "country": "Syria",
            "IATA": "DAM",
            "ICAO": "OSDI",
            "lat": "33.4114990234375",
            "lon": "36.51559829711914",
            "timezone": "2"
        },
        {
            "name": "Bassel Al-Assad Intl ",
            "city": "Latakia",
            "country": "Syria",
            "IATA": "LTK",
            "ICAO": "OSLK",
            "lat": "35.401100158691406",
            "lon": "35.948699951171875",
            "timezone": "2"
        },
        {
            "name": "Doha Intl ",
            "city": "Doha",
            "country": "Qatar",
            "IATA": "DIA",
            "ICAO": "OTBD",
            "lat": "25.261101",
            "lon": "51.565102",
            "timezone": "3"
        },
        {
            "name": "Rota Intl ",
            "city": "Rota",
            "country": "Northern Mariana Islands",
            "IATA": "ROP",
            "ICAO": "PGRO",
            "lat": "14.174300193786621",
            "lon": "145.2429962158203",
            "timezone": "10"
        },
        {
            "name": "Saipan Intl ",
            "city": "Saipan",
            "country": "Northern Mariana Islands",
            "IATA": "SPN",
            "ICAO": "PGSN",
            "lat": "15.119",
            "lon": "145.729004",
            "timezone": "10"
        },
        {
            "name": "Antonio B. Won Pat Intl ",
            "city": "Agana",
            "country": "Guam",
            "IATA": "GUM",
            "ICAO": "PGUM",
            "lat": "13.4834003448",
            "lon": "144.796005249",
            "timezone": "10"
        },
        {
            "name": "Tinian Intl ",
            "city": "West Tinian",
            "country": "Northern Mariana Islands",
            "IATA": "TIQ",
            "ICAO": "PGWT",
            "lat": "14.999199867248535",
            "lon": "145.61900329589844",
            "timezone": "10"
        },
        {
            "name": "Marshall Islands Intl ",
            "city": "Majuro",
            "country": "Marshall Islands",
            "IATA": "MAJ",
            "ICAO": "PKMJ",
            "lat": "7.064760208129883",
            "lon": "171.27200317382812",
            "timezone": "12"
        },
        {
            "name": "Cassidy Intl ",
            "city": "Kiritimati",
            "country": "Kiribati",
            "IATA": "CXI",
            "ICAO": "PLCH",
            "lat": "1.9861600399017334",
            "lon": "-157.35000610351562",
            "timezone": "-12"
        },
        {
            "name": "Chuuk Intl ",
            "city": "Chuuk",
            "country": "Micronesia",
            "IATA": "TKK",
            "ICAO": "PTKK",
            "lat": "7.461870193481445",
            "lon": "151.84300231933594",
            "timezone": "10"
        },
        {
            "name": "Pohnpei Intl ",
            "city": "Pohnpei",
            "country": "Micronesia",
            "IATA": "PNI",
            "ICAO": "PTPN",
            "lat": "6.985099792480469",
            "lon": "158.20899963378906",
            "timezone": "11"
        },
        {
            "name": "Kosrae Intl ",
            "city": "Kosrae",
            "country": "Micronesia",
            "IATA": "KSA",
            "ICAO": "PTSA",
            "lat": "5.35698",
            "lon": "162.957993",
            "timezone": "11"
        },
        {
            "name": "Yap Intl ",
            "city": "Yap",
            "country": "Micronesia",
            "IATA": "YAP",
            "ICAO": "PTYA",
            "lat": "9.49891",
            "lon": "138.082993",
            "timezone": "10"
        },
        {
            "name": "Kaohsiung Intl ",
            "city": "Kaohsiung",
            "country": "Taiwan",
            "IATA": "KHH",
            "ICAO": "RCKH",
            "lat": "22.57710075378418",
            "lon": "120.3499984741211",
            "timezone": "8"
        },
        {
            "name": "Taiwan Taoyuan Intl ",
            "city": "Taipei",
            "country": "Taiwan",
            "IATA": "TPE",
            "ICAO": "RCTP",
            "lat": "25.0777",
            "lon": "121.233002",
            "timezone": "8"
        },
        {
            "name": "Narita Intl ",
            "city": "Tokyo",
            "country": "Japan",
            "IATA": "NRT",
            "ICAO": "RJAA",
            "lat": "35.7647018433",
            "lon": "140.386001587",
            "timezone": "9"
        },
        {
            "name": "Osaka Intl ",
            "city": "Osaka",
            "country": "Japan",
            "IATA": "ITM",
            "ICAO": "RJOO",
            "lat": "34.785499572753906",
            "lon": "135.43800354003906",
            "timezone": "9"
        },
        {
            "name": "Tokyo Haneda Intl ",
            "city": "Tokyo",
            "country": "Japan",
            "IATA": "HND",
            "ICAO": "RJTT",
            "lat": "35.552299",
            "lon": "139.779999",
            "timezone": "9"
        },
        {
            "name": "Jeju Intl ",
            "city": "Cheju",
            "country": "South Korea",
            "IATA": "CJU",
            "ICAO": "RKPC",
            "lat": "33.51129913330078",
            "lon": "126.49299621582031",
            "timezone": "9"
        },
        {
            "name": "Gimhae Intl ",
            "city": "Busan",
            "country": "South Korea",
            "IATA": "PUS",
            "ICAO": "RKPK",
            "lat": "35.1795005798",
            "lon": "128.93800354",
            "timezone": "9"
        },
        {
            "name": "Gimpo Intl ",
            "city": "Seoul",
            "country": "South Korea",
            "IATA": "GMP",
            "ICAO": "RKSS",
            "lat": "37.5583",
            "lon": "126.791",
            "timezone": "9"
        },
        {
            "name": "Ninoy Aquino Intl ",
            "city": "Manila",
            "country": "Philippines",
            "IATA": "MNL",
            "ICAO": "RPLL",
            "lat": "14.5086",
            "lon": "121.019997",
            "timezone": "8"
        },
        {
            "name": "General Santos Intl ",
            "city": "Romblon",
            "country": "Philippines",
            "IATA": "GES",
            "ICAO": "RPMR",
            "lat": "6.05800008774",
            "lon": "125.096000671",
            "timezone": "8"
        },
        {
            "name": "Zamboanga Intl ",
            "city": "Zamboanga",
            "country": "Philippines",
            "IATA": "ZAM",
            "ICAO": "RPMZ",
            "lat": "6.922420024871826",
            "lon": "122.05999755859375",
            "timezone": "8"
        },
        {
            "name": "Iloilo Intl ",
            "city": "Iloilo",
            "country": "Philippines",
            "IATA": "ILO",
            "ICAO": "RPVI",
            "lat": "10.833017",
            "lon": "122.493358",
            "timezone": "8"
        },
        {
            "name": "Kalibo Intl ",
            "city": "Kalibo",
            "country": "Philippines",
            "IATA": "KLO",
            "ICAO": "RPVK",
            "lat": "11.679400444",
            "lon": "122.375999451",
            "timezone": "8"
        },
        {
            "name": "Resistencia Intl ",
            "city": "Resistencia",
            "country": "Argentina",
            "IATA": "RES",
            "ICAO": "SARE",
            "lat": "-27.45",
            "lon": "-59.0561",
            "timezone": "-3"
        },
        {
            "name": "Cataratas Del Iguazú Intl ",
            "city": "Iguazu Falls",
            "country": "Argentina",
            "IATA": "IGR",
            "ICAO": "SARI",
            "lat": "-25.737301",
            "lon": "-54.4734",
            "timezone": "-3"
        },
        {
            "name": "Martin Miguel De Guemes Intl ",
            "city": "Salta",
            "country": "Argentina",
            "IATA": "SLA",
            "ICAO": "SASA",
            "lat": "-24.856000900299996",
            "lon": "-65.4861984253",
            "timezone": "-3"
        },
        {
            "name": "Gobernador Horacio Guzman Intl ",
            "city": "Jujuy",
            "country": "Argentina",
            "IATA": "JUJ",
            "ICAO": "SASJ",
            "lat": "-24.392799",
            "lon": "-65.097801",
            "timezone": "-3"
        },
        {
            "name": "Hermes Quijada Intl ",
            "city": "Rio Grande",
            "country": "Argentina",
            "IATA": "RGA",
            "ICAO": "SAWE",
            "lat": "-53.7777",
            "lon": "-67.7494",
            "timezone": "-3"
        },
        {
            "name": "Ástor Piazzola Intl ",
            "city": "Mar Del Plata",
            "country": "Argentina",
            "IATA": "MDQ",
            "ICAO": "SAZM",
            "lat": "-37.9342",
            "lon": "-57.5733",
            "timezone": "-3"
        },
        {
            "name": "Val de Cans/Júlio Cezar Ribeiro Intl ",
            "city": "Belem",
            "country": "Brazil",
            "IATA": "BEL",
            "ICAO": "SBBE",
            "lat": "-1.3792500495900002",
            "lon": "-48.4762992859",
            "timezone": "-3"
        },
        {
            "name": "Presidente Juscelino Kubistschek Intl ",
            "city": "Brasilia",
            "country": "Brazil",
            "IATA": "BSB",
            "ICAO": "SBBR",
            "lat": "-15.86916732788086",
            "lon": "-47.920833587646484",
            "timezone": "-3"
        },
        {
            "name": "Tancredo Neves Intl ",
            "city": "Belo Horizonte",
            "country": "Brazil",
            "IATA": "CNF",
            "ICAO": "SBCF",
            "lat": "-19.62444305419922",
            "lon": "-43.97194290161133",
            "timezone": "-3"
        },
        {
            "name": "Corumbá Intl ",
            "city": "Corumba",
            "country": "Brazil",
            "IATA": "CMG",
            "ICAO": "SBCR",
            "lat": "-19.0119438171",
            "lon": "-57.6713905334",
            "timezone": "-4"
        },
        {
            "name": "Eduardo Gomes Intl ",
            "city": "Manaus",
            "country": "Brazil",
            "IATA": "MAO",
            "ICAO": "SBEG",
            "lat": "-3.0386099815368652",
            "lon": "-60.04970169067383",
            "timezone": "-4"
        },
        {
            "name": "Cataratas Intl ",
            "city": "Foz Do Iguacu",
            "country": "Brazil",
            "IATA": "IGU",
            "ICAO": "SBFI",
            "lat": "-25.600278854370117",
            "lon": "-54.48500061035156",
            "timezone": "-3"
        },
        {
            "name": "Hercílio Luz Intl ",
            "city": "Florianopolis",
            "country": "Brazil",
            "IATA": "FLN",
            "ICAO": "SBFL",
            "lat": "-27.670278549194336",
            "lon": "-48.5525016784668",
            "timezone": "-3"
        },
        {
            "name": "Pinto Martins Intl ",
            "city": "Fortaleza",
            "country": "Brazil",
            "IATA": "FOR",
            "ICAO": "SBFZ",
            "lat": "-3.776279926300049",
            "lon": "-38.53260040283203",
            "timezone": "-3"
        },
        {
            "name": "Rio Galeão – Tom Jobim Intl ",
            "city": "Rio De Janeiro",
            "country": "Brazil",
            "IATA": "GIG",
            "ICAO": "SBGL",
            "lat": "-22.8099994659",
            "lon": "-43.2505569458",
            "timezone": "-3"
        },
        {
            "name": "Guarulhos - Governador André Franco Montoro Intl ",
            "city": "Sao Paulo",
            "country": "Brazil",
            "IATA": "GRU",
            "ICAO": "SBGR",
            "lat": "-23.435556411743164",
            "lon": "-46.47305679321289",
            "timezone": "-3"
        },
        {
            "name": "Presidente Castro Pinto Intl ",
            "city": "Joao Pessoa",
            "country": "Brazil",
            "IATA": "JPA",
            "ICAO": "SBJP",
            "lat": "-7.145833015440001",
            "lon": "-34.9486122131",
            "timezone": "-3"
        },
        {
            "name": "Viracopos Intl ",
            "city": "Campinas",
            "country": "Brazil",
            "IATA": "VCP",
            "ICAO": "SBKP",
            "lat": "-23.0074005127",
            "lon": "-47.1344985962",
            "timezone": "-3"
        },
        {
            "name": "Ministro Victor Konder Intl ",
            "city": "Navegantes",
            "country": "Brazil",
            "IATA": "NVT",
            "ICAO": "SBNF",
            "lat": "-26.879999",
            "lon": "-48.651402",
            "timezone": "-3"
        },
        {
            "name": "Governador Aluízio Alves Intl ",
            "city": "Natal",
            "country": "Brazil",
            "IATA": "NAT",
            "ICAO": "SBSG",
            "lat": "-5.768056",
            "lon": "-35.376111",
            "timezone": "-3"
        },
        {
            "name": "João Simões Lopes Neto Intl ",
            "city": "Pelotas",
            "country": "Brazil",
            "IATA": "PET",
            "ICAO": "SBPK",
            "lat": "-31.718399",
            "lon": "-52.327702",
            "timezone": "-3"
        },
        {
            "name": "Guararapes - Gilberto Freyre Intl ",
            "city": "Recife",
            "country": "Brazil",
            "IATA": "REC",
            "ICAO": "SBRF",
            "lat": "-8.126489639282227",
            "lon": "-34.92359924316406",
            "timezone": "-3"
        },
        {
            "name": "Marechal Cunha Machado Intl ",
            "city": "Sao Luis",
            "country": "Brazil",
            "IATA": "SLZ",
            "ICAO": "SBSL",
            "lat": "-2.585360050201416",
            "lon": "-44.234100341796875",
            "timezone": "-3"
        },
        {
            "name": "Deputado Luiz Eduardo Magalhães Intl ",
            "city": "Salvador",
            "country": "Brazil",
            "IATA": "SSA",
            "ICAO": "SBSV",
            "lat": "-12.9086112976",
            "lon": "-38.3224983215",
            "timezone": "-3"
        },
        {
            "name": "Comodoro Arturo Merino Benítez Intl ",
            "city": "Santiago",
            "country": "Chile",
            "IATA": "SCL",
            "ICAO": "SCEL",
            "lat": "-33.393001556396484",
            "lon": "-70.78579711914062",
            "timezone": "-4"
        },
        {
            "name": "Andrés Sabella Gálvez Intl ",
            "city": "Antofagasta",
            "country": "Chile",
            "IATA": "ANF",
            "ICAO": "SCFA",
            "lat": "-23.444501",
            "lon": "-70.445099",
            "timezone": "-4"
        },
        {
            "name": "José Joaquín de Olmedo Intl ",
            "city": "Guayaquil",
            "country": "Ecuador",
            "IATA": "GYE",
            "ICAO": "SEGU",
            "lat": "-2.1574199199699997",
            "lon": "-79.88359832760001",
            "timezone": "-5"
        },
        {
            "name": "Cotopaxi Intl ",
            "city": "Latacunga",
            "country": "Ecuador",
            "IATA": "LTX",
            "ICAO": "SELT",
            "lat": "-0.906833",
            "lon": "-78.615799",
            "timezone": "-5"
        },
        {
            "name": "Eloy Alfaro Intl ",
            "city": "Manta",
            "country": "Ecuador",
            "IATA": "MEC",
            "ICAO": "SEMT",
            "lat": "-0.9460780024528503",
            "lon": "-80.67880249023438",
            "timezone": "-5"
        },
        {
            "name": "Mariscal Sucre Intl ",
            "city": "Quito",
            "country": "Ecuador",
            "IATA": "UIO",
            "ICAO": "SEQM",
            "lat": "-0.129166666667",
            "lon": "-78.3575",
            "timezone": "-5"
        },
        {
            "name": "Santa Rosa Intl ",
            "city": "Santa Rosa",
            "country": "Ecuador",
            "IATA": "ETR",
            "ICAO": "SERO",
            "lat": "-3.441986",
            "lon": "-79.996957",
            "timezone": "-5"
        },
        {
            "name": "Silvio Pettirossi Intl ",
            "city": "Asuncion",
            "country": "Paraguay",
            "IATA": "ASU",
            "ICAO": "SGAS",
            "lat": "-25.239999771118164",
            "lon": "-57.52000045776367",
            "timezone": "-4"
        },
        {
            "name": "Dr. Luis Maria Argaña Intl ",
            "city": "Mariscal Estigarribia",
            "country": "Paraguay",
            "IATA": "ESG",
            "ICAO": "SGME",
            "lat": "-22.049999237060547",
            "lon": "-60.619998931884766",
            "timezone": "-4"
        },
        {
            "name": "El Dorado Intl ",
            "city": "Bogota",
            "country": "Colombia",
            "IATA": "BOG",
            "ICAO": "SKBO",
            "lat": "4.70159",
            "lon": "-74.1469",
            "timezone": "-5"
        },
        {
            "name": "Ernesto Cortissoz Intl ",
            "city": "Barranquilla",
            "country": "Colombia",
            "IATA": "BAQ",
            "ICAO": "SKBQ",
            "lat": "10.8896",
            "lon": "-74.7808",
            "timezone": "-5"
        },
        {
            "name": "Camilo Daza Intl ",
            "city": "Cucuta",
            "country": "Colombia",
            "IATA": "CUC",
            "ICAO": "SKCC",
            "lat": "7.92757",
            "lon": "-72.5115",
            "timezone": "-5"
        },
        {
            "name": "Rafael Nuñez Intl ",
            "city": "Cartagena",
            "country": "Colombia",
            "IATA": "CTG",
            "ICAO": "SKCG",
            "lat": "10.4424",
            "lon": "-75.513",
            "timezone": "-5"
        },
        {
            "name": "Alfonso Bonilla Aragon Intl ",
            "city": "Cali",
            "country": "Colombia",
            "IATA": "CLO",
            "ICAO": "SKCL",
            "lat": "3.54322",
            "lon": "-76.3816",
            "timezone": "-5"
        },
        {
            "name": "Alfredo Vásquez Cobo Intl ",
            "city": "Leticia",
            "country": "Colombia",
            "IATA": "LET",
            "ICAO": "SKLT",
            "lat": "-4.19355",
            "lon": "-69.9432",
            "timezone": "-5"
        },
        {
            "name": "Matecaña Intl ",
            "city": "Pereira",
            "country": "Colombia",
            "IATA": "PEI",
            "ICAO": "SKPE",
            "lat": "4.81267",
            "lon": "-75.7395",
            "timezone": "-5"
        },
        {
            "name": "Jose Maria Córdova Intl ",
            "city": "Rio Negro",
            "country": "Colombia",
            "IATA": "MDE",
            "ICAO": "SKRG",
            "lat": "6.16454",
            "lon": "-75.4231",
            "timezone": "-5"
        },
        {
            "name": "Simón Bolívar Intl ",
            "city": "Santa Marta",
            "country": "Colombia",
            "IATA": "SMR",
            "ICAO": "SKSM",
            "lat": "11.1196",
            "lon": "-74.2306",
            "timezone": "-5"
        },
        {
            "name": "Gustavo Rojas Pinilla Intl ",
            "city": "San Andres Island",
            "country": "Colombia",
            "IATA": "ADZ",
            "ICAO": "SKSP",
            "lat": "12.5836",
            "lon": "-81.7112",
            "timezone": "-5"
        },
        {
            "name": "Jorge Wilsterman Intl ",
            "city": "Cochabamba",
            "country": "Bolivia",
            "IATA": "CBB",
            "ICAO": "SLCB",
            "lat": "-17.421100616455078",
            "lon": "-66.1771011352539",
            "timezone": "-4"
        },
        {
            "name": "El Alto Intl ",
            "city": "La Paz",
            "country": "Bolivia",
            "IATA": "LPB",
            "ICAO": "SLLP",
            "lat": "-16.5132999420166",
            "lon": "-68.19229888916016",
            "timezone": "-4"
        },
        {
            "name": "Viru Viru Intl ",
            "city": "Santa Cruz",
            "country": "Bolivia",
            "IATA": "VVI",
            "ICAO": "SLVR",
            "lat": "-17.6448",
            "lon": "-63.135399",
            "timezone": "-4"
        },
        {
            "name": "Johan Adolf Pengel Intl ",
            "city": "Zandery",
            "country": "Suriname",
            "IATA": "PBM",
            "ICAO": "SMJP",
            "lat": "5.4528298377999995",
            "lon": "-55.1878013611",
            "timezone": "-3"
        },
        {
            "name": "Cap FAP David Abenzur Rengifo Intl ",
            "city": "Pucallpa",
            "country": "Peru",
            "IATA": "PCL",
            "ICAO": "SPCL",
            "lat": "-8.37794017791748",
            "lon": "-74.57430267333984",
            "timezone": "-5"
        },
        {
            "name": "Capitan FAP Jose A Quinones Gonzales Intl ",
            "city": "Chiclayo",
            "country": "Peru",
            "IATA": "CIX",
            "ICAO": "SPHI",
            "lat": "-6.787479877471924",
            "lon": "-79.8281021118164",
            "timezone": "-5"
        },
        {
            "name": "Jorge Chávez Intl ",
            "city": "Lima",
            "country": "Peru",
            "IATA": "LIM",
            "ICAO": "SPIM",
            "lat": "-12.0219",
            "lon": "-77.114305",
            "timezone": "-5"
        },
        {
            "name": "Inca Manco Capac Intl ",
            "city": "Juliaca",
            "country": "Peru",
            "IATA": "JUL",
            "ICAO": "SPJL",
            "lat": "-15.467100143432617",
            "lon": "-70.158203125",
            "timezone": "-5"
        },
        {
            "name": "Coronel FAP Francisco Secada Vignetta Intl ",
            "city": "Iquitos",
            "country": "Peru",
            "IATA": "IQT",
            "ICAO": "SPQT",
            "lat": "-3.7847399711608887",
            "lon": "-73.30879974365234",
            "timezone": "-5"
        },
        {
            "name": "Rodríguez Ballón Intl ",
            "city": "Arequipa",
            "country": "Peru",
            "IATA": "AQP",
            "ICAO": "SPQU",
            "lat": "-16.3411006927",
            "lon": "-71.5830993652",
            "timezone": "-5"
        },
        {
            "name": "Capitan FAP Carlos Martinez De Pinillos Intl ",
            "city": "Trujillo",
            "country": "Peru",
            "IATA": "TRU",
            "ICAO": "SPRU",
            "lat": "-8.08141040802002",
            "lon": "-79.10880279541016",
            "timezone": "-5"
        },
        {
            "name": "Capitán FAP Renán Elías Olivera Intl ",
            "city": "Pisco",
            "country": "Peru",
            "IATA": "PIO",
            "ICAO": "SPSO",
            "lat": "-13.74489974975586",
            "lon": "-76.22029876708984",
            "timezone": "-5"
        },
        {
            "name": "Coronel FAP Carlos Ciriani Santa Rosa Intl ",
            "city": "Tacna",
            "country": "Peru",
            "IATA": "TCQ",
            "ICAO": "SPTN",
            "lat": "-18.053300857500002",
            "lon": "-70.2758026123",
            "timezone": "-5"
        },
        {
            "name": "Padre Aldamiz Intl ",
            "city": "Puerto Maldonado",
            "country": "Peru",
            "IATA": "PEM",
            "ICAO": "SPTU",
            "lat": "-12.6135997772",
            "lon": "-69.2285995483",
            "timezone": "-5"
        },
        {
            "name": "Capitán FAP Guillermo Concha Iberico Intl ",
            "city": "Piura",
            "country": "Peru",
            "IATA": "PIU",
            "ICAO": "SPUR",
            "lat": "-5.20574998856",
            "lon": "-80.61640167239999",
            "timezone": "-5"
        },
        {
            "name": "Alejandro Velasco Astete Intl ",
            "city": "Cuzco",
            "country": "Peru",
            "IATA": "CUZ",
            "ICAO": "SPZO",
            "lat": "-13.535699844400002",
            "lon": "-71.9387969971",
            "timezone": "-5"
        },
        {
            "name": "Santa Bernardina Intl ",
            "city": "Durazno",
            "country": "Uruguay",
            "IATA": "DZO",
            "ICAO": "SUDU",
            "lat": "-33.3588981628418",
            "lon": "-56.49919891357422",
            "timezone": "-3"
        },
        {
            "name": "Carrasco Intl /General C L Berisso ",
            "city": "Montevideo",
            "country": "Uruguay",
            "IATA": "MVD",
            "ICAO": "SUMU",
            "lat": "-34.838402",
            "lon": "-56.0308",
            "timezone": "-3"
        },
        {
            "name": "Nueva Hesperides Intl ",
            "city": "Salto",
            "country": "Uruguay",
            "IATA": "STY",
            "ICAO": "SUSO",
            "lat": "-31.438499450683594",
            "lon": "-57.98529815673828",
            "timezone": "-3"
        },
        {
            "name": "General José Antonio Anzoategui Intl ",
            "city": "Barcelona",
            "country": "Venezuela",
            "IATA": "BLA",
            "ICAO": "SVBC",
            "lat": "10.111111",
            "lon": "-64.692222",
            "timezone": "-4"
        },
        {
            "name": "Barquisimeto Intl ",
            "city": "Barquisimeto",
            "country": "Venezuela",
            "IATA": "BRM",
            "ICAO": "SVBM",
            "lat": "10.042746543884277",
            "lon": "-69.3586196899414",
            "timezone": "-4"
        },
        {
            "name": "Josefa Camejo Intl ",
            "city": "Paraguana",
            "country": "Venezuela",
            "IATA": "LSP",
            "ICAO": "SVJC",
            "lat": "11.78077507019043",
            "lon": "-70.15149688720703",
            "timezone": "-4"
        },
        {
            "name": "La Chinita Intl ",
            "city": "Maracaibo",
            "country": "Venezuela",
            "IATA": "MAR",
            "ICAO": "SVMC",
            "lat": "10.5582084656",
            "lon": "-71.7278594971",
            "timezone": "-4"
        },
        {
            "name": "Del Caribe Santiago Mariño Intl ",
            "city": "Porlamar",
            "country": "Venezuela",
            "IATA": "PMV",
            "ICAO": "SVMG",
            "lat": "10.912603378295898",
            "lon": "-63.96659851074219",
            "timezone": "-4"
        },
        {
            "name": "Simón Bolívar Intl ",
            "city": "Caracas",
            "country": "Venezuela",
            "IATA": "CCS",
            "ICAO": "SVMI",
            "lat": "10.601194",
            "lon": "-66.991222",
            "timezone": "-4"
        },
        {
            "name": "General Bartolome Salom Intl ",
            "city": "Puerto Cabello",
            "country": "Venezuela",
            "IATA": "PBL",
            "ICAO": "SVPC",
            "lat": "10.480500221252441",
            "lon": "-68.072998046875",
            "timezone": "-4"
        },
        {
            "name": "General Manuel Carlos Piar Intl ",
            "city": "Guayana",
            "country": "Venezuela",
            "IATA": "PZO",
            "ICAO": "SVPR",
            "lat": "8.288530349731445",
            "lon": "-62.760398864746094",
            "timezone": "-4"
        },
        {
            "name": "Mayor Buenaventura Vivas Intl ",
            "city": "Santo Domingo",
            "country": "Venezuela",
            "IATA": "STD",
            "ICAO": "SVSO",
            "lat": "7.56538",
            "lon": "-72.035103",
            "timezone": "-4"
        },
        {
            "name": "Arturo Michelena Intl ",
            "city": "Valencia",
            "country": "Venezuela",
            "IATA": "VLN",
            "ICAO": "SVVA",
            "lat": "10.14973258972168",
            "lon": "-67.92839813232422",
            "timezone": "-4"
        },
        {
            "name": "V.C. Bird Intl ",
            "city": "Antigua",
            "country": "Antigua and Barbuda",
            "IATA": "ANU",
            "ICAO": "TAPA",
            "lat": "17.1367",
            "lon": "-61.792702",
            "timezone": "-4"
        },
        {
            "name": "Sir Grantley Adams Intl ",
            "city": "Bridgetown",
            "country": "Barbados",
            "IATA": "BGI",
            "ICAO": "TBPB",
            "lat": "13.0746002197",
            "lon": "-59.4925003052",
            "timezone": "-4"
        },
        {
            "name": "Martinique Aimé Césaire Intl ",
            "city": "Fort-de-france",
            "country": "Martinique",
            "IATA": "FDF",
            "ICAO": "TFFF",
            "lat": "14.590999603271484",
            "lon": "-61.00320053100586",
            "timezone": "-4"
        },
        {
            "name": "Point Salines Intl ",
            "city": "Point Salines",
            "country": "Grenada",
            "IATA": "GND",
            "ICAO": "TGPY",
            "lat": "12.004199981689453",
            "lon": "-61.78620147705078",
            "timezone": "-4"
        },
        {
            "name": "Luis Munoz Marin Intl ",
            "city": "San Juan",
            "country": "Puerto Rico",
            "IATA": "SJU",
            "ICAO": "TJSJ",
            "lat": "18.4393997192",
            "lon": "-66.0018005371",
            "timezone": "-4"
        },
        {
            "name": "Robert L. Bradshaw Intl ",
            "city": "Basse Terre",
            "country": "Saint Kitts and Nevis",
            "IATA": "SKB",
            "ICAO": "TKPK",
            "lat": "17.311199188232422",
            "lon": "-62.71870040893555",
            "timezone": "-4"
        },
        {
            "name": "Hewanorra Intl ",
            "city": "Hewandorra",
            "country": "Saint Lucia",
            "IATA": "UVF",
            "ICAO": "TLPL",
            "lat": "13.7332",
            "lon": "-60.952599",
            "timezone": "-4"
        },
        {
            "name": "Queen Beatrix Intl ",
            "city": "Oranjestad",
            "country": "Aruba",
            "IATA": "AUA",
            "ICAO": "TNCA",
            "lat": "12.5014",
            "lon": "-70.015198",
            "timezone": "-4"
        },
        {
            "name": "Flamingo Intl ",
            "city": "Kralendijk",
            "country": "Netherlands Antilles",
            "IATA": "BON",
            "ICAO": "TNCB",
            "lat": "12.130999565124512",
            "lon": "-68.26850128173828",
            "timezone": "-4"
        },
        {
            "name": "Hato Intl ",
            "city": "Willemstad",
            "country": "Netherlands Antilles",
            "IATA": "CUR",
            "ICAO": "TNCC",
            "lat": "12.1889",
            "lon": "-68.959801",
            "timezone": "-4"
        },
        {
            "name": "Princess Juliana Intl ",
            "city": "Philipsburg",
            "country": "Netherlands Antilles",
            "IATA": "SXM",
            "ICAO": "TNCM",
            "lat": "18.041000366200002",
            "lon": "-63.1088981628",
            "timezone": "-4"
        },
        {
            "name": "Clayton J Lloyd Intl ",
            "city": "The Valley",
            "country": "Anguilla",
            "IATA": "AXA",
            "ICAO": "TQPF",
            "lat": "18.2048",
            "lon": "-63.055099",
            "timezone": "-4"
        },
        {
            "name": "Piarco Intl ",
            "city": "Port-of-spain",
            "country": "Trinidad and Tobago",
            "IATA": "POS",
            "ICAO": "TTPP",
            "lat": "10.595399856567383",
            "lon": "-61.33720016479492",
            "timezone": "-4"
        },
        {
            "name": "Terrance B. Lettsome Intl ",
            "city": "Tortola",
            "country": "British Virgin Islands",
            "IATA": "EIS",
            "ICAO": "TUPJ",
            "lat": "18.444799423217773",
            "lon": "-64.54299926757812",
            "timezone": "-4"
        },
        {
            "name": "Argyle Intl ",
            "city": "Kingstown",
            "country": "Saint Vincent and the Grenadines",
            "IATA": "SVD",
            "ICAO": "TVSA",
            "lat": "13.156695",
            "lon": "-61.149945",
            "timezone": "-4"
        },
        {
            "name": "Astana Intl ",
            "city": "Tselinograd",
            "country": "Kazakhstan",
            "IATA": "TSE",
            "ICAO": "UACC",
            "lat": "51.02220153808594",
            "lon": "71.46690368652344",
            "timezone": "6"
        },
        {
            "name": "Manas Intl ",
            "city": "Bishkek",
            "country": "Kyrgyzstan",
            "IATA": "FRU",
            "ICAO": "UAFM",
            "lat": "43.0612983704",
            "lon": "74.4776000977",
            "timezone": "6"
        },
        {
            "name": "Heydar Aliyev Intl ",
            "city": "Baku",
            "country": "Azerbaijan",
            "IATA": "GYD",
            "ICAO": "UBBB",
            "lat": "40.467498779296875",
            "lon": "50.04669952392578",
            "timezone": "4"
        },
        {
            "name": "Vladivostok Intl ",
            "city": "Vladivostok",
            "country": "Russia",
            "IATA": "VVO",
            "ICAO": "UHWW",
            "lat": "43.39899826049805",
            "lon": "132.1479949951172",
            "timezone": "10"
        },
        {
            "name": "Boryspil Intl ",
            "city": "Kiev",
            "country": "Ukraine",
            "IATA": "KBP",
            "ICAO": "UKBB",
            "lat": "50.345001220703125",
            "lon": "30.894699096679688",
            "timezone": "2"
        },
        {
            "name": "Donetsk Intl ",
            "city": "Donetsk",
            "country": "Ukraine",
            "IATA": "DOK",
            "ICAO": "UKCC",
            "lat": "48.07360076904297",
            "lon": "37.73970031738281",
            "timezone": "2"
        },
        {
            "name": "Dnipropetrovsk Intl ",
            "city": "Dnepropetrovsk",
            "country": "Ukraine",
            "IATA": "DNK",
            "ICAO": "UKDD",
            "lat": "48.357200622558594",
            "lon": "35.10060119628906",
            "timezone": "2"
        },
        {
            "name": "Simferopol Intl ",
            "city": "Simferopol",
            "country": "Ukraine",
            "IATA": "SIP",
            "ICAO": "UKFF",
            "lat": "45.05220031738281",
            "lon": "33.975101470947266",
            "timezone": "3"
        },
        {
            "name": "Kiev Zhuliany Intl ",
            "city": "Kiev",
            "country": "Ukraine",
            "IATA": "IEV",
            "ICAO": "UKKK",
            "lat": "50.40194",
            "lon": "30.45194",
            "timezone": "2"
        },
        {
            "name": "Lviv Intl ",
            "city": "Lvov",
            "country": "Ukraine",
            "IATA": "LWO",
            "ICAO": "UKLL",
            "lat": "49.8125",
            "lon": "23.956100463867188",
            "timezone": "2"
        },
        {
            "name": "Odessa Intl ",
            "city": "Odessa",
            "country": "Ukraine",
            "IATA": "ODS",
            "ICAO": "UKOO",
            "lat": "46.42679977416992",
            "lon": "30.67650032043457",
            "timezone": "2"
        },
        {
            "name": "Krasnodar Pashkovsky Intl ",
            "city": "Krasnodar",
            "country": "Russia",
            "IATA": "KRR",
            "ICAO": "URKK",
            "lat": "45.034698486328",
            "lon": "39.170501708984",
            "timezone": "3"
        },
        {
            "name": "Platov Intl ",
            "city": "Rostov",
            "country": "Russia",
            "IATA": "ROV",
            "ICAO": "URRP",
            "lat": "47.493888",
            "lon": "39.924722",
            "timezone": "3"
        },
        {
            "name": "Sochi Intl ",
            "city": "Sochi",
            "country": "Russia",
            "IATA": "AER",
            "ICAO": "URSS",
            "lat": "43.449902",
            "lon": "39.9566",
            "timezone": "3"
        },
        {
            "name": "Volgograd Intl ",
            "city": "Volgograd",
            "country": "Russia",
            "IATA": "VOG",
            "ICAO": "URWW",
            "lat": "48.782501220703125",
            "lon": "44.34550094604492",
            "timezone": "3"
        },
        {
            "name": "Magnitogorsk Intl ",
            "city": "Magnetiogorsk",
            "country": "Russia",
            "IATA": "MQF",
            "ICAO": "USCM",
            "lat": "53.39310073852539",
            "lon": "58.755699157714844",
            "timezone": "5"
        },
        {
            "name": "Ashgabat Intl ",
            "city": "Ashkhabad",
            "country": "Turkmenistan",
            "IATA": "ASB",
            "ICAO": "UTAA",
            "lat": "37.986801",
            "lon": "58.361",
            "timezone": "5"
        },
        {
            "name": "Tashkent Intl ",
            "city": "Tashkent",
            "country": "Uzbekistan",
            "IATA": "TAS",
            "ICAO": "UTTT",
            "lat": "41.257900238",
            "lon": "69.2811965942",
            "timezone": "5"
        },
        {
            "name": "Sheremetyevo Intl ",
            "city": "Moscow",
            "country": "Russia",
            "IATA": "SVO",
            "ICAO": "UUEE",
            "lat": "55.972599",
            "lon": "37.4146",
            "timezone": "3"
        },
        {
            "name": "Voronezh Intl ",
            "city": "Voronezh",
            "country": "Russia",
            "IATA": "VOZ",
            "ICAO": "UUOO",
            "lat": "51.81420135498047",
            "lon": "39.22959899902344",
            "timezone": "3"
        },
        {
            "name": "Vnukovo Intl ",
            "city": "Moscow",
            "country": "Russia",
            "IATA": "VKO",
            "ICAO": "UUWW",
            "lat": "55.5914993286",
            "lon": "37.2615013123",
            "timezone": "3"
        },
        {
            "name": "Kazan Intl ",
            "city": "Kazan",
            "country": "Russia",
            "IATA": "KZN",
            "ICAO": "UWKD",
            "lat": "55.606201171875",
            "lon": "49.278701782227",
            "timezone": "3"
        },
        {
            "name": "Ufa Intl ",
            "city": "Ufa",
            "country": "Russia",
            "IATA": "UFA",
            "ICAO": "UWUU",
            "lat": "54.557498931885",
            "lon": "55.874401092529",
            "timezone": "5"
        },
        {
            "name": "Kurumoch Intl ",
            "city": "Samara",
            "country": "Russia",
            "IATA": "KUF",
            "ICAO": "UWWW",
            "lat": "53.504901885986",
            "lon": "50.16429901123",
            "timezone": "4"
        },
        {
            "name": "Sardar Vallabhbhai Patel Intl ",
            "city": "Ahmedabad",
            "country": "India",
            "IATA": "AMD",
            "ICAO": "VAAH",
            "lat": "23.0771999359",
            "lon": "72.63469696039999",
            "timezone": "5.5"
        },
        {
            "name": "Chhatrapati Shivaji Intl ",
            "city": "Mumbai",
            "country": "India",
            "IATA": "BOM",
            "ICAO": "VABB",
            "lat": "19.0886993408",
            "lon": "72.8678970337",
            "timezone": "5.5"
        },
        {
            "name": "Raja Bhoj Intl ",
            "city": "Bhopal",
            "country": "India",
            "IATA": "BHO",
            "ICAO": "VABP",
            "lat": "23.2875003815",
            "lon": "77.3374023438",
            "timezone": "5.5"
        },
        {
            "name": "Dr. Babasaheb Ambedkar Intl ",
            "city": "Nagpur",
            "country": "India",
            "IATA": "NAG",
            "ICAO": "VANP",
            "lat": "21.092199325561523",
            "lon": "79.04720306396484",
            "timezone": "5.5"
        },
        {
            "name": "Bandaranaike Intl Colombo ",
            "city": "Colombo",
            "country": "Sri Lanka",
            "IATA": "CMB",
            "ICAO": "VCBI",
            "lat": "7.180759906768799",
            "lon": "79.88410186767578",
            "timezone": "5.5"
        },
        {
            "name": "Phnom Penh Intl ",
            "city": "Phnom-penh",
            "country": "Cambodia",
            "IATA": "PNH",
            "ICAO": "VDPP",
            "lat": "11.546600341796875",
            "lon": "104.84400177001953",
            "timezone": "7"
        },
        {
            "name": "Siem Reap Intl ",
            "city": "Siem-reap",
            "country": "Cambodia",
            "IATA": "REP",
            "ICAO": "VDSR",
            "lat": "13.410699844400002",
            "lon": "103.81300354",
            "timezone": "7"
        },
        {
            "name": "Netaji Subhash Chandra Bose Intl ",
            "city": "Kolkata",
            "country": "India",
            "IATA": "CCU",
            "ICAO": "VECC",
            "lat": "22.654699325561523",
            "lon": "88.44670104980469",
            "timezone": "5.5"
        },
        {
            "name": "Shah Amanat Intl ",
            "city": "Chittagong",
            "country": "Bangladesh",
            "IATA": "CGP",
            "ICAO": "VGEG",
            "lat": "22.24959945678711",
            "lon": "91.81330108642578",
            "timezone": "6"
        },
        {
            "name": "Osmany Intl ",
            "city": "Sylhet Osmani",
            "country": "Bangladesh",
            "IATA": "ZYL",
            "ICAO": "VGSY",
            "lat": "24.963199615478516",
            "lon": "91.8667984008789",
            "timezone": "6"
        },
        {
            "name": "Hazrat Shahjalal Intl ",
            "city": "Dhaka",
            "country": "Bangladesh",
            "IATA": "DAC",
            "ICAO": "VGZR",
            "lat": "23.843347",
            "lon": "90.397783",
            "timezone": "6"
        },
        {
            "name": "Hong Kong Intl ",
            "city": "Hong Kong",
            "country": "Hong Kong",
            "IATA": "HKG",
            "ICAO": "VHHH",
            "lat": "22.308901",
            "lon": "113.915001",
            "timezone": "8"
        },
        {
            "name": "Sri Guru Ram Dass Jee Intl ",
            "city": "Amritsar",
            "country": "India",
            "IATA": "ATQ",
            "ICAO": "VIAR",
            "lat": "31.7096004486",
            "lon": "74.7973022461",
            "timezone": "5.5"
        },
        {
            "name": "Indira Gandhi Intl ",
            "city": "Delhi",
            "country": "India",
            "IATA": "DEL",
            "ICAO": "VIDP",
            "lat": "28.5665",
            "lon": "77.103104",
            "timezone": "5.5"
        },
        {
            "name": "Jaipur Intl ",
            "city": "Jaipur",
            "country": "India",
            "IATA": "JAI",
            "ICAO": "VIJP",
            "lat": "26.8242",
            "lon": "75.812202",
            "timezone": "5.5"
        },
        {
            "name": "Chaudhary Charan Singh Intl ",
            "city": "Lucknow",
            "country": "India",
            "IATA": "LKO",
            "ICAO": "VILK",
            "lat": "26.7605991364",
            "lon": "80.8892974854",
            "timezone": "5.5"
        },
        {
            "name": "Luang Phabang Intl ",
            "city": "Luang Prabang",
            "country": "Laos",
            "IATA": "LPQ",
            "ICAO": "VLLB",
            "lat": "19.897300720214844",
            "lon": "102.16100311279297",
            "timezone": "7"
        },
        {
            "name": "Pakse Intl ",
            "city": "Pakse",
            "country": "Laos",
            "IATA": "PKZ",
            "ICAO": "VLPS",
            "lat": "15.132100105285645",
            "lon": "105.78099822998047",
            "timezone": "7"
        },
        {
            "name": "Wattay Intl ",
            "city": "Vientiane",
            "country": "Laos",
            "IATA": "VTE",
            "ICAO": "VLVT",
            "lat": "17.988300323500003",
            "lon": "102.56300354",
            "timezone": "7"
        },
        {
            "name": "Macau Intl ",
            "city": "Macau",
            "country": "Macau",
            "IATA": "MFM",
            "ICAO": "VMMC",
            "lat": "22.149599",
            "lon": "113.592003",
            "timezone": "8"
        },
        {
            "name": "Tribhuvan Intl ",
            "city": "Kathmandu",
            "country": "Nepal",
            "IATA": "KTM",
            "ICAO": "VNKT",
            "lat": "27.6966",
            "lon": "85.3591",
            "timezone": "5.75"
        },
        {
            "name": "Kempegowda Intl ",
            "city": "Bangalore",
            "country": "India",
            "IATA": "BLR",
            "ICAO": "VOBL",
            "lat": "13.1979",
            "lon": "77.706299",
            "timezone": "5.5"
        },
        {
            "name": "Coimbatore Intl ",
            "city": "Coimbatore",
            "country": "India",
            "IATA": "CJB",
            "ICAO": "VOCB",
            "lat": "11.029999733",
            "lon": "77.0434036255",
            "timezone": "5.5"
        },
        {
            "name": "Cochin Intl ",
            "city": "Kochi",
            "country": "India",
            "IATA": "COK",
            "ICAO": "VOCI",
            "lat": "10.152",
            "lon": "76.401901",
            "timezone": "5.5"
        },
        {
            "name": "Calicut Intl ",
            "city": "Calicut",
            "country": "India",
            "IATA": "CCJ",
            "ICAO": "VOCL",
            "lat": "11.1367998123",
            "lon": "75.95529937740001",
            "timezone": "5.5"
        },
        {
            "name": "Mangalore Intl ",
            "city": "Mangalore",
            "country": "India",
            "IATA": "IXE",
            "ICAO": "VOML",
            "lat": "12.9612998962",
            "lon": "74.8900985718",
            "timezone": "5.5"
        },
        {
            "name": "Chennai Intl ",
            "city": "Madras",
            "country": "India",
            "IATA": "MAA",
            "ICAO": "VOMM",
            "lat": "12.990005493164062",
            "lon": "80.16929626464844",
            "timezone": "5.5"
        },
        {
            "name": "Vir Savarkar Intl ",
            "city": "Port Blair",
            "country": "India",
            "IATA": "IXZ",
            "ICAO": "VOPB",
            "lat": "11.641200065612793",
            "lon": "92.72969818115234",
            "timezone": "5.5"
        },
        {
            "name": "Trivandrum Intl ",
            "city": "Trivandrum",
            "country": "India",
            "IATA": "TRV",
            "ICAO": "VOTV",
            "lat": "8.48211956024",
            "lon": "76.9200973511",
            "timezone": "5.5"
        },
        {
            "name": "Malé Intl ",
            "city": "Male",
            "country": "Maldives",
            "IATA": "MLE",
            "ICAO": "VRMM",
            "lat": "4.191830158233643",
            "lon": "73.52909851074219",
            "timezone": "5"
        },
        {
            "name": "Don Mueang Intl ",
            "city": "Bangkok",
            "country": "Thailand",
            "IATA": "DMK",
            "ICAO": "VTBD",
            "lat": "13.9125995636",
            "lon": "100.607002258",
            "timezone": "7"
        },
        {
            "name": "U-Tapao Intl ",
            "city": "Pattaya",
            "country": "Thailand",
            "IATA": "UTP",
            "ICAO": "VTBU",
            "lat": "12.679900169372559",
            "lon": "101.00499725341797",
            "timezone": "7"
        },
        {
            "name": "Phuket Intl ",
            "city": "Phuket",
            "country": "Thailand",
            "IATA": "HKT",
            "ICAO": "VTSP",
            "lat": "8.1132",
            "lon": "98.316902",
            "timezone": "7"
        },
        {
            "name": "Hat Yai Intl ",
            "city": "Hat Yai",
            "country": "Thailand",
            "IATA": "HDY",
            "ICAO": "VTSS",
            "lat": "6.93320989609",
            "lon": "100.392997742",
            "timezone": "7"
        },
        {
            "name": "Da Nang Intl ",
            "city": "Danang",
            "country": "Vietnam",
            "IATA": "DAD",
            "ICAO": "VVDN",
            "lat": "16.043899536132812",
            "lon": "108.1989974975586",
            "timezone": "7"
        },
        {
            "name": "Noi Bai Intl ",
            "city": "Hanoi",
            "country": "Vietnam",
            "IATA": "HAN",
            "ICAO": "VVNB",
            "lat": "21.221200942993164",
            "lon": "105.80699920654297",
            "timezone": "7"
        },
        {
            "name": "Phu Quoc Intl ",
            "city": "Phuquoc",
            "country": "Vietnam",
            "IATA": "PQC",
            "ICAO": "VVPQ",
            "lat": "10.1698",
            "lon": "103.9931",
            "timezone": "7"
        },
        {
            "name": "Tan Son Nhat Intl ",
            "city": "Ho Chi Minh City",
            "country": "Vietnam",
            "IATA": "SGN",
            "ICAO": "VVTS",
            "lat": "10.8187999725",
            "lon": "106.652000427",
            "timezone": "7"
        },
        {
            "name": "Mandalay Intl ",
            "city": "Mandalay",
            "country": "Burma",
            "IATA": "MDL",
            "ICAO": "VYMD",
            "lat": "21.702199935913086",
            "lon": "95.97789764404297",
            "timezone": "6.5"
        },
        {
            "name": "Yangon Intl ",
            "city": "Yangon",
            "country": "Burma",
            "IATA": "RGN",
            "ICAO": "VYYY",
            "lat": "16.907300949099998",
            "lon": "96.1332015991",
            "timezone": "6.5"
        },
        {
            "name": "Hasanuddin Intl ",
            "city": "Ujung Pandang",
            "country": "Indonesia",
            "IATA": "UPG",
            "ICAO": "WAAA",
            "lat": "-5.061629772186279",
            "lon": "119.55400085449219",
            "timezone": "8"
        },
        {
            "name": "Sentani Intl ",
            "city": "Jayapura",
            "country": "Indonesia",
            "IATA": "DJJ",
            "ICAO": "WAJJ",
            "lat": "-2.5769500733",
            "lon": "140.5160064698",
            "timezone": "9"
        },
        {
            "name": "Kuching Intl ",
            "city": "Kuching",
            "country": "Malaysia",
            "IATA": "KCH",
            "ICAO": "WBGG",
            "lat": "1.4846999645233154",
            "lon": "110.34700012207031",
            "timezone": "8"
        },
        {
            "name": "Kota Kinabalu Intl ",
            "city": "Kota Kinabalu",
            "country": "Malaysia",
            "IATA": "BKI",
            "ICAO": "WBKK",
            "lat": "5.9372100830078125",
            "lon": "116.0510025024414",
            "timezone": "8"
        },
        {
            "name": "Brunei Intl ",
            "city": "Bandar Seri Begawan",
            "country": "Brunei",
            "IATA": "BWN",
            "ICAO": "WBSB",
            "lat": "4.944200038909912",
            "lon": "114.9280014038086",
            "timezone": "8"
        },
        {
            "name": "Soekarno-Hatta Intl ",
            "city": "Jakarta",
            "country": "Indonesia",
            "IATA": "CGK",
            "ICAO": "WIII",
            "lat": "-6.1255698204",
            "lon": "106.65599823",
            "timezone": "7"
        },
        {
            "name": "Minangkabau Intl ",
            "city": "Padang",
            "country": "Indonesia",
            "IATA": "PDG",
            "ICAO": "WIPT",
            "lat": "-0.786917",
            "lon": "100.280998",
            "timezone": "7"
        },
        {
            "name": "Sultan Iskandar Muda Intl ",
            "city": "Banda Aceh",
            "country": "Indonesia",
            "IATA": "BTJ",
            "ICAO": "WITT",
            "lat": "5.522872024010001",
            "lon": "95.42063713070002",
            "timezone": "7"
        },
        {
            "name": "Senai Intl ",
            "city": "Johor Bahru",
            "country": "Malaysia",
            "IATA": "JHB",
            "ICAO": "WMKJ",
            "lat": "1.64131",
            "lon": "103.669998",
            "timezone": "8"
        },
        {
            "name": "Kuala Lumpur Intl ",
            "city": "Kuala Lumpur",
            "country": "Malaysia",
            "IATA": "KUL",
            "ICAO": "WMKK",
            "lat": "2.745579957962",
            "lon": "101.70999908447",
            "timezone": "8"
        },
        {
            "name": "Langkawi Intl ",
            "city": "Langkawi",
            "country": "Malaysia",
            "IATA": "LGK",
            "ICAO": "WMKL",
            "lat": "6.329730033874512",
            "lon": "99.72869873046875",
            "timezone": "8"
        },
        {
            "name": "Penang Intl ",
            "city": "Penang",
            "country": "Malaysia",
            "IATA": "PEN",
            "ICAO": "WMKP",
            "lat": "5.297140121459961",
            "lon": "100.2770004272461",
            "timezone": "8"
        },
        {
            "name": "Presidente Nicolau Lobato Intl ",
            "city": "Dili",
            "country": "East Timor",
            "IATA": "DIL",
            "ICAO": "WPDL",
            "lat": "-8.54640007019",
            "lon": "125.526000977",
            "timezone": "9"
        },
        {
            "name": "Brisbane Intl ",
            "city": "Brisbane",
            "country": "Australia",
            "IATA": "BNE",
            "ICAO": "YBBN",
            "lat": "-27.384199142456055",
            "lon": "153.11700439453125",
            "timezone": "10"
        },
        {
            "name": "Cairns Intl ",
            "city": "Cairns",
            "country": "Australia",
            "IATA": "CNS",
            "ICAO": "YBCS",
            "lat": "-16.885799408",
            "lon": "145.755004883",
            "timezone": "10"
        },
        {
            "name": "Hobart Intl ",
            "city": "Hobart",
            "country": "Australia",
            "IATA": "HBA",
            "ICAO": "YMHB",
            "lat": "-42.836101532",
            "lon": "147.509994507",
            "timezone": "10"
        },
        {
            "name": "Melbourne Intl ",
            "city": "Melbourne",
            "country": "Australia",
            "IATA": "MEL",
            "ICAO": "YMML",
            "lat": "-37.673302",
            "lon": "144.843002",
            "timezone": "10"
        },
        {
            "name": "Adelaide Intl ",
            "city": "Adelaide",
            "country": "Australia",
            "IATA": "ADL",
            "ICAO": "YPAD",
            "lat": "-34.945",
            "lon": "138.531006",
            "timezone": "9.5"
        },
        {
            "name": "Port Hedland Intl ",
            "city": "Port Hedland",
            "country": "Australia",
            "IATA": "PHE",
            "ICAO": "YPPD",
            "lat": "-20.3777999878",
            "lon": "118.625999451",
            "timezone": "8"
        },
        {
            "name": "Perth Intl ",
            "city": "Perth",
            "country": "Australia",
            "IATA": "PER",
            "ICAO": "YPPH",
            "lat": "-31.94029998779297",
            "lon": "115.96700286865234",
            "timezone": "8"
        },
        {
            "name": "Canberra Intl ",
            "city": "Canberra",
            "country": "Australia",
            "IATA": "CBR",
            "ICAO": "YSCB",
            "lat": "-35.30690002441406",
            "lon": "149.19500732421875",
            "timezone": "10"
        },
        {
            "name": "Norfolk Island Intl ",
            "city": "Norfolk Island",
            "country": "Norfolk Island",
            "IATA": "NLK",
            "ICAO": "YSNF",
            "lat": "-29.04159927368164",
            "lon": "167.93899536132812",
            "timezone": "11"
        },
        {
            "name": "Sydney Kingsford Smith Intl ",
            "city": "Sydney",
            "country": "Australia",
            "IATA": "SYD",
            "ICAO": "YSSY",
            "lat": "-33.94609832763672",
            "lon": "151.177001953125",
            "timezone": "10"
        },
        {
            "name": "Beijing Capital Intl ",
            "city": "Beijing",
            "country": "China",
            "IATA": "PEK",
            "ICAO": "ZBAA",
            "lat": "40.080101013183594",
            "lon": "116.58499908447266",
            "timezone": "8"
        },
        {
            "name": "Tianjin Binhai Intl ",
            "city": "Tianjin",
            "country": "China",
            "IATA": "TSN",
            "ICAO": "ZBTJ",
            "lat": "39.124401092499994",
            "lon": "117.346000671",
            "timezone": "8"
        },
        {
            "name": "Guangzhou Baiyun Intl ",
            "city": "Guangzhou",
            "country": "China",
            "IATA": "CAN",
            "ICAO": "ZGGG",
            "lat": "23.39240074157715",
            "lon": "113.29900360107422",
            "timezone": "8"
        },
        {
            "name": "Changsha Huanghua Intl ",
            "city": "Changcha",
            "country": "China",
            "IATA": "CSX",
            "ICAO": "ZGHA",
            "lat": "28.189199447599997",
            "lon": "113.220001221",
            "timezone": "8"
        },
        {
            "name": "Guilin Liangjiang Intl ",
            "city": "Guilin",
            "country": "China",
            "IATA": "KWL",
            "ICAO": "ZGKL",
            "lat": "25.21809959411621",
            "lon": "110.03900146484375",
            "timezone": "8"
        },
        {
            "name": "Shenzhen Bao'an Intl ",
            "city": "Shenzhen",
            "country": "China",
            "IATA": "SZX",
            "ICAO": "ZGSZ",
            "lat": "22.639299392700195",
            "lon": "113.81099700927734",
            "timezone": "8"
        },
        {
            "name": "Zhengzhou Xinzheng Intl ",
            "city": "Zhengzhou",
            "country": "China",
            "IATA": "CGO",
            "ICAO": "ZHCC",
            "lat": "34.519699096699995",
            "lon": "113.841003418",
            "timezone": "8"
        },
        {
            "name": "Wuhan Tianhe Intl ",
            "city": "Wuhan",
            "country": "China",
            "IATA": "WUH",
            "ICAO": "ZHHH",
            "lat": "30.7838",
            "lon": "114.208",
            "timezone": "8"
        },
        {
            "name": "Pyongyang Sunan Intl ",
            "city": "Pyongyang",
            "country": "North Korea",
            "IATA": "FNJ",
            "ICAO": "ZKPY",
            "lat": "39.224098",
            "lon": "125.669998",
            "timezone": "8.5"
        },
        {
            "name": "Xi'an Xianyang Intl ",
            "city": "Xi'an",
            "country": "China",
            "IATA": "XIY",
            "ICAO": "ZLXY",
            "lat": "34.447102",
            "lon": "108.751999",
            "timezone": "8"
        },
        {
            "name": "Chinggis Khaan Intl ",
            "city": "Ulan Bator",
            "country": "Mongolia",
            "IATA": "ULN",
            "ICAO": "ZMUB",
            "lat": "47.843102",
            "lon": "106.766998",
            "timezone": "8"
        },
        {
            "name": "Kunming Changshui Intl ",
            "city": "Kunming",
            "country": "China",
            "IATA": "KMG",
            "ICAO": "ZPPP",
            "lat": "25.1019444",
            "lon": "102.9291667",
            "timezone": "8"
        },
        {
            "name": "Xiamen Gaoqi Intl ",
            "city": "Xiamen",
            "country": "China",
            "IATA": "XMN",
            "ICAO": "ZSAM",
            "lat": "24.54400062561035",
            "lon": "118.12799835205078",
            "timezone": "8"
        },
        {
            "name": "Nanchang Changbei Intl ",
            "city": "Nanchang",
            "country": "China",
            "IATA": "KHN",
            "ICAO": "ZSCN",
            "lat": "28.864999771118164",
            "lon": "115.9000015258789",
            "timezone": "8"
        },
        {
            "name": "Fuzhou Changle Intl ",
            "city": "Fuzhou",
            "country": "China",
            "IATA": "FOC",
            "ICAO": "ZSFZ",
            "lat": "25.935100555419922",
            "lon": "119.66300201416016",
            "timezone": "8"
        },
        {
            "name": "Hangzhou Xiaoshan Intl ",
            "city": "Hangzhou",
            "country": "China",
            "IATA": "HGH",
            "ICAO": "ZSHC",
            "lat": "30.22949981689453",
            "lon": "120.43399810791016",
            "timezone": "8"
        },
        {
            "name": "Ningbo Lishe Intl ",
            "city": "Ninbo",
            "country": "China",
            "IATA": "NGB",
            "ICAO": "ZSNB",
            "lat": "29.82670021057129",
            "lon": "121.46199798583984",
            "timezone": "8"
        },
        {
            "name": "Hefei Luogang Intl ",
            "city": "Hefei",
            "country": "China",
            "IATA": "HFE",
            "ICAO": "ZSOF",
            "lat": "31.780000686645508",
            "lon": "117.2979965209961",
            "timezone": "8"
        },
        {
            "name": "Shanghai Hongqiao Intl ",
            "city": "Shanghai",
            "country": "China",
            "IATA": "SHA",
            "ICAO": "ZSSS",
            "lat": "31.197900772094727",
            "lon": "121.33599853515625",
            "timezone": "8"
        },
        {
            "name": "Chongqing Jiangbei Intl ",
            "city": "Chongqing",
            "country": "China",
            "IATA": "CKG",
            "ICAO": "ZUCK",
            "lat": "29.719200134277344",
            "lon": "106.64199829101562",
            "timezone": "8"
        },
        {
            "name": "Chengdu Shuangliu Intl ",
            "city": "Chengdu",
            "country": "China",
            "IATA": "CTU",
            "ICAO": "ZUUU",
            "lat": "30.578500747680664",
            "lon": "103.9469985961914",
            "timezone": "8"
        },
        {
            "name": "Ürümqi Diwopu Intl ",
            "city": "Urumqi",
            "country": "China",
            "IATA": "URC",
            "ICAO": "ZWWW",
            "lat": "43.907100677490234",
            "lon": "87.47419738769531",
            "timezone": "8"
        },
        {
            "name": "Mudanjiang Hailang Intl ",
            "city": "Mudanjiang",
            "country": "China",
            "IATA": "MDG",
            "ICAO": "ZYMD",
            "lat": "44.5241012573",
            "lon": "129.569000244",
            "timezone": "8"
        },
        {
            "name": "Shanghai Pudong Intl ",
            "city": "Shanghai",
            "country": "China",
            "IATA": "PVG",
            "ICAO": "ZSPD",
            "lat": "31.143400192260742",
            "lon": "121.80500030517578",
            "timezone": "8"
        },
        {
            "name": "Sultan Abdul Aziz Shah Intl ",
            "city": "Kuala Lumpur",
            "country": "Malaysia",
            "IATA": "SZB",
            "ICAO": "WMSA",
            "lat": "3.130579948425293",
            "lon": "101.54900360107422",
            "timezone": "8"
        },
        {
            "name": "Borg El Arab Intl ",
            "city": "Alexandria",
            "country": "Egypt",
            "IATA": "HBE",
            "ICAO": "HEBA",
            "lat": "30.917699813842773",
            "lon": "29.696399688720703",
            "timezone": "2"
        },
        {
            "name": "Hilo Intl ",
            "city": "Hilo",
            "country": "United States",
            "IATA": "ITO",
            "ICAO": "PHTO",
            "lat": "19.721399307250977",
            "lon": "-155.04800415039062",
            "timezone": "-10"
        },
        {
            "name": "Grand Forks Intl ",
            "city": "Grand Forks",
            "country": "United States",
            "IATA": "GFK",
            "ICAO": "KGFK",
            "lat": "47.949299",
            "lon": "-97.176102",
            "timezone": "-6"
        },
        {
            "name": "General Edward Lawrence Logan Intl ",
            "city": "Boston",
            "country": "United States",
            "IATA": "BOS",
            "ICAO": "KBOS",
            "lat": "42.36429977",
            "lon": "-71.00520325",
            "timezone": "-5"
        },
        {
            "name": "Griffiss Intl ",
            "city": "Rome",
            "country": "United States",
            "IATA": "RME",
            "ICAO": "KRME",
            "lat": "43.23379898",
            "lon": "-75.40699768",
            "timezone": "-5"
        },
        {
            "name": "Metropolitan Oakland Intl ",
            "city": "Oakland",
            "country": "United States",
            "IATA": "OAK",
            "ICAO": "KOAK",
            "lat": "37.721298",
            "lon": "-122.221001",
            "timezone": "-8"
        },
        {
            "name": "Kansas City Intl ",
            "city": "Kansas City",
            "country": "United States",
            "IATA": "MCI",
            "ICAO": "KMCI",
            "lat": "39.2976",
            "lon": "-94.713898",
            "timezone": "-6"
        },
        {
            "name": "Phoenix Sky Harbor Intl ",
            "city": "Phoenix",
            "country": "United States",
            "IATA": "PHX",
            "ICAO": "KPHX",
            "lat": "33.43429946899414",
            "lon": "-112.01200103759766",
            "timezone": "-7"
        },
        {
            "name": "Bangor Intl ",
            "city": "Bangor",
            "country": "United States",
            "IATA": "BGR",
            "ICAO": "KBGR",
            "lat": "44.80739974975586",
            "lon": "-68.8281021118164",
            "timezone": "-5"
        },
        {
            "name": "Spokane Intl ",
            "city": "Spokane",
            "country": "United States",
            "IATA": "GEG",
            "ICAO": "KGEG",
            "lat": "47.61989974975586",
            "lon": "-117.53399658203125",
            "timezone": "-8"
        },
        {
            "name": "San Francisco Intl ",
            "city": "San Francisco",
            "country": "United States",
            "IATA": "SFO",
            "ICAO": "KSFO",
            "lat": "37.61899948120117",
            "lon": "-122.375",
            "timezone": "-8"
        },
        {
            "name": "Cut Bank Intl ",
            "city": "Cutbank",
            "country": "United States",
            "IATA": "CTB",
            "ICAO": "KCTB",
            "lat": "48.6083984375",
            "lon": "-112.375999451",
            "timezone": "-7"
        },
        {
            "name": "Memphis Intl ",
            "city": "Memphis",
            "country": "United States",
            "IATA": "MEM",
            "ICAO": "KMEM",
            "lat": "35.04240036010742",
            "lon": "-89.97669982910156",
            "timezone": "-6"
        },
        {
            "name": "Bisbee Douglas Intl ",
            "city": "Douglas",
            "country": "United States",
            "IATA": "DUG",
            "ICAO": "KDUG",
            "lat": "31.4689998627",
            "lon": "-109.603996277",
            "timezone": "-7"
        },
        {
            "name": "Los Angeles Intl ",
            "city": "Los Angeles",
            "country": "United States",
            "IATA": "LAX",
            "ICAO": "KLAX",
            "lat": "33.94250107",
            "lon": "-118.4079971",
            "timezone": "-8"
        },
        {
            "name": "Cleveland Hopkins Intl ",
            "city": "Cleveland",
            "country": "United States",
            "IATA": "CLE",
            "ICAO": "KCLE",
            "lat": "41.4117012024",
            "lon": "-81.8498001099",
            "timezone": "-5"
        },
        {
            "name": "Cincinnati Northern Kentucky Intl ",
            "city": "Cincinnati",
            "country": "United States",
            "IATA": "CVG",
            "ICAO": "KCVG",
            "lat": "39.0488014221",
            "lon": "-84.6678009033",
            "timezone": "-5"
        },
        {
            "name": "Juneau Intl ",
            "city": "Juneau",
            "country": "United States",
            "IATA": "JNU",
            "ICAO": "PAJN",
            "lat": "58.35499954223633",
            "lon": "-134.5760040283203",
            "timezone": "-9"
        },
        {
            "name": "Newark Liberty Intl ",
            "city": "Newark",
            "country": "United States",
            "IATA": "EWR",
            "ICAO": "KEWR",
            "lat": "40.692501068115234",
            "lon": "-74.168701171875",
            "timezone": "-5"
        },
        {
            "name": "Minot Intl ",
            "city": "Minot",
            "country": "United States",
            "IATA": "MOT",
            "ICAO": "KMOT",
            "lat": "48.2593994140625",
            "lon": "-101.27999877929688",
            "timezone": "-6"
        },
        {
            "name": "Houlton Intl ",
            "city": "Houlton",
            "country": "United States",
            "IATA": "HUL",
            "ICAO": "KHUL",
            "lat": "46.1231002808",
            "lon": "-67.792098999",
            "timezone": "-5"
        },
        {
            "name": "Ellison Onizuka Kona Intl At Keahole ",
            "city": "Kona",
            "country": "United States",
            "IATA": "KOA",
            "ICAO": "PHKO",
            "lat": "19.738783",
            "lon": "-156.045603",
            "timezone": "-10"
        },
        {
            "name": "Myrtle Beach Intl ",
            "city": "Myrtle Beach",
            "country": "United States",
            "IATA": "MYR",
            "ICAO": "KMYR",
            "lat": "33.6796989441",
            "lon": "-78.9282989502",
            "timezone": "-5"
        },
        {
            "name": "Arkansas Intl ",
            "city": "Blytheville",
            "country": "United States",
            "IATA": "BYH",
            "ICAO": "KBYH",
            "lat": "35.9642982483",
            "lon": "-89.94400024410001",
            "timezone": "-6"
        },
        {
            "name": "Atlantic City Intl ",
            "city": "Atlantic City",
            "country": "United States",
            "IATA": "ACY",
            "ICAO": "KACY",
            "lat": "39.45759963989258",
            "lon": "-74.57720184326172",
            "timezone": "-5"
        },
        {
            "name": "Fort Lauderdale Hollywood Intl ",
            "city": "Fort Lauderdale",
            "country": "United States",
            "IATA": "FLL",
            "ICAO": "KFLL",
            "lat": "26.072599",
            "lon": "-80.152702",
            "timezone": "-5"
        },
        {
            "name": "Falls Intl ",
            "city": "International Falls",
            "country": "United States",
            "IATA": "INL",
            "ICAO": "KINL",
            "lat": "48.566200256347656",
            "lon": "-93.4030990600586",
            "timezone": "-6"
        },
        {
            "name": "Salt Lake City Intl ",
            "city": "Salt Lake City",
            "country": "United States",
            "IATA": "SLC",
            "ICAO": "KSLC",
            "lat": "40.78839874267578",
            "lon": "-111.97799682617188",
            "timezone": "-7"
        },
        {
            "name": "Harrisburg Intl ",
            "city": "Harrisburg",
            "country": "United States",
            "IATA": "MDT",
            "ICAO": "KMDT",
            "lat": "40.1935005188",
            "lon": "-76.7633972168",
            "timezone": "-5"
        },
        {
            "name": "Massena Intl Richards Field",
            "city": "Massena",
            "country": "United States",
            "IATA": "MSS",
            "ICAO": "KMSS",
            "lat": "44.93579864501953",
            "lon": "-74.84559631347656",
            "timezone": "-5"
        },
        {
            "name": "St Clair County Intl ",
            "city": "Port Huron",
            "country": "United States",
            "IATA": "PHN",
            "ICAO": "KPHN",
            "lat": "42.9109993",
            "lon": "-82.52890015",
            "timezone": "-5"
        },
        {
            "name": "El Paso Intl ",
            "city": "El Paso",
            "country": "United States",
            "IATA": "ELP",
            "ICAO": "KELP",
            "lat": "31.80719948",
            "lon": "-106.3779984",
            "timezone": "-7"
        },
        {
            "name": "Valley Intl ",
            "city": "Harlingen",
            "country": "United States",
            "IATA": "HRL",
            "ICAO": "KHRL",
            "lat": "26.228500366210938",
            "lon": "-97.65440368652344",
            "timezone": "-6"
        },
        {
            "name": "Pittsburgh Intl ",
            "city": "Pittsburgh",
            "country": "United States",
            "IATA": "PIT",
            "ICAO": "KPIT",
            "lat": "40.49150085",
            "lon": "-80.23290253",
            "timezone": "-5"
        },
        {
            "name": "Alice Intl ",
            "city": "Alice",
            "country": "United States",
            "IATA": "ALI",
            "ICAO": "KALI",
            "lat": "27.740900039699998",
            "lon": "-98.02690124510002",
            "timezone": "-6"
        },
        {
            "name": "Miami Intl ",
            "city": "Miami",
            "country": "United States",
            "IATA": "MIA",
            "ICAO": "KMIA",
            "lat": "25.79319953918457",
            "lon": "-80.29060363769531",
            "timezone": "-5"
        },
        {
            "name": "Seattle Tacoma Intl ",
            "city": "Seattle",
            "country": "United States",
            "IATA": "SEA",
            "ICAO": "KSEA",
            "lat": "47.449001",
            "lon": "-122.308998",
            "timezone": "-8"
        },
        {
            "name": "Jackson-Medgar Wiley Evers Intl ",
            "city": "Jackson",
            "country": "United States",
            "IATA": "JAN",
            "ICAO": "KJAN",
            "lat": "32.3111991882",
            "lon": "-90.0758972168",
            "timezone": "-6"
        },
        {
            "name": "Scholes Intl At Galveston ",
            "city": "Galveston",
            "country": "United States",
            "IATA": "GLS",
            "ICAO": "KGLS",
            "lat": "29.265300750732422",
            "lon": "-94.86039733886719",
            "timezone": "-6"
        },
        {
            "name": "Indianapolis Intl ",
            "city": "Indianapolis",
            "country": "United States",
            "IATA": "IND",
            "ICAO": "KIND",
            "lat": "39.7173",
            "lon": "-86.294403",
            "timezone": "-5"
        },
        {
            "name": "Akron Fulton Intl ",
            "city": "Akron",
            "country": "United States",
            "IATA": "AKC",
            "ICAO": "KAKR",
            "lat": "41.0374984741",
            "lon": "-81.4669036865",
            "timezone": "-5"
        },
        {
            "name": "Yuma MCAS/Yuma Intl ",
            "city": "Yuma",
            "country": "United States",
            "IATA": "YUM",
            "ICAO": "KNYL",
            "lat": "32.65660095",
            "lon": "-114.6060028",
            "timezone": "-7"
        },
        {
            "name": "Duluth Intl ",
            "city": "Duluth",
            "country": "United States",
            "IATA": "DLH",
            "ICAO": "KDLH",
            "lat": "46.8420982361",
            "lon": "-92.19360351559999",
            "timezone": "-6"
        },
        {
            "name": "Grant County Intl ",
            "city": "Grant County Airport",
            "country": "United States",
            "IATA": "MWH",
            "ICAO": "KMWH",
            "lat": "47.20769882",
            "lon": "-119.3199997",
            "timezone": "-8"
        },
        {
            "name": "Richmond Intl ",
            "city": "Richmond",
            "country": "United States",
            "IATA": "RIC",
            "ICAO": "KRIC",
            "lat": "37.50519943237305",
            "lon": "-77.3197021484375",
            "timezone": "-5"
        },
        {
            "name": "Norfolk Intl ",
            "city": "Norfolk",
            "country": "United States",
            "IATA": "ORF",
            "ICAO": "KORF",
            "lat": "36.89459991455078",
            "lon": "-76.20120239257812",
            "timezone": "-5"
        },
        {
            "name": "Savannah Hilton Head Intl ",
            "city": "Savannah",
            "country": "United States",
            "IATA": "SAV",
            "ICAO": "KSAV",
            "lat": "32.12760162",
            "lon": "-81.20210266",
            "timezone": "-5"
        },
        {
            "name": "St Petersburg Clearwater Intl ",
            "city": "St. Petersburg",
            "country": "United States",
            "IATA": "PIE",
            "ICAO": "KPIE",
            "lat": "27.91020012",
            "lon": "-82.68740082",
            "timezone": "-5"
        },
        {
            "name": "San Antonio Intl ",
            "city": "San Antonio",
            "country": "United States",
            "IATA": "SAT",
            "ICAO": "KSAT",
            "lat": "29.533700942993164",
            "lon": "-98.46980285644531",
            "timezone": "-6"
        },
        {
            "name": "Greater Rochester Intl ",
            "city": "Rochester",
            "country": "United States",
            "IATA": "ROC",
            "ICAO": "KROC",
            "lat": "43.118900299072266",
            "lon": "-77.67240142822266",
            "timezone": "-5"
        },
        {
            "name": "Raleigh Durham Intl ",
            "city": "Raleigh-durham",
            "country": "United States",
            "IATA": "RDU",
            "ICAO": "KRDU",
            "lat": "35.877601623535156",
            "lon": "-78.7874984741211",
            "timezone": "-5"
        },
        {
            "name": "James M Cox Dayton Intl ",
            "city": "Dayton",
            "country": "United States",
            "IATA": "DAY",
            "ICAO": "KDAY",
            "lat": "39.902400970458984",
            "lon": "-84.21939849853516",
            "timezone": "-5"
        },
        {
            "name": "Niagara Falls Intl ",
            "city": "Niagara Falls",
            "country": "United States",
            "IATA": "IAG",
            "ICAO": "KIAG",
            "lat": "43.1072998046875",
            "lon": "-78.94619750976562",
            "timezone": "-5"
        },
        {
            "name": "Newport News Williamsburg Intl ",
            "city": "Newport News",
            "country": "United States",
            "IATA": "PHF",
            "ICAO": "KPHF",
            "lat": "37.13190079",
            "lon": "-76.49299622",
            "timezone": "-5"
        },
        {
            "name": "Tucson Intl ",
            "city": "Tucson",
            "country": "United States",
            "IATA": "TUS",
            "ICAO": "KTUS",
            "lat": "32.1161003112793",
            "lon": "-110.94100189208984",
            "timezone": "-7"
        },
        {
            "name": "Tampa Intl ",
            "city": "Tampa",
            "country": "United States",
            "IATA": "TPA",
            "ICAO": "KTPA",
            "lat": "27.975500106811523",
            "lon": "-82.533203125",
            "timezone": "-5"
        },
        {
            "name": "Midland Intl ",
            "city": "Midland",
            "country": "United States",
            "IATA": "MAF",
            "ICAO": "KMAF",
            "lat": "31.9424991607666",
            "lon": "-102.2020034790039",
            "timezone": "-6"
        },
        {
            "name": "Austin Straubel Intl ",
            "city": "Green Bay",
            "country": "United States",
            "IATA": "GRB",
            "ICAO": "KGRB",
            "lat": "44.48509979248047",
            "lon": "-88.12960052490234",
            "timezone": "-6"
        },
        {
            "name": "Sloulin Field Intl ",
            "city": "Williston",
            "country": "United States",
            "IATA": "ISN",
            "ICAO": "KISN",
            "lat": "48.177898407",
            "lon": "-103.641998291",
            "timezone": "-6"
        },
        {
            "name": "Stewart Intl ",
            "city": "Newburgh",
            "country": "United States",
            "IATA": "SWF",
            "ICAO": "KSWF",
            "lat": "41.50410079956055",
            "lon": "-74.10479736328125",
            "timezone": "-5"
        },
        {
            "name": "Baudette Intl ",
            "city": "Baudette",
            "country": "United States",
            "IATA": "BDE",
            "ICAO": "KBDE",
            "lat": "48.7284011841",
            "lon": "-94.612197876",
            "timezone": "-6"
        },
        {
            "name": "Dallas Fort Worth Intl ",
            "city": "Dallas-Fort Worth",
            "country": "United States",
            "IATA": "DFW",
            "ICAO": "KDFW",
            "lat": "32.896801",
            "lon": "-97.038002",
            "timezone": "-6"
        },
        {
            "name": "Melbourne Intl ",
            "city": "Melbourne",
            "country": "United States",
            "IATA": "MLB",
            "ICAO": "KMLB",
            "lat": "28.102800369262695",
            "lon": "-80.64530181884766",
            "timezone": "-5"
        },
        {
            "name": "Austin Bergstrom Intl ",
            "city": "Austin",
            "country": "United States",
            "IATA": "AUS",
            "ICAO": "KAUS",
            "lat": "30.194499969482422",
            "lon": "-97.6698989868164",
            "timezone": "-6"
        },
        {
            "name": "Rickenbacker Intl ",
            "city": "Columbus",
            "country": "United States",
            "IATA": "LCK",
            "ICAO": "KLCK",
            "lat": "39.813801",
            "lon": "-82.927803",
            "timezone": "-5"
        },
        {
            "name": "Sawyer Intl ",
            "city": "Gwinn",
            "country": "United States",
            "IATA": "MQT",
            "ICAO": "KSAW",
            "lat": "46.353599548300004",
            "lon": "-87.395401001",
            "timezone": "-5"
        },
        {
            "name": "St Louis Lambert Intl ",
            "city": "St. Louis",
            "country": "United States",
            "IATA": "STL",
            "ICAO": "KSTL",
            "lat": "38.748697",
            "lon": "-90.370003",
            "timezone": "-6"
        },
        {
            "name": "Hartsfield Jackson Atlanta Intl ",
            "city": "Atlanta",
            "country": "United States",
            "IATA": "ATL",
            "ICAO": "KATL",
            "lat": "33.6367",
            "lon": "-84.428101",
            "timezone": "-5"
        },
        {
            "name": "Gerald R. Ford Intl ",
            "city": "Grand Rapids",
            "country": "United States",
            "IATA": "GRR",
            "ICAO": "KGRR",
            "lat": "42.88079834",
            "lon": "-85.52279663",
            "timezone": "-5"
        },
        {
            "name": "Fresno Yosemite Intl ",
            "city": "Fresno",
            "country": "United States",
            "IATA": "FAT",
            "ICAO": "KFAT",
            "lat": "36.77619934082031",
            "lon": "-119.71800231933594",
            "timezone": "-8"
        },
        {
            "name": "Nashville Intl ",
            "city": "Nashville",
            "country": "United States",
            "IATA": "BNA",
            "ICAO": "KBNA",
            "lat": "36.1245002746582",
            "lon": "-86.6781997680664",
            "timezone": "-6"
        },
        {
            "name": "Laredo Intl ",
            "city": "Laredo",
            "country": "United States",
            "IATA": "LRD",
            "ICAO": "KLRD",
            "lat": "27.543800354003906",
            "lon": "-99.46160125732422",
            "timezone": "-6"
        },
        {
            "name": "La Guardia Intl",
            "city": "New York",
            "country": "United States",
            "IATA": "LGA",
            "ICAO": "KLGA",
            "lat": "40.77719879",
            "lon": "-73.87259674",
            "timezone": "-5"
        },
        {
            "name": "Calexico Intl ",
            "city": "Calexico",
            "country": "United States",
            "IATA": "CXL",
            "ICAO": "KCXL",
            "lat": "32.6694984436",
            "lon": "-115.513000488",
            "timezone": "-8"
        },
        {
            "name": "Burlington Intl ",
            "city": "Burlington",
            "country": "United States",
            "IATA": "BTV",
            "ICAO": "KBTV",
            "lat": "44.471900939899996",
            "lon": "-73.15329742429999",
            "timezone": "-5"
        },
        {
            "name": "Jacksonville Intl ",
            "city": "Jacksonville",
            "country": "United States",
            "IATA": "JAX",
            "ICAO": "KJAX",
            "lat": "30.49410057067871",
            "lon": "-81.68789672851562",
            "timezone": "-5"
        },
        {
            "name": "Washington Dulles Intl ",
            "city": "Washington",
            "country": "United States",
            "IATA": "IAD",
            "ICAO": "KIAD",
            "lat": "38.94449997",
            "lon": "-77.45580292",
            "timezone": "-5"
        },
        {
            "name": "General Mitchell Intl ",
            "city": "Milwaukee",
            "country": "United States",
            "IATA": "MKE",
            "ICAO": "KMKE",
            "lat": "42.947200775146484",
            "lon": "-87.89659881591797",
            "timezone": "-6"
        },
        {
            "name": "Portland Intl ",
            "city": "Portland",
            "country": "United States",
            "IATA": "PDX",
            "ICAO": "KPDX",
            "lat": "45.58869934",
            "lon": "-122.5979996",
            "timezone": "-8"
        },
        {
            "name": "Palm Beach Intl ",
            "city": "West Palm Beach",
            "country": "United States",
            "IATA": "PBI",
            "ICAO": "KPBI",
            "lat": "26.68320083618164",
            "lon": "-80.09559631347656",
            "timezone": "-5"
        },
        {
            "name": "Fort Worth Meacham Intl ",
            "city": "Fort Worth",
            "country": "United States",
            "IATA": "FTW",
            "ICAO": "KFTW",
            "lat": "32.819801",
            "lon": "-97.362396",
            "timezone": "-6"
        },
        {
            "name": "Ogdensburg Intl ",
            "city": "Ogdensburg",
            "country": "United States",
            "IATA": "OGS",
            "ICAO": "KOGS",
            "lat": "44.6819000244",
            "lon": "-75.46549987790002",
            "timezone": "-5"
        },
        {
            "name": "Boeing Field King County Intl ",
            "city": "Seattle",
            "country": "United States",
            "IATA": "BFI",
            "ICAO": "KBFI",
            "lat": "47.529998779296875",
            "lon": "-122.302001953125",
            "timezone": "-8"
        },
        {
            "name": "Daniel K Inouye Intl ",
            "city": "Honolulu",
            "country": "United States",
            "IATA": "HNL",
            "ICAO": "PHNL",
            "lat": "21.32062",
            "lon": "-157.924228",
            "timezone": "-10"
        },
        {
            "name": "Des Moines Intl ",
            "city": "Des Moines",
            "country": "United States",
            "IATA": "DSM",
            "ICAO": "KDSM",
            "lat": "41.534000396728516",
            "lon": "-93.66310119628906",
            "timezone": "-6"
        },
        {
            "name": "San Diego Intl ",
            "city": "San Diego",
            "country": "United States",
            "IATA": "SAN",
            "ICAO": "KSAN",
            "lat": "32.7336006165",
            "lon": "-117.190002441",
            "timezone": "-8"
        },
        {
            "name": "Ontario Intl ",
            "city": "Ontario",
            "country": "United States",
            "IATA": "ONT",
            "ICAO": "KONT",
            "lat": "34.055999755859375",
            "lon": "-117.60099792480469",
            "timezone": "-8"
        },
        {
            "name": "Roswell Intl Air Center ",
            "city": "Roswell",
            "country": "United States",
            "IATA": "ROW",
            "ICAO": "KROW",
            "lat": "33.30160140991211",
            "lon": "-104.53099822998047",
            "timezone": "-7"
        },
        {
            "name": "Brownsville South Padre Island Intl ",
            "city": "Brownsville",
            "country": "United States",
            "IATA": "BRO",
            "ICAO": "KBRO",
            "lat": "25.90679931640625",
            "lon": "-97.4259033203125",
            "timezone": "-6"
        },
        {
            "name": "Corpus Christi Intl ",
            "city": "Corpus Christi",
            "country": "United States",
            "IATA": "CRP",
            "ICAO": "KCRP",
            "lat": "27.77039909362793",
            "lon": "-97.5011978149414",
            "timezone": "-6"
        },
        {
            "name": "Syracuse Hancock Intl ",
            "city": "Syracuse",
            "country": "United States",
            "IATA": "SYR",
            "ICAO": "KSYR",
            "lat": "43.11119842529297",
            "lon": "-76.1063003540039",
            "timezone": "-5"
        },
        {
            "name": "Chicago Midway Intl ",
            "city": "Chicago",
            "country": "United States",
            "IATA": "MDW",
            "ICAO": "KMDW",
            "lat": "41.785999",
            "lon": "-87.752403",
            "timezone": "-6"
        },
        {
            "name": "Norman Y. Mineta San Jose Intl ",
            "city": "San Jose",
            "country": "United States",
            "IATA": "SJC",
            "ICAO": "KSJC",
            "lat": "37.362598",
            "lon": "-121.929001",
            "timezone": "-8"
        },
        {
            "name": "Denver Intl ",
            "city": "Denver",
            "country": "United States",
            "IATA": "DEN",
            "ICAO": "KDEN",
            "lat": "39.861698150635",
            "lon": "-104.672996521",
            "timezone": "-7"
        },
        {
            "name": "Philadelphia Intl ",
            "city": "Philadelphia",
            "country": "United States",
            "IATA": "PHL",
            "ICAO": "KPHL",
            "lat": "39.87189865112305",
            "lon": "-75.24109649658203",
            "timezone": "-5"
        },
        {
            "name": "John Glenn Columbus Intl ",
            "city": "Columbus",
            "country": "United States",
            "IATA": "CMH",
            "ICAO": "KCMH",
            "lat": "39.998001",
            "lon": "-82.891899",
            "timezone": "-5"
        },
        {
            "name": "Plattsburgh Intl ",
            "city": "Plattsburgh",
            "country": "United States",
            "IATA": "PBG",
            "ICAO": "KPBG",
            "lat": "44.650901794433594",
            "lon": "-73.46810150146484",
            "timezone": "-5"
        },
        {
            "name": "Ted Stevens Anchorage Intl ",
            "city": "Anchorage",
            "country": "United States",
            "IATA": "ANC",
            "ICAO": "PANC",
            "lat": "61.174400329589844",
            "lon": "-149.99600219726562",
            "timezone": "-9"
        },
        {
            "name": "Bellingham Intl ",
            "city": "Bellingham",
            "country": "United States",
            "IATA": "BLI",
            "ICAO": "KBLI",
            "lat": "48.79280090332031",
            "lon": "-122.53800201416016",
            "timezone": "-8"
        },
        {
            "name": "Nogales Intl ",
            "city": "Nogales",
            "country": "United States",
            "IATA": "OLS",
            "ICAO": "KOLS",
            "lat": "31.4177",
            "lon": "-110.848",
            "timezone": "-7"
        },
        {
            "name": "Del Rio Intl ",
            "city": "Del Rio",
            "country": "United States",
            "IATA": "DRT",
            "ICAO": "KDRT",
            "lat": "29.3742008209",
            "lon": "-100.927001953",
            "timezone": "-6"
        },
        {
            "name": "Southwest Florida Intl ",
            "city": "Fort Myers",
            "country": "United States",
            "IATA": "RSW",
            "ICAO": "KRSW",
            "lat": "26.53619956970215",
            "lon": "-81.75520324707031",
            "timezone": "-5"
        },
        {
            "name": "John F Kennedy Intl ",
            "city": "New York",
            "country": "United States",
            "IATA": "JFK",
            "ICAO": "KJFK",
            "lat": "40.63980103",
            "lon": "-73.77890015",
            "timezone": "-5"
        },
        {
            "name": "Charleston Air Force Base-Intl ",
            "city": "Charleston",
            "country": "United States",
            "IATA": "CHS",
            "ICAO": "KCHS",
            "lat": "32.89860153",
            "lon": "-80.04049683",
            "timezone": "-5"
        },
        {
            "name": "Reno Tahoe Intl ",
            "city": "Reno",
            "country": "United States",
            "IATA": "RNO",
            "ICAO": "KRNO",
            "lat": "39.49909973144531",
            "lon": "-119.76799774169922",
            "timezone": "-8"
        },
        {
            "name": "Ketchikan Intl ",
            "city": "Ketchikan",
            "country": "United States",
            "IATA": "KTN",
            "ICAO": "PAKT",
            "lat": "55.35559845",
            "lon": "-131.7140045",
            "timezone": "-9"
        },
        {
            "name": "Birmingham-Shuttlesworth Intl ",
            "city": "Birmingham",
            "country": "United States",
            "IATA": "BHM",
            "ICAO": "KBHM",
            "lat": "33.56290054",
            "lon": "-86.75350189",
            "timezone": "-6"
        },
        {
            "name": "Sacramento Intl ",
            "city": "Sacramento",
            "country": "United States",
            "IATA": "SMF",
            "ICAO": "KSMF",
            "lat": "38.69540023803711",
            "lon": "-121.59100341796875",
            "timezone": "-8"
        },
        {
            "name": "Buffalo Niagara Intl ",
            "city": "Buffalo",
            "country": "United States",
            "IATA": "BUF",
            "ICAO": "KBUF",
            "lat": "42.94049835",
            "lon": "-78.73220062",
            "timezone": "-5"
        },
        {
            "name": "Bradley Intl ",
            "city": "Windsor Locks",
            "country": "United States",
            "IATA": "BDL",
            "ICAO": "KBDL",
            "lat": "41.9388999939",
            "lon": "-72.68319702149999",
            "timezone": "-5"
        },
        {
            "name": "Mc Allen Miller Intl ",
            "city": "Mcallen",
            "country": "United States",
            "IATA": "MFE",
            "ICAO": "KMFE",
            "lat": "26.17580032",
            "lon": "-98.23860168",
            "timezone": "-6"
        },
        {
            "name": "Lubbock Preston Smith Intl ",
            "city": "Lubbock",
            "country": "United States",
            "IATA": "LBB",
            "ICAO": "KLBB",
            "lat": "33.663601",
            "lon": "-101.822998",
            "timezone": "-6"
        },
        {
            "name": "Chicago O'Hare Intl ",
            "city": "Chicago",
            "country": "United States",
            "IATA": "ORD",
            "ICAO": "KORD",
            "lat": "41.9786",
            "lon": "-87.9048",
            "timezone": "-6"
        },
        {
            "name": "Fairbanks Intl ",
            "city": "Fairbanks",
            "country": "United States",
            "IATA": "FAI",
            "ICAO": "PAFA",
            "lat": "64.81510162",
            "lon": "-147.8560028",
            "timezone": "-9"
        },
        {
            "name": "Watertown Intl ",
            "city": "Watertown",
            "country": "United States",
            "IATA": "ART",
            "ICAO": "KART",
            "lat": "43.99190139770508",
            "lon": "-76.02169799804688",
            "timezone": "-5"
        },
        {
            "name": "Palm Springs Intl ",
            "city": "Palm Springs",
            "country": "United States",
            "IATA": "PSP",
            "ICAO": "KPSP",
            "lat": "33.8297004699707",
            "lon": "-116.50700378417969",
            "timezone": "-8"
        },
        {
            "name": "Rick Husband Amarillo Intl ",
            "city": "Amarillo",
            "country": "United States",
            "IATA": "AMA",
            "ICAO": "KAMA",
            "lat": "35.219398",
            "lon": "-101.706001",
            "timezone": "-6"
        },
        {
            "name": "Wilmington Intl ",
            "city": "Wilmington",
            "country": "United States",
            "IATA": "ILM",
            "ICAO": "KILM",
            "lat": "34.270599365234375",
            "lon": "-77.90260314941406",
            "timezone": "-5"
        },
        {
            "name": "Baltimore/Washington Intl Thurgood Marshall ",
            "city": "Baltimore",
            "country": "United States",
            "IATA": "BWI",
            "ICAO": "KBWI",
            "lat": "39.1754",
            "lon": "-76.668297",
            "timezone": "-5"
        },
        {
            "name": "Alexandria Intl ",
            "city": "Alexandria",
            "country": "United States",
            "IATA": "AEX",
            "ICAO": "KAEX",
            "lat": "31.32740020751953",
            "lon": "-92.54979705810547",
            "timezone": "-6"
        },
        {
            "name": "Tulsa Intl ",
            "city": "Tulsa",
            "country": "United States",
            "IATA": "TUL",
            "ICAO": "KTUL",
            "lat": "36.19839859008789",
            "lon": "-95.88809967041016",
            "timezone": "-6"
        },
        {
            "name": "Minneapolis-St Paul Intl/Wold-Chamberlain ",
            "city": "Minneapolis",
            "country": "United States",
            "IATA": "MSP",
            "ICAO": "KMSP",
            "lat": "44.882",
            "lon": "-93.221802",
            "timezone": "-6"
        },
        {
            "name": "Louis Armstrong New Orleans Intl ",
            "city": "New Orleans",
            "country": "United States",
            "IATA": "MSY",
            "ICAO": "KMSY",
            "lat": "29.99340057373047",
            "lon": "-90.25800323486328",
            "timezone": "-6"
        },
        {
            "name": "Portland Intl Jetport ",
            "city": "Portland",
            "country": "United States",
            "IATA": "PWM",
            "ICAO": "KPWM",
            "lat": "43.64619827",
            "lon": "-70.30930328",
            "timezone": "-5"
        },
        {
            "name": "Albany Intl ",
            "city": "Albany",
            "country": "United States",
            "IATA": "ALB",
            "ICAO": "KALB",
            "lat": "42.74829864501953",
            "lon": "-73.80169677734375",
            "timezone": "-5"
        },
        {
            "name": "Casper-Natrona County Intl ",
            "city": "Casper",
            "country": "United States",
            "IATA": "CPR",
            "ICAO": "KCPR",
            "lat": "42.908001",
            "lon": "-106.463997",
            "timezone": "-7"
        },
        {
            "name": "Key West Intl ",
            "city": "Key West",
            "country": "United States",
            "IATA": "EYW",
            "ICAO": "KEYW",
            "lat": "24.556100845336914",
            "lon": "-81.75959777832031",
            "timezone": "-5"
        },
        {
            "name": "Charlotte Douglas Intl ",
            "city": "Charlotte",
            "country": "United States",
            "IATA": "CLT",
            "ICAO": "KCLT",
            "lat": "35.2140007019043",
            "lon": "-80.94309997558594",
            "timezone": "-5"
        },
        {
            "name": "McCarran Intl ",
            "city": "Las Vegas",
            "country": "United States",
            "IATA": "LAS",
            "ICAO": "KLAS",
            "lat": "36.08010101",
            "lon": "-115.1520004",
            "timezone": "-8"
        },
        {
            "name": "Orlando Intl ",
            "city": "Orlando",
            "country": "United States",
            "IATA": "MCO",
            "ICAO": "KMCO",
            "lat": "28.429399490356445",
            "lon": "-81.30899810791016",
            "timezone": "-5"
        },
        {
            "name": "Great Falls Intl ",
            "city": "Great Falls",
            "country": "United States",
            "IATA": "GTF",
            "ICAO": "KGTF",
            "lat": "47.48199844",
            "lon": "-111.3710022",
            "timezone": "-7"
        },
        {
            "name": "Husein Sastranegara Intl ",
            "city": "Bandung",
            "country": "Indonesia",
            "IATA": "BDO",
            "ICAO": "WICC",
            "lat": "-6.900629997253418",
            "lon": "107.57599639892578",
            "timezone": "7"
        },
        {
            "name": "Adi Sutjipto Intl ",
            "city": "Yogyakarta",
            "country": "Indonesia",
            "IATA": "JOG",
            "ICAO": "WARJ",
            "lat": "-7.788179874420166",
            "lon": "110.43199920654297",
            "timezone": "7"
        },
        {
            "name": "Hang Nadim Intl ",
            "city": "Batam",
            "country": "Indonesia",
            "IATA": "BTH",
            "ICAO": "WIDD",
            "lat": "1.12102997303",
            "lon": "104.119003296",
            "timezone": "7"
        },
        {
            "name": "Raja Haji Fisabilillah Intl ",
            "city": "Tanjung Pinang",
            "country": "Indonesia",
            "IATA": "TNJ",
            "ICAO": "WIDN",
            "lat": "0.922683000565",
            "lon": "104.531997681",
            "timezone": "7"
        },
        {
            "name": "Juanda Intl ",
            "city": "Surabaya",
            "country": "Indonesia",
            "IATA": "SUB",
            "ICAO": "WARR",
            "lat": "-7.3798298835754395",
            "lon": "112.78700256347656",
            "timezone": "7"
        },
        {
            "name": "Incheon Intl ",
            "city": "Seoul",
            "country": "South Korea",
            "IATA": "ICN",
            "ICAO": "RKSI",
            "lat": "37.46910095214844",
            "lon": "126.45099639892578",
            "timezone": "9"
        },
        {
            "name": "Chiang Mai Intl ",
            "city": "Chiang Mai",
            "country": "Thailand",
            "IATA": "CNX",
            "ICAO": "VTCC",
            "lat": "18.766799926799997",
            "lon": "98.962600708",
            "timezone": "7"
        },
        {
            "name": "Chiang Rai Intl ",
            "city": "Chiang Rai",
            "country": "Thailand",
            "IATA": "CEI",
            "ICAO": "VTCT",
            "lat": "19.952299118",
            "lon": "99.88289642330001",
            "timezone": "7"
        },
        {
            "name": "Ngurah Rai (Bali) Intl ",
            "city": "Denpasar",
            "country": "Indonesia",
            "IATA": "DPS",
            "ICAO": "WADD",
            "lat": "-8.7481698989868",
            "lon": "115.16699981689",
            "timezone": "8"
        },
        {
            "name": "Eleftherios Venizelos Intl ",
            "city": "Athens",
            "country": "Greece",
            "IATA": "ATH",
            "ICAO": "LGAV",
            "lat": "37.9364013672",
            "lon": "23.9444999695",
            "timezone": "2"
        },
        {
            "name": "Chubu Centrair Intl ",
            "city": "Nagoya",
            "country": "Japan",
            "IATA": "NGO",
            "ICAO": "RJGG",
            "lat": "34.8583984375",
            "lon": "136.80499267578125",
            "timezone": "9"
        },
        {
            "name": "Daytona Beach Intl ",
            "city": "Daytona Beach",
            "country": "United States",
            "IATA": "DAB",
            "ICAO": "KDAB",
            "lat": "29.179899",
            "lon": "-81.058098",
            "timezone": "-5"
        },
        {
            "name": "Liepāja Intl ",
            "city": "Liepaja",
            "country": "Latvia",
            "IATA": "LPX",
            "ICAO": "EVLA",
            "lat": "56.51750183105469",
            "lon": "21.096900939941406",
            "timezone": "2"
        },
        {
            "name": "Riga Intl ",
            "city": "Riga",
            "country": "Latvia",
            "IATA": "RIX",
            "ICAO": "EVRA",
            "lat": "56.92359924316406",
            "lon": "23.971099853515625",
            "timezone": "2"
        },
        {
            "name": "Šiauliai Intl ",
            "city": "Siauliai",
            "country": "Lithuania",
            "IATA": "SQQ",
            "ICAO": "EYSA",
            "lat": "55.89390182495117",
            "lon": "23.395000457763672",
            "timezone": "2"
        },
        {
            "name": "Kaunas Intl ",
            "city": "Kaunas",
            "country": "Lithuania",
            "IATA": "KUN",
            "ICAO": "EYKA",
            "lat": "54.96390151977539",
            "lon": "24.084800720214844",
            "timezone": "2"
        },
        {
            "name": "Palanga Intl ",
            "city": "Palanga",
            "country": "Lithuania",
            "IATA": "PLQ",
            "ICAO": "EYPA",
            "lat": "55.973201751708984",
            "lon": "21.093900680541992",
            "timezone": "2"
        },
        {
            "name": "Vilnius Intl ",
            "city": "Vilnius",
            "country": "Lithuania",
            "IATA": "VNO",
            "ICAO": "EYVI",
            "lat": "54.634102",
            "lon": "25.285801",
            "timezone": "2"
        },
        {
            "name": "Zvartnots Intl ",
            "city": "Yerevan",
            "country": "Armenia",
            "IATA": "EVN",
            "ICAO": "UDYZ",
            "lat": "40.1473007202",
            "lon": "44.3959007263",
            "timezone": "4"
        },
        {
            "name": "Assab Intl ",
            "city": "Assab",
            "country": "Eritrea",
            "IATA": "ASA",
            "ICAO": "HHSB",
            "lat": "13.071800231933594",
            "lon": "42.64500045776367",
            "timezone": "3"
        },
        {
            "name": "Asmara Intl ",
            "city": "Asmara",
            "country": "Eritrea",
            "IATA": "ASM",
            "ICAO": "HHAS",
            "lat": "15.291899681091309",
            "lon": "38.910701751708984",
            "timezone": "3"
        },
        {
            "name": "Massawa Intl ",
            "city": "Massawa",
            "country": "Eritrea",
            "IATA": "MSW",
            "ICAO": "HHMS",
            "lat": "15.670000076293945",
            "lon": "39.37009811401367",
            "timezone": "3"
        },
        {
            "name": "Yasser Arafat Intl ",
            "city": "Gaza",
            "country": "Palestine",
            "IATA": "GZA",
            "ICAO": "LVGZ",
            "lat": "31.24640083313",
            "lon": "34.276100158691",
            "timezone": "2"
        },
        {
            "name": "Batumi Intl ",
            "city": "Batumi",
            "country": "Georgia",
            "IATA": "BUS",
            "ICAO": "UGSB",
            "lat": "41.6102981567",
            "lon": "41.5997009277",
            "timezone": "4"
        },
        {
            "name": "Tbilisi Intl ",
            "city": "Tbilisi",
            "country": "Georgia",
            "IATA": "TBS",
            "ICAO": "UGTB",
            "lat": "41.6692008972",
            "lon": "44.95470047",
            "timezone": "4"
        },
        {
            "name": "Mukalla Intl ",
            "city": "Mukalla",
            "country": "Yemen",
            "IATA": "RIY",
            "ICAO": "OYRN",
            "lat": "14.662599563598633",
            "lon": "49.375",
            "timezone": "3"
        },
        {
            "name": "Ta'izz Intl ",
            "city": "Taiz",
            "country": "Yemen",
            "IATA": "TAI",
            "ICAO": "OYTZ",
            "lat": "13.6859998703",
            "lon": "44.139099121099996",
            "timezone": "3"
        },
        {
            "name": "Hodeidah Intl ",
            "city": "Hodeidah",
            "country": "Yemen",
            "IATA": "HOD",
            "ICAO": "OYHD",
            "lat": "14.753000259399414",
            "lon": "42.97629928588867",
            "timezone": "3"
        },
        {
            "name": "Aden Intl ",
            "city": "Aden",
            "country": "Yemen",
            "IATA": "ADE",
            "ICAO": "OYAA",
            "lat": "12.829500198364258",
            "lon": "45.02880096435547",
            "timezone": "3"
        },
        {
            "name": "Al Ghaidah Intl ",
            "city": "Al Ghaidah Intl",
            "country": "Yemen",
            "IATA": "AAY",
            "ICAO": "OYGD",
            "lat": "16.191699981689453",
            "lon": "52.17499923706055",
            "timezone": "3"
        },
        {
            "name": "Sana'a Intl ",
            "city": "Sanaa",
            "country": "Yemen",
            "IATA": "SAH",
            "ICAO": "OYSN",
            "lat": "15.476300239562988",
            "lon": "44.21969985961914",
            "timezone": "3"
        },
        {
            "name": "Socotra Intl ",
            "city": "Socotra",
            "country": "Yemen",
            "IATA": "SCT",
            "ICAO": "OYSQ",
            "lat": "12.63070011138916",
            "lon": "53.905799865722656",
            "timezone": "3"
        },
        {
            "name": "Ministro Pistarini Intl ",
            "city": "Buenos Aires",
            "country": "Argentina",
            "IATA": "EZE",
            "ICAO": "SAEZ",
            "lat": "-34.8222",
            "lon": "-58.5358",
            "timezone": "-3"
        },
        {
            "name": "Erbil Intl ",
            "city": "Erbil",
            "country": "Iraq",
            "IATA": "EBL",
            "ICAO": "ORER",
            "lat": "36.23759841918945",
            "lon": "43.963199615478516",
            "timezone": "3"
        },
        {
            "name": "Kansai Intl ",
            "city": "Osaka",
            "country": "Japan",
            "IATA": "KIX",
            "ICAO": "RJBB",
            "lat": "34.42729949951172",
            "lon": "135.24400329589844",
            "timezone": "9"
        },
        {
            "name": "Darwin Intl ",
            "city": "Darwin",
            "country": "Australia",
            "IATA": "DRW",
            "ICAO": "YPDN",
            "lat": "-12.41469955444336",
            "lon": "130.8769989013672",
            "timezone": "9.5"
        },
        {
            "name": "Piedmont Triad Intl ",
            "city": "Greensboro",
            "country": "United States",
            "IATA": "GSO",
            "ICAO": "KGSO",
            "lat": "36.097801208496094",
            "lon": "-79.93730163574219",
            "timezone": "-5"
        },
        {
            "name": "Louisville Intl Standiford Field",
            "city": "Louisville",
            "country": "United States",
            "IATA": "SDF",
            "ICAO": "KSDF",
            "lat": "38.1744",
            "lon": "-85.736",
            "timezone": "-5"
        },
        {
            "name": "Albuquerque Intl Sunport",
            "city": "Albuquerque",
            "country": "United States",
            "IATA": "ABQ",
            "ICAO": "KABQ",
            "lat": "35.040199",
            "lon": "-106.609001",
            "timezone": "-7"
        },
        {
            "name": "Billings Logan Intl ",
            "city": "Billings",
            "country": "United States",
            "IATA": "BIL",
            "ICAO": "KBIL",
            "lat": "45.807701110839844",
            "lon": "-108.54299926757812",
            "timezone": "-7"
        },
        {
            "name": "Mundo Maya Intl ",
            "city": "Flores",
            "country": "Guatemala",
            "IATA": "FRS",
            "ICAO": "MGTK",
            "lat": "16.913799285899998",
            "lon": "-89.86640167239999",
            "timezone": "-6"
        },
        {
            "name": "Chicago Rockford Intl ",
            "city": "Rockford",
            "country": "United States",
            "IATA": "RFD",
            "ICAO": "KRFD",
            "lat": "42.19540023803711",
            "lon": "-89.09719848632812",
            "timezone": "-6"
        },
        {
            "name": "Domodedovo Intl ",
            "city": "Moscow",
            "country": "Russia",
            "IATA": "DME",
            "ICAO": "UUDD",
            "lat": "55.40879821777344",
            "lon": "37.90629959106445",
            "timezone": "3"
        },
        {
            "name": "Sanya Phoenix Intl ",
            "city": "Sanya",
            "country": "China",
            "IATA": "SYX",
            "ICAO": "ZJSY",
            "lat": "18.302900314331055",
            "lon": "109.41200256347656",
            "timezone": "8"
        },
        {
            "name": "Greenville Spartanburg Intl ",
            "city": "Greenville",
            "country": "United States",
            "IATA": "GSP",
            "ICAO": "KGSP",
            "lat": "34.8956985474",
            "lon": "-82.2189025879",
            "timezone": "-5"
        },
        {
            "name": "Gulfport Biloxi Intl ",
            "city": "Gulfport",
            "country": "United States",
            "IATA": "GPT",
            "ICAO": "KGPT",
            "lat": "30.40730094909668",
            "lon": "-89.07009887695312",
            "timezone": "-6"
        },
        {
            "name": "Kalamazoo Battle Creek Intl ",
            "city": "Kalamazoo",
            "country": "United States",
            "IATA": "AZO",
            "ICAO": "KAZO",
            "lat": "42.234901428222656",
            "lon": "-85.5521011352539",
            "timezone": "-5"
        },
        {
            "name": "Fort Wayne Intl ",
            "city": "Fort Wayne",
            "country": "United States",
            "IATA": "FWA",
            "ICAO": "KFWA",
            "lat": "40.97850037",
            "lon": "-85.19509888",
            "timezone": "-5"
        },
        {
            "name": "General Wayne A. Downing Peoria Intl ",
            "city": "Peoria",
            "country": "United States",
            "IATA": "PIA",
            "ICAO": "KPIA",
            "lat": "40.664199829100006",
            "lon": "-89.6932983398",
            "timezone": "-6"
        },
        {
            "name": "Appleton Intl ",
            "city": "Appleton",
            "country": "United States",
            "IATA": "ATW",
            "ICAO": "KATW",
            "lat": "44.258098602299995",
            "lon": "-88.5190963745",
            "timezone": "-6"
        },
        {
            "name": "Rochester Intl ",
            "city": "Rochester",
            "country": "United States",
            "IATA": "RST",
            "ICAO": "KRST",
            "lat": "43.90829849243164",
            "lon": "-92.5",
            "timezone": "-6"
        },
        {
            "name": "Sharm El Sheikh Intl ",
            "city": "Sharm El Sheikh",
            "country": "Egypt",
            "IATA": "SSH",
            "ICAO": "HESH",
            "lat": "27.9773006439",
            "lon": "34.3950004578",
            "timezone": "2"
        },
        {
            "name": "Jomo Kenyatta Intl ",
            "city": "Nairobi",
            "country": "Kenya",
            "IATA": "NBO",
            "ICAO": "HKJK",
            "lat": "-1.31923997402",
            "lon": "36.9277992249",
            "timezone": "3"
        },
        {
            "name": "Sarasota Bradenton Intl ",
            "city": "Sarasota",
            "country": "United States",
            "IATA": "SRQ",
            "ICAO": "KSRQ",
            "lat": "27.39539909362793",
            "lon": "-82.55439758300781",
            "timezone": "-5"
        },
        {
            "name": "L.F. Wade Intl Intl ",
            "city": "Bermuda",
            "country": "Bermuda",
            "IATA": "BDA",
            "ICAO": "TXKF",
            "lat": "32.36399841308594",
            "lon": "-64.67870330810547",
            "timezone": "-4"
        },
        {
            "name": "Quad City Intl ",
            "city": "Moline",
            "country": "United States",
            "IATA": "MLI",
            "ICAO": "KMLI",
            "lat": "41.44850158691406",
            "lon": "-90.50749969482422",
            "timezone": "-6"
        },
        {
            "name": "Panama City-Bay Co Intl ",
            "city": "Panama City",
            "country": "United States",
            "IATA": "PFN",
            "ICAO": "KPFN",
            "lat": "30.212099",
            "lon": "-85.6828",
            "timezone": "-6"
        },
        {
            "name": "Honiara Intl ",
            "city": "Honiara",
            "country": "Solomon Islands",
            "IATA": "HIR",
            "ICAO": "AGGH",
            "lat": "-9.4280004501343",
            "lon": "160.05499267578",
            "timezone": "11"
        },
        {
            "name": "Faa'a Intl ",
            "city": "Papeete",
            "country": "French Polynesia",
            "IATA": "PPT",
            "ICAO": "NTAA",
            "lat": "-17.553699",
            "lon": "-149.606995",
            "timezone": "-10"
        },
        {
            "name": "Nauru Intl ",
            "city": "Nauru",
            "country": "Nauru",
            "IATA": "INU",
            "ICAO": "ANYN",
            "lat": "-0.547458",
            "lon": "166.919006",
            "timezone": "12"
        },
        {
            "name": "Funafuti Intl ",
            "city": "Funafuti",
            "country": "Tuvalu",
            "IATA": "FUN",
            "ICAO": "NGFU",
            "lat": "-8.525",
            "lon": "179.195999",
            "timezone": "12"
        },
        {
            "name": "Bishop Intl ",
            "city": "Flint",
            "country": "United States",
            "IATA": "FNT",
            "ICAO": "KFNT",
            "lat": "42.96540069580078",
            "lon": "-83.74359893798828",
            "timezone": "-5"
        },
        {
            "name": "Francisco Bangoy Intl ",
            "city": "Davao",
            "country": "Philippines",
            "IATA": "DVO",
            "ICAO": "RPMD",
            "lat": "7.1255202293396",
            "lon": "125.64600372314453",
            "timezone": "8"
        },
        {
            "name": "Sihanoukville Intl ",
            "city": "Sihanoukville",
            "country": "Cambodia",
            "IATA": "KOS",
            "ICAO": "VDSV",
            "lat": "10.57970047",
            "lon": "103.637001038",
            "timezone": "7"
        },
        {
            "name": "Rogue Valley Intl Medford ",
            "city": "Medford",
            "country": "United States",
            "IATA": "MFR",
            "ICAO": "KMFR",
            "lat": "42.37419891357422",
            "lon": "-122.87300109863281",
            "timezone": "-8"
        },
        {
            "name": "Hosea Kutako Intl ",
            "city": "Windhoek",
            "country": "Namibia",
            "IATA": "WDH",
            "ICAO": "FYWH",
            "lat": "-22.4799",
            "lon": "17.4709",
            "timezone": "1"
        },
        {
            "name": "Roshchino Intl ",
            "city": "Tyumen",
            "country": "Russia",
            "IATA": "TJM",
            "ICAO": "USTR",
            "lat": "57.189601898199996",
            "lon": "65.3243026733",
            "timezone": "5"
        },
        {
            "name": "Huntsville Intl Carl T Jones Field",
            "city": "Huntsville",
            "country": "United States",
            "IATA": "HSV",
            "ICAO": "KHSV",
            "lat": "34.637199401855",
            "lon": "-86.775100708008",
            "timezone": "-6"
        },
        {
            "name": "Haikou Meilan Intl ",
            "city": "Haikou",
            "country": "China",
            "IATA": "HAK",
            "ICAO": "ZJHK",
            "lat": "19.934900283813477",
            "lon": "110.45899963378906",
            "timezone": "8"
        },
        {
            "name": "Glacier Park Intl ",
            "city": "Kalispell",
            "country": "United States",
            "IATA": "FCA",
            "ICAO": "KGPI",
            "lat": "48.31050109863281",
            "lon": "-114.25599670410156",
            "timezone": "-7"
        },
        {
            "name": "MBS Intl ",
            "city": "Saginaw",
            "country": "United States",
            "IATA": "MBS",
            "ICAO": "KMBS",
            "lat": "43.532901763916016",
            "lon": "-84.07959747314453",
            "timezone": "-5"
        },
        {
            "name": "Baghdad Intl ",
            "city": "Baghdad",
            "country": "Iraq",
            "IATA": "BGW",
            "ICAO": "ORBI",
            "lat": "33.262500762900004",
            "lon": "44.2346000671",
            "timezone": "3"
        },
        {
            "name": "Diosdado Macapagal Intl ",
            "city": "Angeles City",
            "country": "Philippines",
            "IATA": "CRK",
            "ICAO": "RPLC",
            "lat": "15.186",
            "lon": "120.559998",
            "timezone": "8"
        },
        {
            "name": "Chu Lai Intl ",
            "city": "Chu Lai",
            "country": "Vietnam",
            "IATA": "VCL",
            "ICAO": "VVCA",
            "lat": "15.403300285299999",
            "lon": "108.706001282",
            "timezone": "7"
        },
        {
            "name": "Yaoundé Nsimalen Intl ",
            "city": "Yaounde",
            "country": "Cameroon",
            "IATA": "NSI",
            "ICAO": "FKYS",
            "lat": "3.722559928894043",
            "lon": "11.553299903869629",
            "timezone": "1"
        },
        {
            "name": "Conakry Intl ",
            "city": "Conakry",
            "country": "Guinea",
            "IATA": "CKY",
            "ICAO": "GUCY",
            "lat": "9.57689",
            "lon": "-13.612",
            "timezone": "0"
        },
        {
            "name": "Orlando Sanford Intl ",
            "city": "Sanford",
            "country": "United States",
            "IATA": "SFB",
            "ICAO": "KSFB",
            "lat": "28.777599334716797",
            "lon": "-81.23750305175781",
            "timezone": "-5"
        },
        {
            "name": "Muan Intl ",
            "city": "Muan",
            "country": "South Korea",
            "IATA": "MWX",
            "ICAO": "RKJB",
            "lat": "34.991406",
            "lon": "126.382814",
            "timezone": "9"
        },
        {
            "name": "Marsa Alam Intl ",
            "city": "Marsa Alam",
            "country": "Egypt",
            "IATA": "RMF",
            "ICAO": "HEMA",
            "lat": "25.557100296",
            "lon": "34.5836982727",
            "timezone": "2"
        },
        {
            "name": "Laoag Intl ",
            "city": "Laoag",
            "country": "Philippines",
            "IATA": "LAO",
            "ICAO": "RPLI",
            "lat": "18.1781005859375",
            "lon": "120.53199768066406",
            "timezone": "8"
        },
        {
            "name": "Legazpi City Intl ",
            "city": "Legazpi",
            "country": "Philippines",
            "IATA": "LGP",
            "ICAO": "RPLP",
            "lat": "13.1575",
            "lon": "123.735",
            "timezone": "8"
        },
        {
            "name": "Mactan Cebu Intl ",
            "city": "Cebu",
            "country": "Philippines",
            "IATA": "CEB",
            "ICAO": "RPVM",
            "lat": "10.307499885559",
            "lon": "123.97899627686",
            "timezone": "8"
        },
        {
            "name": "Missoula Intl ",
            "city": "Missoula",
            "country": "United States",
            "IATA": "MSO",
            "ICAO": "KMSO",
            "lat": "46.91630173",
            "lon": "-114.0910034",
            "timezone": "-7"
        },
        {
            "name": "Las Cruces Intl ",
            "city": "Las Cruces",
            "country": "United States",
            "IATA": "LRU",
            "ICAO": "KLRU",
            "lat": "32.289398193359375",
            "lon": "-106.9219970703125",
            "timezone": "-7"
        },
        {
            "name": "Nizhny Novgorod Strigino Intl ",
            "city": "Nizhniy Novgorod",
            "country": "Russia",
            "IATA": "GOJ",
            "ICAO": "UWGG",
            "lat": "56.230098724365",
            "lon": "43.784000396729",
            "timezone": "3"
        },
        {
            "name": "Erie Intl Tom Ridge Field",
            "city": "Erie",
            "country": "United States",
            "IATA": "ERI",
            "ICAO": "KERI",
            "lat": "42.0831270134",
            "lon": "-80.1738667488",
            "timezone": "-5"
        },
        {
            "name": "Wilkes Barre Scranton Intl ",
            "city": "Scranton",
            "country": "United States",
            "IATA": "AVP",
            "ICAO": "KAVP",
            "lat": "41.338500976599995",
            "lon": "-75.72339630130001",
            "timezone": "-5"
        },
        {
            "name": "Hector Intl ",
            "city": "Fargo",
            "country": "United States",
            "IATA": "FAR",
            "ICAO": "KFAR",
            "lat": "46.92070007324219",
            "lon": "-96.81580352783203",
            "timezone": "-6"
        },
        {
            "name": "Jieyang Chaoshan Intl ",
            "city": "Shantou",
            "country": "China",
            "IATA": "SWA",
            "ICAO": "ZGOW",
            "lat": "23.552",
            "lon": "116.5033",
            "timezone": "8"
        },
        {
            "name": "Cheddi Jagan Intl ",
            "city": "Georgetown",
            "country": "Guyana",
            "IATA": "GEO",
            "ICAO": "SYCJ",
            "lat": "6.498549938201904",
            "lon": "-58.25410079956055",
            "timezone": "-4"
        },
        {
            "name": "Guarani Intl ",
            "city": "Ciudad del Este",
            "country": "Paraguay",
            "IATA": "AGT",
            "ICAO": "SGES",
            "lat": "-25.454516",
            "lon": "-54.842682",
            "timezone": "-4"
        },
        {
            "name": "Eugene F. Correira Intl ",
            "city": "Georgetown",
            "country": "Guyana",
            "IATA": "OGL",
            "ICAO": "SYGO",
            "lat": "6.80628",
            "lon": "-58.1059",
            "timezone": "-4"
        },
        {
            "name": "Kaieteur Intl ",
            "city": "Kaieteur",
            "country": "Guyana",
            "IATA": "KAI",
            "ICAO": "PKSA",
            "lat": "5.17275476456",
            "lon": "-59.491481781",
            "timezone": "-4"
        },
        {
            "name": "Taba Intl ",
            "city": "Taba",
            "country": "Egypt",
            "IATA": "TCP",
            "ICAO": "HETB",
            "lat": "29.587799072299998",
            "lon": "34.7780990601",
            "timezone": "2"
        },
        {
            "name": "Milas Bodrum Intl ",
            "city": "Bodrum",
            "country": "Turkey",
            "IATA": "BJV",
            "ICAO": "LTFE",
            "lat": "37.25059890749999",
            "lon": "27.6643009186",
            "timezone": "3"
        },
        {
            "name": "Sabiha Gökçen Intl ",
            "city": "Istanbul",
            "country": "Turkey",
            "IATA": "SAW",
            "ICAO": "LTFJ",
            "lat": "40.898601532",
            "lon": "29.3092002869",
            "timezone": "3"
        },
        {
            "name": "Broome Intl ",
            "city": "Broome",
            "country": "Australia",
            "IATA": "BME",
            "ICAO": "YBRM",
            "lat": "-17.944700241088867",
            "lon": "122.23200225830078",
            "timezone": "8"
        },
        {
            "name": "Imam Khomeini Intl ",
            "city": "Tehran",
            "country": "Iran",
            "IATA": "IKA",
            "ICAO": "OIIE",
            "lat": "35.416099548339844",
            "lon": "51.152198791503906",
            "timezone": "3.5"
        },
        {
            "name": "Mashhad Intl ",
            "city": "Mashhad",
            "country": "Iran",
            "IATA": "MHD",
            "ICAO": "OIMM",
            "lat": "36.235198974609375",
            "lon": "59.64099884033203",
            "timezone": "3.5"
        },
        {
            "name": "Lehigh Valley Intl ",
            "city": "Allentown",
            "country": "United States",
            "IATA": "ABE",
            "ICAO": "KABE",
            "lat": "40.652099609375",
            "lon": "-75.44080352783203",
            "timezone": "-5"
        },
        {
            "name": "Kogalym Intl ",
            "city": "Kogalym",
            "country": "Russia",
            "IATA": "KGP",
            "ICAO": "USRK",
            "lat": "62.190399169921875",
            "lon": "74.53379821777344",
            "timezone": "5"
        },
        {
            "name": "Ventspils Intl ",
            "city": "Ventspils",
            "country": "Latvia",
            "IATA": "VNT",
            "ICAO": "EVVA",
            "lat": "57.35779953",
            "lon": "21.5442008972",
            "timezone": "2"
        },
        {
            "name": "Kruger Mpumalanga Intl ",
            "city": "Mpumalanga",
            "country": "South Africa",
            "IATA": "MQP",
            "ICAO": "FAKN",
            "lat": "-25.3831996918",
            "lon": "31.1056003571",
            "timezone": "2"
        },
        {
            "name": "Mmabatho Intl ",
            "city": "Mafeking",
            "country": "South Africa",
            "IATA": "MBD",
            "ICAO": "FAMM",
            "lat": "-25.798400878900004",
            "lon": "25.548000335699996",
            "timezone": "2"
        },
        {
            "name": "Sherbro Intl ",
            "city": "Bonthe",
            "country": "Sierra Leone",
            "IATA": "BTE",
            "ICAO": "GFBN",
            "lat": "7.5324201583862305",
            "lon": "-12.518899917602539",
            "timezone": "0"
        },
        {
            "name": "Osvaldo Vieira Intl ",
            "city": "Bissau",
            "country": "Guinea-Bissau",
            "IATA": "OXB",
            "ICAO": "GGOV",
            "lat": "11.894800186157227",
            "lon": "-15.65369987487793",
            "timezone": "0"
        },
        {
            "name": "Nador Intl ",
            "city": "El Aroui",
            "country": "Morocco",
            "IATA": "NDR",
            "ICAO": "GMMW",
            "lat": "34.988800048799995",
            "lon": "-3.0282099247",
            "timezone": "0"
        },
        {
            "name": "Aden Adde Intl ",
            "city": "Mogadishu",
            "country": "Somalia",
            "IATA": "MGQ",
            "ICAO": "HCMM",
            "lat": "2.0144400596618652",
            "lon": "45.3046989440918",
            "timezone": "3"
        },
        {
            "name": "El Arish Intl ",
            "city": "El Arish",
            "country": "Egypt",
            "IATA": "AAC",
            "ICAO": "HEAR",
            "lat": "31.073299408",
            "lon": "33.8358001709",
            "timezone": "2"
        },
        {
            "name": "Assiut Intl ",
            "city": "Asyut",
            "country": "Egypt",
            "IATA": "ATZ",
            "ICAO": "HEAT",
            "lat": "27.0464992523",
            "lon": "31.0119991302",
            "timezone": "2"
        },
        {
            "name": "Port Sudan New Intl ",
            "city": "Port Sudan",
            "country": "Sudan",
            "IATA": "PZU",
            "ICAO": "HSPN",
            "lat": "19.4335994720459",
            "lon": "37.234100341796875",
            "timezone": "3"
        },
        {
            "name": "Chippewa County Intl ",
            "city": "Sault Ste Marie",
            "country": "United States",
            "IATA": "CIU",
            "ICAO": "KCIU",
            "lat": "46.25080108642578",
            "lon": "-84.47239685058594",
            "timezone": "-5"
        },
        {
            "name": "William R Fairchild Intl ",
            "city": "Port Angeles",
            "country": "United States",
            "IATA": "CLM",
            "ICAO": "KCLM",
            "lat": "48.120201110839844",
            "lon": "-123.5",
            "timezone": "-8"
        },
        {
            "name": "Wokal Field Glasgow Intl ",
            "city": "Glasgow",
            "country": "United States",
            "IATA": "GGW",
            "ICAO": "KGGW",
            "lat": "48.212502",
            "lon": "-106.614998",
            "timezone": "-7"
        },
        {
            "name": "Portsmouth Intl at Pease ",
            "city": "Portsmouth",
            "country": "United States",
            "IATA": "PSM",
            "ICAO": "KPSM",
            "lat": "43.0778999329",
            "lon": "-70.8233032227",
            "timezone": "-5"
        },
        {
            "name": "Ercan Intl ",
            "city": "Nicosia",
            "country": "Cyprus",
            "IATA": "ECN",
            "ICAO": "LCEN",
            "lat": "35.154701232910156",
            "lon": "33.49610137939453",
            "timezone": "2"
        },
        {
            "name": "Győr-Pér Intl ",
            "city": "Győr",
            "country": "Hungary",
            "IATA": "\\N",
            "ICAO": "LHPR",
            "lat": "47.624401",
            "lon": "17.813601",
            "timezone": "1"
        },
        {
            "name": "Sármellék Intl ",
            "city": "Sármellék",
            "country": "Hungary",
            "IATA": "SOB",
            "ICAO": "LHSM",
            "lat": "46.686391",
            "lon": "17.159084",
            "timezone": "1"
        },
        {
            "name": "Banja Luka Intl ",
            "city": "Banja Luka",
            "country": "Bosnia and Herzegovina",
            "IATA": "BNX",
            "ICAO": "LQBK",
            "lat": "44.94139862060547",
            "lon": "17.297500610351562",
            "timezone": "1"
        },
        {
            "name": "Süleyman Demirel Intl ",
            "city": "Isparta",
            "country": "Turkey",
            "IATA": "ISE",
            "ICAO": "LTFC",
            "lat": "37.8554000854",
            "lon": "30.368400573699997",
            "timezone": "3"
        },
        {
            "name": "JAGS McCartney Intl ",
            "city": "Cockburn Town",
            "country": "Turks and Caicos Islands",
            "IATA": "GDT",
            "ICAO": "MBGT",
            "lat": "21.444499969482422",
            "lon": "-71.14230346679688",
            "timezone": "-4"
        },
        {
            "name": "Samaná El Catey Intl ",
            "city": "Samana",
            "country": "Dominican Republic",
            "IATA": "AZS",
            "ICAO": "MDCY",
            "lat": "19.2670001984",
            "lon": "-69.7419967651",
            "timezone": "-4"
        },
        {
            "name": "La Isabela Intl ",
            "city": "La Isabela",
            "country": "Dominican Republic",
            "IATA": "JBQ",
            "ICAO": "MDJB",
            "lat": "18.572500228881836",
            "lon": "-69.98560333251953",
            "timezone": "-4"
        },
        {
            "name": "Tobias Bolanos Intl ",
            "city": "San Jose",
            "country": "Costa Rica",
            "IATA": "SYQ",
            "ICAO": "MRPV",
            "lat": "9.957050323486328",
            "lon": "-84.13980102539062",
            "timezone": "-6"
        },
        {
            "name": "Niue Intl ",
            "city": "Alofi",
            "country": "Niue",
            "IATA": "IUE",
            "ICAO": "NIUE",
            "lat": "-19.079030990600586",
            "lon": "-169.92559814453125",
            "timezone": "-11"
        },
        {
            "name": "Santo Pekoa Intl ",
            "city": "Santo",
            "country": "Vanuatu",
            "IATA": "SON",
            "ICAO": "NVSS",
            "lat": "-15.505000114399998",
            "lon": "167.220001221",
            "timezone": "11"
        },
        {
            "name": "Al Ain Intl ",
            "city": "Al Ain",
            "country": "United Arab Emirates",
            "IATA": "AAN",
            "ICAO": "OMAL",
            "lat": "24.261699676513672",
            "lon": "55.60919952392578",
            "timezone": "4"
        },
        {
            "name": "Turbat Intl ",
            "city": "Turbat",
            "country": "Pakistan",
            "IATA": "TUK",
            "ICAO": "OPTU",
            "lat": "25.986400604248047",
            "lon": "63.03020095825195",
            "timezone": "5"
        },
        {
            "name": "Sulaymaniyah Intl ",
            "city": "Sulaymaniyah",
            "country": "Iraq",
            "IATA": "ISU",
            "ICAO": "ORSU",
            "lat": "35.5617485046",
            "lon": "45.316738128699996",
            "timezone": "3"
        },
        {
            "name": "Sayun Intl ",
            "city": "Sayun Intl",
            "country": "Yemen",
            "IATA": "GXF",
            "ICAO": "OYSY",
            "lat": "15.9660997391",
            "lon": "48.78829956049999",
            "timezone": "3"
        },
        {
            "name": "Yangyang Intl ",
            "city": "Sokcho / Gangneung",
            "country": "South Korea",
            "IATA": "YNY",
            "ICAO": "RKNY",
            "lat": "38.061298",
            "lon": "128.669006",
            "timezone": "9"
        },
        {
            "name": "Cheongju Intl /Cheongju Air Base (K-59/G-513)",
            "city": "Chongju",
            "country": "South Korea",
            "IATA": "CJJ",
            "ICAO": "RKTU",
            "lat": "36.717008",
            "lon": "127.498741",
            "timezone": "9"
        },
        {
            "name": "Subic Bay Intl ",
            "city": "Olongapo City",
            "country": "Philippines",
            "IATA": "SFS",
            "ICAO": "RPLB",
            "lat": "14.794400215148926",
            "lon": "120.27100372314453",
            "timezone": "8"
        },
        {
            "name": "Vance W. Amory Intl ",
            "city": "Charlestown",
            "country": "Saint Kitts and Nevis",
            "IATA": "NEV",
            "ICAO": "TKPN",
            "lat": "17.205699920654297",
            "lon": "-62.589900970458984",
            "timezone": "-4"
        },
        {
            "name": "Union Island Intl ",
            "city": "Union Island",
            "country": "Saint Vincent and the Grenadines",
            "IATA": "UNI",
            "ICAO": "TVSU",
            "lat": "12.60013484954834",
            "lon": "-61.41194534301758",
            "timezone": "-4"
        },
        {
            "name": "Mariupol Intl ",
            "city": "Mariupol International",
            "country": "Ukraine",
            "IATA": "MPW",
            "ICAO": "UKCM",
            "lat": "47.07609939575195",
            "lon": "37.44960021972656",
            "timezone": "2"
        },
        {
            "name": "Luhansk Intl ",
            "city": "Lugansk",
            "country": "Ukraine",
            "IATA": "VSG",
            "ICAO": "UKCW",
            "lat": "48.4174003601",
            "lon": "39.3740997314",
            "timezone": "2"
        },
        {
            "name": "Zaporizhzhia Intl ",
            "city": "Zaporozhye",
            "country": "Ukraine",
            "IATA": "OZH",
            "ICAO": "UKDE",
            "lat": "47.867000579833984",
            "lon": "35.31570053100586",
            "timezone": "2"
        },
        {
            "name": "Kryvyi Rih Intl ",
            "city": "Krivoy Rog",
            "country": "Ukraine",
            "IATA": "KWG",
            "ICAO": "UKDR",
            "lat": "48.04330062866211",
            "lon": "33.209999084472656",
            "timezone": "2"
        },
        {
            "name": "Kharkiv Intl ",
            "city": "Kharkov",
            "country": "Ukraine",
            "IATA": "HRK",
            "ICAO": "UKHH",
            "lat": "49.924800872802734",
            "lon": "36.290000915527344",
            "timezone": "2"
        },
        {
            "name": "Ivano-Frankivsk Intl ",
            "city": "Ivano-Frankivsk",
            "country": "Ukraine",
            "IATA": "IFO",
            "ICAO": "UKLI",
            "lat": "48.88420104980469",
            "lon": "24.686100006103516",
            "timezone": "2"
        },
        {
            "name": "Chernivtsi Intl ",
            "city": "Chernovtsk",
            "country": "Ukraine",
            "IATA": "CWC",
            "ICAO": "UKLN",
            "lat": "48.259300231933594",
            "lon": "25.98080062866211",
            "timezone": "2"
        },
        {
            "name": "Rivne Intl ",
            "city": "Rivne",
            "country": "Ukraine",
            "IATA": "RWN",
            "ICAO": "UKLR",
            "lat": "50.60710144042969",
            "lon": "26.141599655151367",
            "timezone": "2"
        },
        {
            "name": "Uzhhorod Intl ",
            "city": "Uzhgorod",
            "country": "Ukraine",
            "IATA": "UDJ",
            "ICAO": "UKLU",
            "lat": "48.634300231933594",
            "lon": "22.263399124145508",
            "timezone": "2"
        },
        {
            "name": "Fergana Intl ",
            "city": "Fergana",
            "country": "Uzbekistan",
            "IATA": "FEG",
            "ICAO": "UTKF",
            "lat": "40.358798980699994",
            "lon": "71.7450027466",
            "timezone": "5"
        },
        {
            "name": "Belgorod Intl ",
            "city": "Belgorod",
            "country": "Russia",
            "IATA": "EGO",
            "ICAO": "UUOB",
            "lat": "50.643798828125",
            "lon": "36.5900993347168",
            "timezone": "3"
        },
        {
            "name": "Lokpriya Gopinath Bordoloi Intl ",
            "city": "Guwahati",
            "country": "India",
            "IATA": "GAU",
            "ICAO": "VEGT",
            "lat": "26.10610008239746",
            "lon": "91.58589935302734",
            "timezone": "5.5"
        },
        {
            "name": "Gan Intl ",
            "city": "Gan Island",
            "country": "Maldives",
            "IATA": "GAN",
            "ICAO": "VRMG",
            "lat": "-0.693342",
            "lon": "73.155602",
            "timezone": "5"
        },
        {
            "name": "Cat Bi Intl ",
            "city": "Haiphong",
            "country": "Vietnam",
            "IATA": "HPH",
            "ICAO": "VVCI",
            "lat": "20.819400787353516",
            "lon": "106.7249984741211",
            "timezone": "7"
        },
        {
            "name": "Can Tho Intl ",
            "city": "Can Tho",
            "country": "Vietnam",
            "IATA": "VCA",
            "ICAO": "VVCT",
            "lat": "10.085100174",
            "lon": "105.711997986",
            "timezone": "7"
        },
        {
            "name": "Halim Perdanakusuma Intl ",
            "city": "Jakarta",
            "country": "Indonesia",
            "IATA": "HLP",
            "ICAO": "WIHH",
            "lat": "-6.266610145568848",
            "lon": "106.89099884033203",
            "timezone": "7"
        },
        {
            "name": "Baita Intl ",
            "city": "Hohhot",
            "country": "China",
            "IATA": "HET",
            "ICAO": "ZBHH",
            "lat": "40.851398",
            "lon": "111.823997",
            "timezone": "8"
        },
        {
            "name": "Shijiazhuang Daguocun Intl ",
            "city": "Shijiazhuang",
            "country": "China",
            "IATA": "SJW",
            "ICAO": "ZBSJ",
            "lat": "38.28070068359375",
            "lon": "114.6969985961914",
            "timezone": "8"
        },
        {
            "name": "Quanzhou Jinjiang Intl ",
            "city": "Quanzhou",
            "country": "China",
            "IATA": "JJN",
            "ICAO": "ZSQZ",
            "lat": "24.7964",
            "lon": "118.589996",
            "timezone": "8"
        },
        {
            "name": "Tunxi Intl ",
            "city": "Huangshan",
            "country": "China",
            "IATA": "TXN",
            "ICAO": "ZSTX",
            "lat": "29.733299255371094",
            "lon": "118.25599670410156",
            "timezone": "8"
        },
        {
            "name": "Sunan Shuofang Intl ",
            "city": "Wuxi",
            "country": "China",
            "IATA": "WUX",
            "ICAO": "ZSWX",
            "lat": "31.494400024399997",
            "lon": "120.429000854",
            "timezone": "8"
        },
        {
            "name": "Wenzhou Longwan Intl ",
            "city": "Wenzhou",
            "country": "China",
            "IATA": "WNZ",
            "ICAO": "ZSWZ",
            "lat": "27.912201",
            "lon": "120.851997",
            "timezone": "8"
        },
        {
            "name": "Sam Mbakwe Intl ",
            "city": "Imo",
            "country": "Nigeria",
            "IATA": "QOW",
            "ICAO": "DNIM",
            "lat": "5.427060127258301",
            "lon": "7.206029891967773",
            "timezone": "1"
        },
        {
            "name": "Capitan Corbeta CA Curbelo Intl ",
            "city": "Punta del Este",
            "country": "Uruguay",
            "IATA": "PDP",
            "ICAO": "SULS",
            "lat": "-34.855098724365234",
            "lon": "-55.09429931640625",
            "timezone": "-3"
        },
        {
            "name": "Ternopil Intl ",
            "city": "Ternopol",
            "country": "Ukraine",
            "IATA": "\\N",
            "ICAO": "UKLT",
            "lat": "49.5242",
            "lon": "25.7001",
            "timezone": "2"
        },
        {
            "name": "Zhukovsky Intl ",
            "city": "Ramenskoe",
            "country": "Russia",
            "IATA": "ZIA",
            "ICAO": "UUBW",
            "lat": "55.553299",
            "lon": "38.150002",
            "timezone": "3"
        },
        {
            "name": "Tuzla Intl ",
            "city": "Null",
            "country": "Bosnia and Herzegovina",
            "IATA": "TZL",
            "ICAO": "LQTZ",
            "lat": "44.45869827270508",
            "lon": "18.72480010986328",
            "timezone": "1"
        },
        {
            "name": "Gary Chicago Intl ",
            "city": "Gary",
            "country": "United States",
            "IATA": "GYY",
            "ICAO": "KGYY",
            "lat": "41.61629867553711",
            "lon": "-87.41280364990234",
            "timezone": "-6"
        },
        {
            "name": "Cherkasy Intl ",
            "city": "Cherkassy",
            "country": "Ukraine",
            "IATA": "CKC",
            "ICAO": "UKKE",
            "lat": "49.41559982299805",
            "lon": "31.99530029296875",
            "timezone": "2"
        },
        {
            "name": "Mykolaiv Intl ",
            "city": "Nikolayev",
            "country": "Ukraine",
            "IATA": "NLV",
            "ICAO": "UKON",
            "lat": "47.057899475097656",
            "lon": "31.9197998046875",
            "timezone": "2"
        },
        {
            "name": "La Macaza / Mont-Tremblant Intl Inc ",
            "city": "Mont-Tremblant",
            "country": "Canada",
            "IATA": "YTM",
            "ICAO": "CYFJ",
            "lat": "46.409400939899996",
            "lon": "-74.7799987793",
            "timezone": "-5"
        },
        {
            "name": "Laguna de Los Patos Intl ",
            "city": "Colonia",
            "country": "Uruguay",
            "IATA": "CYR",
            "ICAO": "SUCA",
            "lat": "-34.456401824951",
            "lon": "-57.770599365234",
            "timezone": "-3"
        },
        {
            "name": "Cabo San Lucas Intl ",
            "city": "Cabo San Lucas",
            "country": "Mexico",
            "IATA": "\\N",
            "ICAO": "MMSL",
            "lat": "22.947701",
            "lon": "-109.936996",
            "timezone": "-7"
        },
        {
            "name": "Dr Augusto Roberto Fuster Intl ",
            "city": "Pedro Juan Caballero",
            "country": "Paraguay",
            "IATA": "PJC",
            "ICAO": "SGPJ",
            "lat": "-22.639999389648438",
            "lon": "-55.83000183105469",
            "timezone": "-4"
        },
        {
            "name": "Shark El Oweinat Intl ",
            "city": "Sharq Al-Owainat",
            "country": "Egypt",
            "IATA": "GSQ",
            "ICAO": "HEOW",
            "lat": "22.5856990814209",
            "lon": "28.71660041809082",
            "timezone": "2"
        },
        {
            "name": "Wilwal Intl ",
            "city": "Jijiga",
            "country": "Ethiopia",
            "IATA": "JIJ",
            "ICAO": "HAJJ",
            "lat": "9.3325",
            "lon": "42.9121",
            "timezone": "3"
        },
        {
            "name": "Enfidha - Hammamet Intl ",
            "city": "Enfidha",
            "country": "Tunisia",
            "IATA": "NBE",
            "ICAO": "DTNH",
            "lat": "36.075833",
            "lon": "10.438611",
            "timezone": "1"
        },
        {
            "name": "Qurghonteppa Intl ",
            "city": "Kurgan Tyube",
            "country": "Tajikistan",
            "IATA": "KQT",
            "ICAO": "UTDT",
            "lat": "37.86640167236328",
            "lon": "68.86470031738281",
            "timezone": "5"
        },
        {
            "name": "Al Najaf Intl ",
            "city": "Najaf",
            "country": "Iraq",
            "IATA": "NJF",
            "ICAO": "ORNI",
            "lat": "31.989853",
            "lon": "44.404317",
            "timezone": "3"
        },
        {
            "name": "Kherson Intl ",
            "city": "Kherson",
            "country": "Ukraine",
            "IATA": "KHE",
            "ICAO": "UKOH",
            "lat": "46.6758",
            "lon": "32.506401",
            "timezone": "2"
        },
        {
            "name": "Persian Gulf Intl ",
            "city": "Khalije Fars",
            "country": "Iran",
            "IATA": "PGU",
            "ICAO": "OIBP",
            "lat": "27.379601",
            "lon": "52.737701",
            "timezone": "3.5"
        },
        {
            "name": "Mosul Intl ",
            "city": "Mosul",
            "country": "Iraq",
            "IATA": "OSM",
            "ICAO": "ORBM",
            "lat": "36.305801",
            "lon": "43.1474",
            "timezone": "3"
        },
        {
            "name": "Northwest Florida Beaches Intl ",
            "city": "Panama City",
            "country": "United States",
            "IATA": "ECP",
            "ICAO": "KECP",
            "lat": "30.357106",
            "lon": "-85.795414",
            "timezone": "-6"
        },
        {
            "name": "San Bernardino Intl ",
            "city": "San Bernardino",
            "country": "United States",
            "IATA": "SBD",
            "ICAO": "KSBD",
            "lat": "34.0954017639",
            "lon": "-117.23500061",
            "timezone": "-8"
        },
        {
            "name": "Lakeland Linder Intl ",
            "city": "Lakeland",
            "country": "United States",
            "IATA": "LAL",
            "ICAO": "KLAL",
            "lat": "27.988899",
            "lon": "-82.018602",
            "timezone": "-5"
        },
        {
            "name": "El Alamein Intl ",
            "city": "Dabaa City",
            "country": "Egypt",
            "IATA": "DBB",
            "ICAO": "HEAL",
            "lat": "30.92449951171875",
            "lon": "28.46139907836914",
            "timezone": "2"
        },
        {
            "name": "Al Maktoum Intl ",
            "city": "Dubai",
            "country": "United Arab Emirates",
            "IATA": "DWC",
            "ICAO": "OMDW",
            "lat": "24.896356",
            "lon": "55.161389",
            "timezone": "4"
        },
        {
            "name": "Sohag Intl ",
            "city": "Sohag",
            "country": "Egypt",
            "IATA": "HMB",
            "ICAO": "HEMK",
            "lat": "26.342778",
            "lon": "31.742778",
            "timezone": "2"
        },
        {
            "name": "Presidente General Don Oscar D. Gestido Intl ",
            "city": "Rivera",
            "country": "Uruguay",
            "IATA": "RVY",
            "ICAO": "SURV",
            "lat": "-30.974599838256836",
            "lon": "-55.476200103759766",
            "timezone": "-3"
        },
        {
            "name": "St Lucie County Intl ",
            "city": "Fort Pierce",
            "country": "United States",
            "IATA": "FPR",
            "ICAO": "KFPR",
            "lat": "27.49510002",
            "lon": "-80.36830139",
            "timezone": "-5"
        },
        {
            "name": "Lombok Intl ",
            "city": "Praya",
            "country": "Indonesia",
            "IATA": "LOP",
            "ICAO": "WADL",
            "lat": "-8.757322",
            "lon": "116.276675",
            "timezone": "8"
        },
        {
            "name": "Ocala Intl  - Jim Taylor Field",
            "city": "Ocala",
            "country": "United States",
            "IATA": "OCF",
            "ICAO": "KOCF",
            "lat": "29.17259979",
            "lon": "-82.22419739",
            "timezone": "-5"
        },
        {
            "name": "Ostafyevo Intl ",
            "city": "Moscow",
            "country": "Russia",
            "IATA": "OSF",
            "ICAO": "UUMO",
            "lat": "55.511667",
            "lon": "37.507222",
            "timezone": "3"
        },
        {
            "name": "Lankaran Intl ",
            "city": "Lankaran",
            "country": "Azerbaijan",
            "IATA": "LLK",
            "ICAO": "UBBL",
            "lat": "38.746398925799994",
            "lon": "48.8180007935",
            "timezone": "4"
        },
        {
            "name": "Gabala Intl ",
            "city": "Qabala",
            "country": "Azerbaijan",
            "IATA": "GBB",
            "ICAO": "UBBQ",
            "lat": "40.826667",
            "lon": "47.7125",
            "timezone": "4"
        },
        {
            "name": "Zaqatala Intl ",
            "city": "Zaqatala",
            "country": "Azerbaijan",
            "IATA": "ZTU",
            "ICAO": "UBBY",
            "lat": "41.562222",
            "lon": "46.667221",
            "timezone": "4"
        },
        {
            "name": "Oakland County Intl ",
            "city": "Pontiac",
            "country": "United States",
            "IATA": "PTK",
            "ICAO": "KPTK",
            "lat": "42.665500640869",
            "lon": "-83.420097351074",
            "timezone": "-5"
        },
        {
            "name": "Mattala Rajapaksa Intl ",
            "city": "Mattala",
            "country": "Sri Lanka",
            "IATA": "HRI",
            "ICAO": "VCRI",
            "lat": "6.284467",
            "lon": "81.124128",
            "timezone": "5.5"
        },
        {
            "name": "Asaba Intl ",
            "city": "Asaba",
            "country": "Nigeria",
            "IATA": "ABB",
            "ICAO": "DNAS",
            "lat": "6.204167",
            "lon": "6.665278",
            "timezone": "1"
        },
        {
            "name": "Akwa Ibom Intl ",
            "city": "Uyo",
            "country": "Nigeria",
            "IATA": "QUO",
            "ICAO": "DNAI",
            "lat": "4.8725",
            "lon": "8.093",
            "timezone": "1"
        },
        {
            "name": "Kualanamu Intl ",
            "city": "Medan",
            "country": "Indonesia",
            "IATA": "KNO",
            "ICAO": "WIMM",
            "lat": "3.642222",
            "lon": "98.885278",
            "timezone": "7"
        },
        {
            "name": "Chichen Itza Intl ",
            "city": "Chichen Itza",
            "country": "Mexico",
            "IATA": "CZA",
            "ICAO": "MMCT",
            "lat": "20.6413002014",
            "lon": "-88.4461975098",
            "timezone": "-6"
        },
        {
            "name": "Scarlett Martinez Intl ",
            "city": "Rio Hato",
            "country": "Panama",
            "IATA": "RIH",
            "ICAO": "MPRH",
            "lat": "8.375880241394",
            "lon": "-80.127899169922",
            "timezone": "-5"
        },
        {
            "name": "Leesburg Intl ",
            "city": "Leesburg",
            "country": "United States",
            "IATA": "LEE",
            "ICAO": "KLEE",
            "lat": "28.82309914",
            "lon": "-81.80870056",
            "timezone": "-5"
        },
        {
            "name": "Erenhot Saiwusu Intl ",
            "city": "Erenhot",
            "country": "China",
            "IATA": "ERL",
            "ICAO": "ZBER",
            "lat": "43.4225",
            "lon": "112.096667",
            "timezone": "8"
        },
        {
            "name": "Beijing Daxing Intl ",
            "city": "Beijing",
            "country": "China",
            "IATA": "PKX",
            "ICAO": "ZBAD",
            "lat": "39.509945",
            "lon": "116.41092",
            "timezone": "8"
        },
        {
            "name": "Wonsan Kalma Intl ",
            "city": "Wonsan",
            "country": "North Korea",
            "IATA": "WOS",
            "ICAO": "ZKWS",
            "lat": "39.166801",
            "lon": "127.486",
            "timezone": "8.5"
        },
        {
            "name": "Hamad Intl ",
            "city": "Doha",
            "country": "Qatar",
            "IATA": "DOH",
            "ICAO": "OTHH",
            "lat": "25.273056",
            "lon": "51.608056",
            "timezone": "3"
        },
        {
            "name": "Cerro Largo Intl ",
            "city": "Melo",
            "country": "Uruguay",
            "IATA": "MLZ",
            "ICAO": "SUMO",
            "lat": "-32.33789825439453",
            "lon": "-54.21670150756836",
            "timezone": "-3"
        },
        {
            "name": "Artigas Intl ",
            "city": "Artigas",
            "country": "Uruguay",
            "IATA": "ATI",
            "ICAO": "SUAG",
            "lat": "-30.400699615478516",
            "lon": "-56.50790023803711",
            "timezone": "-3"
        },
        {
            "name": "Mărculeşti Intl ",
            "city": "Mărculeşti",
            "country": "Moldova",
            "IATA": "\\N",
            "ICAO": "LUBM",
            "lat": "47.862701416015625",
            "lon": "28.212799072265625",
            "timezone": "\\N"
        },
        {
            "name": "Cahul Intl ",
            "city": "Cahul",
            "country": "Moldova",
            "IATA": "\\N",
            "ICAO": "LUCH",
            "lat": "45.8437995911",
            "lon": "28.263700485199998",
            "timezone": "\\N"
        },
        {
            "name": "Payam Intl ",
            "city": "Karaj",
            "country": "Iran",
            "IATA": "PYK",
            "ICAO": "OIIP",
            "lat": "35.776100158691",
            "lon": "50.826698303223",
            "timezone": "\\N"
        },
        {
            "name": "Issyk-Kul Intl ",
            "city": "Tamchy",
            "country": "Kyrgyzstan",
            "IATA": "IKU",
            "ICAO": "UAFL",
            "lat": "42.58792",
            "lon": "76.713046",
            "timezone": "\\N"
        },
        {
            "name": "Rajiv Gandhi Intl ",
            "city": "Hyderabad",
            "country": "India",
            "IATA": "HYD",
            "ICAO": "VOHS",
            "lat": "17.2313175201",
            "lon": "78.4298553467",
            "timezone": "5.5"
        },
        {
            "name": "Vancouver Intl Seaplane Base",
            "city": "Vancouver",
            "country": "Canada",
            "IATA": "\\N",
            "ICAO": "CAM9",
            "lat": "49.177047",
            "lon": "-123.168154",
            "timezone": "-8"
        },
        {
            "name": "Sabetta Intl ",
            "city": "Sabetta",
            "country": "Russia",
            "IATA": "SBT",
            "ICAO": "USDA",
            "lat": "71.219167",
            "lon": "72.052222",
            "timezone": "5"
        },
        {
            "name": "Blaise Diagne Intl ",
            "city": "Diass",
            "country": "Senegal",
            "IATA": "DSS",
            "ICAO": "GOBD",
            "lat": "14.67",
            "lon": "-17.073333",
            "timezone": "0"
        },
        {
            "name": "Palenque Intl ",
            "city": "Palenque",
            "country": "Mexico",
            "IATA": "PQM",
            "ICAO": "MMPQ",
            "lat": "17.533153",
            "lon": "-92.015484",
            "timezone": "-5"
        },
        {
            "name": "Srr Ahmadu Bello Intl ",
            "city": "Birnin Kebbi",
            "country": "Nigeria",
            "IATA": "\\N",
            "ICAO": "DNBK",
            "lat": "12.480556",
            "lon": "4.369445",
            "timezone": "1"
        },
        {
            "name": "Sir Abubakar Tafawa Balewa Intl ",
            "city": "Bauchi",
            "country": "Nigeria",
            "IATA": "BCU",
            "ICAO": "DNBC",
            "lat": "10.482833",
            "lon": "9.744",
            "timezone": "1"
        },
        {
            "name": "Gombe Lawanti Intl ",
            "city": "Gombe",
            "country": "Nigeria",
            "IATA": "GMO",
            "ICAO": "DNGO",
            "lat": "10.298333333299999",
            "lon": "10.896388888899999",
            "timezone": "1"
        },
        {
            "name": "Dutse Intl ",
            "city": "Dutse",
            "country": "Nigeria",
            "IATA": "\\N",
            "ICAO": "DNDS",
            "lat": "11.795168",
            "lon": "9.311667",
            "timezone": "1"
        },
        {
            "name": "King Mswati III Intl ",
            "city": "Manzini",
            "country": "Swaziland",
            "IATA": "SHO",
            "ICAO": "FDSK",
            "lat": "-26.358611",
            "lon": "31.716944",
            "timezone": "2"
        },
        {
            "name": "Duqm Intl ",
            "city": "Duqm",
            "country": "Oman",
            "IATA": "DQM",
            "ICAO": "OODQ",
            "lat": "19.501944",
            "lon": "57.634167",
            "timezone": "4"
        },
        {
            "name": "Stennis Intl ",
            "city": "Bay St. Louis",
            "country": "United States",
            "IATA": "\\N",
            "ICAO": "KHSA",
            "lat": "30.367799758911133",
            "lon": "-89.45459747314453",
            "timezone": "-5"
        },
        {
            "name": "Kannur Intl ",
            "city": "Kannur",
            "country": "India",
            "IATA": "CNN",
            "ICAO": "VOKN",
            "lat": "11.918614",
            "lon": "75.547211",
            "timezone": "\\N"
        },
        {
            "name": "New Islamabad Intl ",
            "city": "Islamabad",
            "country": "Pakistan",
            "IATA": "ISB",
            "ICAO": "OPIS",
            "lat": "33.560713",
            "lon": "72.851613",
            "timezone": "5"
        },
        {
            "name": "Región de Murcia Intl ",
            "city": "Murcia",
            "country": "Spain",
            "IATA": "RMU",
            "ICAO": "LEMI",
            "lat": "37.803",
            "lon": "-1.125",
            "timezone": "1"
        }
    ]
];

var fuseOptions = { keys: [
    "IATA", "name"
]}; 

var options = {
    display: "name", key: "IATA", fuseOptions: fuseOptions
};

console.log(selectedAirports);
$(document).ready(function(){
    $("#search-destination").fuzzyComplete(selectedAirports, options);
});



// AirportInput("search-destination", options)
// console.log(AirportInput);