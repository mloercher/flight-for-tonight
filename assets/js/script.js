// pseudocode

// user must input amount of money available, the origin of the flight and departure date
// create a variable that will push all of the airports from duffle api to input as the destination

// fetch data from duffle with the given parameters 

// compare the price for different flights against the users budget 
// display the available flights

// variables
// var origin = $("#search-destination").val();
var start = document.querySelector('#button-addon2');
var expectedPrice = [];
var iataCodes = ["ORD", "LAX"];

// const params = {
//     id: 123
// }

var objects = {
    "data": {
        "slices": [],
        "passengers": [{
                "family_name": "Adventure",
                "given_name": "Ahead",
                "type": "adult"
            },
            {
                "age": 18
            }
        ],
        "cabin_class": "economy"
    }
}
var response = async function() {
    //console.log(objects);
    await fetch('https://uatapi.smartechc.com/api/test/duffelsearch', {
            method: 'POST',
            // mode: 'cors',
            // dataType: 'jsonp',
            // cors: true,
            headers: {
                // 'Accept-Encoding': 'gzip',
                // 'Accept': 'application/json',
                'Content-Type': 'application/json'
                    // 'Duffel-Version': 'beta',
                    // 'Authorization': 'Bearer duffel_test_gpSjOeTMv_1gYzoDQkg-VgkqPY5Ab3UXRpeleMEfk8K',
                    // 'Access-Control-Allow-Origin': '*',
                    // 'Access-Control-Allow-Headers': 'Content-Type, Accept',
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


function tempObj() {

    for (x in iataCodes) {
        var tempObj = {
            origin: $("#search-destination").val().split('(')[1].replace(')', '').trim(),
            destination: iataCodes[x],
            departure_date: $("#search-date").val()
        }
        objects.data.slices.push(tempObj);
    }
    console.log(response());
}

start.addEventListener("click", tempObj)
    // tempObj();
    // functions

// callbacks
// 🚀 start