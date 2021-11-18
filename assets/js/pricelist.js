var airlines = [
    { name: "Transavia", url: "https://www.transavia.com/" },
    { name: "Volaris", url: "https://www.volaris.com/" },
    { name: "Westjet", url: "https://www.westjet.com/en-us" }

]
var temp1 = [];
var info;
var newSearch = document.querySelector("#new-search-button");
var searchTitle = document.querySelector("#showing-destination");
// function compare price against user's budget
function createElement(data) {
    var list = document.querySelector("#results-list");
    var title = JSON.parse(localStorage.getItem("search-title"));
    searchTitle.innerHTML = "Showing results for: <br/>" + title;
    for (y in data) {
        var links;
        switch (data[y].split(',')[0]) {
            case "Aegean Airlines":
                links = "https://en.aegeanair.com/"
                break;
            case "American Airlines":
                links = "https://www.aa.com/homePage.do"
                break;
            case "British Airways":
                links = "https://www.britishairways.com/travel/home/public/en_us//"
                break;
            case "Copa Airlines":
                links = "https://www.copaair.com/en/web/us"
                break;
            case "Easyjet":
                links = "https://www.easyjet.com/en"
                break;
            case "Iberia":
                links = "https://www.iberia.com/us/"
                break;
            case "Lufthansa":
                links = "https://www.lufthansa.com/us/en/homepage"
                break;
            case "Austrian":
                links = "https://www.austrian.com/us/en/homepage"
                break;
            case "Swiss":
                links = "https://www.swiss.com/us/en/homepage"
                break;
            case "Brussels Airlines":
                links = "https://www.brusselsairlines.com/"
                break;
            case "Eurowings Discover":
                links = "https://www.eurowings.com/us/discover/destinations.html"
                break;
            case "Qatar Airways":
                links = "https://www.qatarairways.com/en-us/homepage.html"
                break;
            case "Transavia":
                links = "https://www.transavia.com/"
                break;
            case "Volaris":
                links = "https://www.volaris.com/"
                break;
            case "Westjet":
                links = "https://www.westjet.com/en-us"
                break;
            case "Air Canada":
                links = "https://www.aircanada.com/us/en/aco/home.html"
                break;
            case "United":
                links = "https://www.united.com/en/us"
                break;
        }
        var liEl = document.createElement("li");
        list.appendChild(liEl);
        var airlineLink = document.createElement('a');
        airlineLink.href = links;
        airlineLink.target = "_blank";
        var airlineName = document.createElement("h3");
        airlineName.textContent = data[y].split(',')[0];
        airlineName.className = "airline-name";
        airlineLink.appendChild(airlineName);
        liEl.appendChild(airlineLink);
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