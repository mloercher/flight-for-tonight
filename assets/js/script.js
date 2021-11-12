// pseudocode

// user must input amount of money available, the origin of the flight and departure date
// create a variable that will push all of the airports from duffle api to input as the destination

// fetch data from duffle with the given parameters 

// compare the price for different flights against the users budget 
// display the available flights

// variables
var expectedPrice = [];
var iataCodes = ["ORD", "LAX"];

// const params = {
//     id: 123
// }
AirportInput("search-destination")
console.log(AirportInput);

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
            // mode: 'cors',
            headers: {
                'Accept-Encoding': 'gzip',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Duffel-Version': 'beta',
                'Authorization': 'Bearer duffel_test_gpSjOeTMv_1gYzoDQkg-VgkqPY5Ab3UXRpeleMEfk8K',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(objects)
        }).then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data);
                });
            } else {
                alert("Error: " + response.statusText);
            }
        })
        .catch(function(error) {
            console.log(error);
        });

}


console.log(response);

function tempObj() {
    for (x in iataCodes) {
        var tempObj = {
            origin: 'JFK',
            destination: iataCodes[x],
            departure_date: '2021-11-12'
        }
        objects.data.slices.push(tempObj);
    }
    console.log(response());
}


tempObj();
// functions

// callbacks
// 🚀 start