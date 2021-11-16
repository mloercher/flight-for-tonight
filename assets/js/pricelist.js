var temp1 = [];
var info;
var resultsTitle = document.querySelector("#showing-destination");
// function compare price against user's budget
function createElement(data) {
    var list = document.querySelector("#results-list");
    console.log(data);

    for (y in data) {
        console.log(data[y]);
        data[y].forEach(function(airport) {
            var liEl = document.createElement("li");
            list.appendChild(liEl);
            var airlineName = document.createElement("h3");
            airlineName.textContent = airport.split(',')[0];
            airlineName.className = "airline-name";
            liEl.appendChild(airlineName);
            var totalAmount = document.createElement("p");
            totalAmount.textContent = "$" + airport.split(',')[1];
            totalAmount.className = "total-amount";
            liEl.appendChild(totalAmount);
        })
    }
}

function getTemp() {
    var y = JSON.parse(localStorage.getItem("temp")) || [];
    console.log(y);
    for (x in y) {
        temp1.push(y[x]);
    }

    return temp1;
}
var data = getTemp();
createElement(data);