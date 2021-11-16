// pseudocode

// user must input amount of money available, the origin of the flight and departure date
// create a variable that will push all of the airports from duffle api to input as the destination

// fetch data from duffle with the given parameters

// compare the price for different flights against the users budget
// display the available flights

// variables
// var origin = $("#search-destination").val();

var start = document.querySelector("#button-addon2");
var expectedPrice = [];

// Loader object
var loader = {
  initialize: function () {
    var html =
      '<div class="loading-overlay"></div>' +
      '<div class="overlay-img-container"><img src="./assets/images/gif-aviao.gif" class="loading-overlay-img" alt="flying-plane-loading-screen"</div>';
 
    $("body").append(html);
  },

  showLoader: function () {
    $(".loading-overlay").show();
    $(".overlay-img-container").show();
    $(".loading-overlay-img").show();
  }

  // hideLoader: function () {
  //   $(".loading-overlay").hide();
  //   $(".overlay-img-container").hide();
  //   $(".loading-overlay-img");
  // }
};

//Initialize loader function 
$(function () {
  loader.initialize();

  $("#button-addon2").on("click", function () {
    loader.showLoader();

    setInterval(function () {
      loader.hideLoader();
    }, 10000);
  });
});

function saveTemp(temp) {
  localStorage.setItem("temp", JSON.stringify(temp));
  var title = $("#search-origin").val() + "-" + $("#search-destination").val();
  console.log(title);
  localStorage.setItem("search-title", JSON.stringify(title));
}

// function compare price against user's budget
function budget(offers) {
  var temp = [];

  var money = $("#search-budget").val();
  for (x in offers) {
    if (parseInt(offers[x].total_amount) <= parseInt(money)) {
      var tempStr = offers[x].owner.name + "," + offers[x].total_amount;
      if (!(temp.indexOf(tempStr) > -1)) {
        temp.push(tempStr);
      }
    } else if (parseInt(offers[x].total_amount) > parseInt(money)) {
      $("#modal1").modal();
      $("#modal1").modal("open");
      console.log("Nothing Found");
      return;
    }
  }
  console.log(temp);
  saveTemp(temp);
  window.open("destinations.html", "_self");
}

var objects = {
  data: {
    slices: [],
    passengers: [
      {
        family_name: "Adventure",
        given_name: "Ahead",
        type: "adult",
      },
      {
        age: 18,
      },
    ],
    cabin_class: "economy",
  },
};
var response = async function () {
  //console.log(objects);
  await fetch("https://uatapi.smartechc.com/api/test/duffelsearch", {
    method: "POST",
    // mode: 'cors',
    // dataType: 'jsonp',
    // cors: true,
    headers: {
      // 'Accept-Encoding': 'gzip',
      // 'Accept': 'application/json',
      "Content-Type": "application/json",
      // 'Duffel-Version': 'beta',
      // 'Authorization': 'Bearer duffel_test_gpSjOeTMv_1gYzoDQkg-VgkqPY5Ab3UXRpeleMEfk8K',
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Headers': 'Content-Type, Accept',
    },
    body: JSON.stringify(objects),
  })
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          budget(data.data.offers);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

function tempObj() {
  // window.location.href = "destinations.html";
  var dest = $("#search-destination")
    .val()
    .split("(")[1]
    .replace(")", "")
    .trim();
  var ori = $("#search-origin").val().split("(")[1].replace(")", "").trim();
  if (dest !== ori && dest !== null && dest !== "") {
    var tempObj = {
      origin: ori,
      destination: dest,
      departure_date: $("#search-date").val(),
    };
    objects.data.slices.push(tempObj);
  }

  console.log(objects);
  console.log(response());
}

// clear past dates in calendar
$(function () {
  var dtToday = new Date();

  var month = dtToday.getMonth() + 1;
  var day = dtToday.getDate();
  var year = dtToday.getFullYear();
  if (month < 10) month = "0" + month.toString();
  if (day < 10) day = "0" + day.toString();

  var maxDate = year + "-" + month + "-" + day;
  $("#search-date").attr("min", maxDate);
});

// modal initialization
$(document).ready(function () {
  $("#test").hide();
});
start.addEventListener("click", function (event) {
  event.preventDefault();
  tempObj();
});
// tempObj();
// functions

// callbacks
// 🚀 start
