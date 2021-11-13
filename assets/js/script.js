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

// function compare price against user's budget
function budget(offers) {
    var list = $("#results-list");
    var money = $("#search-budget").val();
    for (x in offers) {
        if (parseInt(offers[x].total_amount) <= parseInt(money)) {
            console.log(x);
            offers[x].owner.name;
            offers[x].total_amount;
            var liEl = document.createElement("li");
            list.append(liEl);
            var airlineName = document.createElement("h3");
            airlineName.textContent = offers[x].owner.name;
            airlineName.className = "airline-name";
            liEl.append(airlineName);
            var totalAmount = document.createElement("p");
            totalAmount.textContent = offers[x].total_amount;
            totalAmount.className = "total-amount";
            liEl.append(totalAmount);
        }
    }
}

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
                    budget(data.data.offers);
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


    var ori = $("#search-destination").val().split('(')[1].replace(')', '').trim();
    var dest = $("#search-origin").val().split('(')[1].replace(')', '').trim();
    if (dest !== ori && dest !== null && dest !== "") {
        var tempObj = {
            origin: ori,
            destination: dest,
            departure_date: $("#search-date").val()
        }
        objects.data.slices.push(tempObj);
    }

    console.log(objects);
    console.log(response());
}

start.addEventListener("click", tempObj)
    // tempObj();
    // functions

// callbacks
// 🚀 start