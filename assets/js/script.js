// pseudocode

// user must input amount of money available, the origin of the flight and departure date
// create a variable that will push all of the airports from duffle api to input as the destination

// fetch data from duffle with the given parameters 

// compare the price for different flights against the users budget 
// display the available flights

//Gabriel will update CORS branch 11/11


// variables
var expectedPrice = [];
var iataCodes = ["ORD", "LAX"];

// const params = {
//     id: 123
// }

var objects = {
    "data": {
        "slices": [

        ],
        "passengers": [{
                "family_name": "Earhart",
                "given_name": "Amelia",
                "type": "adult"
            },
            {
                "age": 14
            }
        ],
        "cabin_class": "economy"
    }
}
var response = async function() {
    await fetch('https://api.duffel.com/air/offer_requests', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer duffel_test_gpSjOeTMv_1gYzoDQkg-VgkqPY5Ab3UXRpeleMEfk8K',
                'Duffel-Version': 'beta',
                'Accept': 'application/json',
                'Accept-Encoding': 'gzip',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'index.html'
            },
            body: JSON.stringify(objects)
        })
        .catch(function(error) {
            console.log(error);
        });
}


// console.log(data);

function tempObj() {
    for (x in iataCodes) {
        var tempObj = {
            origin: 'JFK',
            destination: iataCodes[x],
            departure_date: '2021-11-01'
        }
        objects.data.slices.push(tempObj);
    }
    console.log(response());
}

// const data = await response.json();
tempObj();
// functions

// callbacks
// 🚀 start