// The Golfers Guide Javascript Page

// Global Variables
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var Images = ["images/Driver.png", "images/Wood.png", "images/Hybrid.png", "images/iron.png", "images/Wedge.png", "images/Putter.png"];

// In case someone clicks on the first carousel image which is essentially for the home page.
function firstCaro() {
  window.alert("Welcome to The Golfers Guide, hopefully we can help you.");
}

// Javascript for handicap calculator on the home page. Watch your use of id="submit" if you plan to use this external js page on your page.
function handicapCalc() {
  var score = document.getElementById("scoreValue").value;
  var course = document.getElementById("courseValue").value;
  var slope = document.getElementById("slopeValue").value;
  var handicap = (score - course) * 113 / slope;
  if (score && course && slope) {
    document.getElementById("result").innerHTML = handicap.toFixed(2);
    document.getElementById("handiBox").style.display = "block";
  }
  else {
    alert("Please fill in all fields");
  }
}

// Function for adding data to weekly schedule table on contact page
function addDays() {
  var i = 0;
  while (i < 7) {
    document.getElementsByTagName("th")[i].innerHTML += daysOfWeek[i];
    i++;
  }
}

// Javascript for imageswapper on tips page.
function changeImage(BigImage) {
  document.getElementById('BigImage').src = Images[BigImage];
}

function lessonAlert() {
  var formName = document.getElementById("name").value;
  var formPhone = document.getElementById("phone").value;
  if (formName && formPhone) {
    window.alert("Thank you for your request!  We will be contacting you shortly to confirm!");
  }
  else {
    window.alert("Please fill in required Name and Phone fields");
  }
}

// Run functions on page load
var looked = document.getElementById("look");
if (looked) {
  if (window.addEventListener) {
    window.addEventListener("load", addDays, false);
  } else if (window.attachEvent) {
    window.attachEvent("onload", addDays);
  }
}

// Event Listener for the submit button on the Contact page
var request = document.getElementById("scheduleLesson");
if (request) {
  if (request.addEventListener) {
  	request.addEventListener("click", lessonAlert, false);
   } else if (request.attachEvent) {
    request.attachEvent("onclick", lessonAlert);
  }
}

// So the function will work on out of date web browsers
var handicapButton = document.getElementById("hands");
if (handicapButton) {
  if (handicapButton.addEventListener) {
    handicapButton.addEventListener("click", handicapCalc, false);
  }
  else if (handicapButton.attachEvent) {
    handicapButton.attachEvent("onclick", handicapCalc);
  }
}

// Call function when someone clicks on the first carousel image
var firstCaroButton = document.getElementById("welcomeImage");
if (firstCaroButton) {
  if (firstCaroButton.addEventListener) {
    firstCaroButton.addEventListener("click", firstCaro, false);
  }
  else if (firstCaroButton.attachEvent) {
    firstCaroButton.attachEvent("onclick", firstCaro);
  }
}
