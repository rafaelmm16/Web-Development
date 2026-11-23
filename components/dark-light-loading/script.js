// Create Variables and Select from HTML
//const allLoadings = document.querySelectorAll(".loading");
const toggler = document.getElementById("toggle");
const toggleButton = document.getElementById('toggle');
const icon = document.getElementById('icon');

toggleButton.addEventListener('click', () => {
    // Toggle between sun and moon icons
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
});


function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  // Savethe theme preference to Local Storage
  const isDarkModeEnabled = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkmode", isDarkModeEnabled);
}

toggler.addEventListener("click", toggleDarkMode);

window.addEventListener("load", () => {
  // Retrieve the Theme Preference from Local Storage
  const isDarkModeEnabled = localStorage.getItem("darkmode");

  // Set the Theme based off of the Saved Preference
  if (isDarkModeEnabled === "true") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  //   setInterval(() => {
  //     allLoadings.forEach((item) => {
  //       item.classList.remove("loading");
  //     }, 2000);
  //   });
});