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

function saveTemp(temp) {
    var airports = JSON.parse(localStorage.getItem("temp")) || [];
    console.log(airports);
    airports.push(temp);
    localStorage.setItem("temp", JSON.stringify(airports));
}

// function compare price against user's budget
function budget(offers) {
    var temp = [];

    var money = $("#search-budget").val();
    for (x in offers) {
        if (parseInt(offers[x].total_amount) <= parseInt(money)) {
            var tempStr = offers[x].owner.name + ',' + offers[x].total_amount;
            if (!(temp.indexOf(tempStr) > -1)) {
                temp.push(tempStr)
            }
        } else if (temp.indexOf(tempStr) === -1) {
            $('#modal1').modal();
            $('#modal1').modal("open");
            console.log("Nothing Found");
        }
    }
    console.log(temp);
    saveTemp(temp);

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
    window.open("destinations.html", "_self");
}

function tempObj() {
    // window.location.href = "destinations.html";
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

// modal initialization
$(document).ready(function() {
    $("#test").hide();

});
start.addEventListener("click", function(event) {
        event.preventDefault();
        tempObj();

    })
    // tempObj();
    // functions

// callbacks
// 🚀 start