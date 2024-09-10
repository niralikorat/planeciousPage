// document.addEventListener("DOMContentLoaded", function() {
//     const videoElement = document.getElementById("heroVideo");
//     const largeVideoSource = document.getElementById("largeVideoSource");
//     const mobileVideoSource = document.getElementById("mobileVideoSource");
  
//     function setVideoSource() {
//       if (window.innerWidth <= 768) {
//         // Mobile video
//         videoElement.src = mobileVideoSource.src;
//       } else {
//         // Large device video
//         videoElement.src = largeVideoSource.src;
//       }
//       videoElement.load(); // Reload the video with the new source
//     }
  
//     // Set video source on page load
//     setVideoSource();
  
//     // Update video source on window resize
//     window.addEventListener("resize", setVideoSource);
//   });
  

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
