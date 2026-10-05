// =================================
// HOME PAGE BUTTONS
// =================================

let createBtn = document.getElementById("createBtn");

let startBtn = document.getElementById("startBtn");


// Header button

createBtn.addEventListener("click", function () {

  window.location.href = "creator.html";

});


// Main Hero button

startBtn.addEventListener("click", function () {

  window.location.href = "creator.html";

});


// =================================
// PREMIUM CARD BUTTONS
// =================================

let premiumButtons =
  document.querySelectorAll(".premium-btn");


premiumButtons.forEach(function (button) {

  button.addEventListener("click", function () {

    let template =
      button.getAttribute("data-template");

    window.location.href =
      "creator.html?template=" + template;

  });

});