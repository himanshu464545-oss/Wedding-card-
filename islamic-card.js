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
