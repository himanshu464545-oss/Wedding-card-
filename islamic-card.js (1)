
const fields = {
  bride: document.getElementById("bride"),
  groom: document.getElementById("groom"),
  date: document.getElementById("date"),
  time: document.getElementById("time"),
  venue: document.getElementById("venue"),
  city: document.getElementById("city"),
  message: document.getElementById("message")
};

const output = {
  bride: document.getElementById("showBride"),
  groom: document.getElementById("showGroom"),
  date: document.getElementById("showDate"),
  time: document.getElementById("showTime"),
  venue: document.getElementById("showVenue"),
  city: document.getElementById("showCity"),
  message: document.getElementById("showMessage")
};

function updateInvitation() {
  output.bride.textContent =
    fields.bride.value.trim() || "Bride's Name";

  output.groom.textContent =
    fields.groom.value.trim() || "Groom's Name";

  if (fields.date.value) {
    const date = new Date(fields.date.value + "T00:00:00");

    output.date.textContent = date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  } else {
    output.date.textContent = "Nikah Date";
  }

  if (fields.time.value) {
    const [hours, minutes] = fields.time.value.split(":");
    let hour = Number(hours);
    const period = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;

    output.time.textContent = `${hour}:${minutes} ${period}`;
  } else {
    output.time.textContent = "Nikah Time";
  }

  output.venue.textContent =
    fields.venue.value.trim() || "Wedding Venue";

  output.city.textContent =
    fields.city.value.trim() || "City";

  output.message.textContent =
    fields.message.value.trim() ||
    "Together with our families, we invite you to join us in celebrating our Nikah.";
}

document.getElementById("updateBtn").addEventListener(
  "click",
  function () {
    updateInvitation();
    document.querySelector(".preview-area").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
);

// Initial placeholder values
updateInvitation();
