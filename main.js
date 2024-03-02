// main.js

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const lightModeContainer = document.querySelector(".lightMode");
  const darkModeContainer = document.querySelector(".darkMode");

  toggleButton.addEventListener("change", function () {
    lightModeContainer.style.display = toggleButton.checked ? "block" : "none";
    darkModeContainer.style.display = toggleButton.checked ? "none" : "block";
  });
});
