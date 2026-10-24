
// =================================
// HOME PAGE BUTTONS
// =================================

let createBtn = document.getElementById("createBtn");
let startBtn = document.getElementById("startBtn");

// Header button
if (createBtn) {
  createBtn.addEventListener("click", function () {
    window.location.href = "creator.html";
  });
}

// Main Hero button
if (startBtn) {
  startBtn.addEventListener("click", function () {
    window.location.href = "creator.html";
  });
}

// =================================
// PREMIUM CARD BUTTONS
// =================================

let premiumButtons = document.querySelectorAll(".premium-btn");

premiumButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    let template = button.getAttribute("data-template");

    if (template === "islamic") {
      window.location.href = "islamic-card.html";
    } else {
      window.location.href = "creator.html?template=" + template;
    }
  });
});
