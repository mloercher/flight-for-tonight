var temp1 = [];
var info;
var newSearch = document.querySelector("#new-search-button");
var searchTitle = document.querySelector("#showing-destination");
// function compare price against user's budget
function createElement(data) {
    var list = document.querySelector("#results-list");
    var title = JSON.parse(localStorage.getItem("search-title"));
    console.log($("#search-origin").val());
    searchTitle.innerHTML = "Showing results for: <br/>" + title;
    for (y in data) {
        console.log(data[y]);
        var liEl = document.createElement("li");
        list.appendChild(liEl);
        var airlineName = document.createElement("h3");
        airlineName.textContent = data[y].split(',')[0];
        airlineName.className = "airline-name";
        liEl.appendChild(airlineName);
        var totalAmount = document.createElement("p");
        totalAmount.textContent = "$" + data[y].split(',')[1];
        totalAmount.className = "total-amount";
        liEl.appendChild(totalAmount);
    }
}

function getTemp() {
    var y = JSON.parse(localStorage.getItem("temp")) || [];
    for (x in y) {
        temp1.push(y[x]);
    }
    return temp1;
}

function clearSearch() {
    localStorage.clear();
    location.reload();
}
var data = getTemp();
createElement(data);
newSearch.addEventListener("click", function() {
    clearSearch();
    window.open("index.html", "_self");
});