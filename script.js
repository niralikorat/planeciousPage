

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


// window.addEventListener('load', function() {
//   var videoElement = document.querySelector('.hero-video');

//   function updatePoster() {
//     if (window.innerWidth <= 768) {
//       videoElement.poster = 'https://img.freepik.com/free-photo/mysterious-forest-landscape_181624-35895.jpg?t=st=1726049837~exp=1726053437~hmac=09f0554d9e6051f3171f8dfd543c69fc66dbabec95bf23c657cccdfcdbcae344&w=740';
//     } else {
//       videoElement.poster = 'https://img.freepik.com/free-photo/beautiful-japanese-forest-scene_23-2151498135.jpg?t=st=1726054815~exp=1726058415~hmac=01d26b0909c52d64f2cd0667ca97e18d696c6dee84e6c9389edc183a28e36dcf&w=1380';
//     }
//   }


//   updatePoster();


//   window.addEventListener('resize', updatePoster);
// });


document.addEventListener('DOMContentLoaded', function () {
  const videoElement = document.querySelector('.hero-video');

  if (videoElement) {
    // Force reload the video source to ensure it starts playing
    videoElement.load(); // Reload the video
    videoElement.play().catch((error) => {
      console.log('Video playback failed:', error);
    });
  }
});
