document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("imageSelect");
  const images = document.querySelectorAll("#imageContainer img");

  images.forEach((img) => {
    img.addEventListener("click", function () {
      const value = this.getAttribute("data-value");
      select.value = value;
    });
  });
});

function saveSettings() {}
