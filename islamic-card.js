
const brideInput = document.getElementById("bride");
const groomInput = document.getElementById("groom");
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
const venueInput = document.getElementById("venue");
const cityInput = document.getElementById("city");
const messageInput = document.getElementById("message");
const photoInput = document.getElementById("couplePhoto");

const showBride = document.getElementById("showBride");
const showGroom = document.getElementById("showGroom");
const showDate = document.getElementById("showDate");
const showTime = document.getElementById("showTime");
const showVenue = document.getElementById("showVenue");
const showCity = document.getElementById("showCity");
const showMessage = document.getElementById("showMessage");

const showPhoto = document.getElementById("showPhoto");
const photoArea = document.getElementById("photoArea");
const updateBtn = document.getElementById("updateBtn");

function updateInvitation() {
  showBride.textContent = brideInput.value.trim() || "Bride's Name";
  showGroom.textContent = groomInput.value.trim() || "Groom's Name";

  if (dateInput.value) {
    const date = new Date(dateInput.value + "T12:00:00");
    showDate.textContent = date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  } else {
    showDate.textContent = "Nikah Date";
  }

  if (timeInput.value) {
    const [hours, minutes] = timeInput.value.split(":");
    const time = new Date();
    time.setHours(Number(hours), Number(minutes));

    showTime.textContent = time.toLocaleTimeString("en-IN", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    });
  } else {
    showTime.textContent = "Nikah Time";
  }

  showVenue.textContent = venueInput.value.trim() || "Wedding Venue";
  showCity.textContent = cityInput.value.trim() || "City";

  showMessage.textContent = messageInput.value.trim() ||
    "Together with our families, we invite you to join us in celebrating our Nikah.";
}

updateBtn.addEventListener("click", updateInvitation);

photoInput.addEventListener("change", function () {
  const file = photoInput.files[0];

  if (!file) {
    showPhoto.removeAttribute("src");
    photoArea.classList.remove("visible");
    return;
  }

  if (!file.type.startsWith("image/")) {
    alert("Please select an image file.");
    photoInput.value = "";
    return;
  }

  const reader = new FileReader();

  reader.onload = function (event) {
    showPhoto.src = event.target.result;
    photoArea.classList.add("visible");
  };

  reader.readAsDataURL(file);
});

updateInvitation();
