
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

document.addEventListener("click", function (event) {
  const button = event.target.closest(".premium-btn");

  if (!button) return;

  const template = button.getAttribute("data-template");

  if (template === "islamic") {
    window.location.href = "islamic-card.html";
  } else if (
    template === "royal" ||
    template === "floral" ||
    template === "mandap"
  ) {
    window.location.href = "creator.html?template=" + template;
  }
});
