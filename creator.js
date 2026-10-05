
 // =================================
 // FORM ELEMENTS
 // =================================

const brideName = document.getElementById("brideName");
const groomName = document.getElementById("groomName");
const weddingDate = document.getElementById("weddingDate");
const weddingTime = document.getElementById("weddingTime");
const venue = document.getElementById("venue");
const city = document.getElementById("city");
const message = document.getElementById("message");
const couplePhoto = document.getElementById("couplePhoto");
const previewBtn = document.getElementById("previewBtn");


// =================================
// PREVIEW ELEMENTS
// =================================

const previewBride = document.getElementById("previewBride");
const previewGroom = document.getElementById("previewGroom");
const previewDate = document.getElementById("previewDate");
const previewTime = document.getElementById("previewTime");
const previewVenue = document.getElementById("previewVenue");
const previewCity = document.getElementById("previewCity");
const previewMessage = document.getElementById("previewMessage");
const previewPhoto = document.getElementById("previewPhoto");
const photoPlaceholder = document.getElementById("photoPlaceholder");


// =================================
// SELECT TEMPLATE
// =================================

const urlParams = new URLSearchParams(window.location.search);
const selectedTemplate = urlParams.get("template") || "royal";


// =================================
// CREATE WEDDING CARD
// =================================

previewBtn.addEventListener("click", function () {
  if (brideName.value.trim()) {
    previewBride.innerText = brideName.value.trim();
  }

  if (groomName.value.trim()) {
    previewGroom.innerText = groomName.value.trim();
  }

  if (weddingDate.value) {
    const date = new Date(weddingDate.value + "T00:00:00");

    previewDate.innerText = date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }

  if (weddingTime.value) {
    const [hours, minutes] = weddingTime.value.split(":");
    let hour = Number(hours);

    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;

    previewTime.innerText = `${hour}:${minutes} ${ampm}`;
  }

  if (venue.value.trim()) {
    previewVenue.innerText = venue.value.trim();
  }

  if (city.value.trim()) {
    previewCity.innerText = city.value.trim();
  }

  if (message.value.trim()) {
    previewMessage.innerText = message.value.trim();
  }

  applyTemplate(selectedTemplate);

  document.getElementById("previewSection").scrollIntoView({
    behavior: "smooth"
  });
});


// =================================
// COUPLE PHOTO
// =================================

couplePhoto.addEventListener("change", function () {
  const file = couplePhoto.files[0];

  if (!file) return;

  if (previewPhoto.dataset.objectUrl) {
    URL.revokeObjectURL(previewPhoto.dataset.objectUrl);
  }

  const imageURL = URL.createObjectURL(file);

  previewPhoto.dataset.objectUrl = imageURL;
  previewPhoto.src = imageURL;
  previewPhoto.style.display = "block";
  photoPlaceholder.style.display = "none";
});


// =================================
// APPLY TEMPLATE
// =================================

function applyTemplate(template) {
  const weddingCard = document.querySelector(".wedding-card");

  if (!weddingCard) return;

  weddingCard.classList.remove(
    "template-royal",
    "template-floral",
    "template-mandap"
  );

  if (template === "floral") {
    weddingCard.classList.add("template-floral");
  } else if (template === "mandap") {
    weddingCard.classList.add("template-mandap");
  } else {
    weddingCard.classList.add("template-royal");
  }
}


// =================================
// INITIAL TEMPLATE
// =================================

applyTemplate(selectedTemplate);


const cardShareBtn = document.getElementById("shareBtn");

if (cardShareBtn) {
  cardShareBtn.addEventListener("click", async function () {
    const card = document.querySelector(".wedding-card");

    if (!card) {
      alert("Wedding card nahi mila.");
      return;
    }

    if (typeof html2canvas === "undefined") {
      alert("Image library load nahi hui. Internet ON karke refresh karo.");
      return;
    }

    const originalText = cardShareBtn.innerText;
    cardShareBtn.innerText = "⏳ Card image bana rahe hain...";

    try {
      const canvas = await html2canvas(card, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
        logging: false
      });

      const blob = await new Promise(resolve =>
        canvas.toBlob(resolve, "image/png")
      );

      if (!blob) throw new Error("Image nahi ban paayi.");

      const imageFile = new File(
        [blob],
        "wedding-card.png",
        { type: "image/png" }
      );

      if (navigator.canShare && navigator.canShare({ files: [imageFile] })) {
        await navigator.share({
          files: [imageFile],
          title: "Wedding Invitation",
          text: "💍 Hamara Wedding Invitation ❤️"
        });
      } else {
        const imageURL = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = imageURL;
        link.download = "wedding-card.png";
        link.click();

        URL.revokeObjectURL(imageURL);

        alert("Card image download ho gayi. Ab WhatsApp chat mein attach kar do.");
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error(error);
        alert("Card share nahi ho paaya. Chrome mein page kholkar dobara try karo.");
      }
    } finally {
      cardShareBtn.innerText = originalText;
    }
  });
}
