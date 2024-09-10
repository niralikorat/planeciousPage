

document.addEventListener("DOMContentLoaded", function() {
  const nav = document.querySelector(".nav");

  function handleScroll() {
    if (window.scrollY > 50) { // Change this value to trigger the effect earlier or later
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }

  // Listen for scroll events
  window.addEventListener("scroll", handleScroll);

  // Initial check in case the page is loaded with a scroll position
  handleScroll();
});
