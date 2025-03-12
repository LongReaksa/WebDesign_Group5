const myCarousel = document.querySelector('#carouselExampleSlidesOnly');
const carousel = new bootstrap.Carousel(myCarousel, {
  ride: false // This would disable auto-scroll
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      const carousel = new bootstrap.Carousel(
        document.getElementById("carouselExampleSlidesOnly")
      );
      carousel.cycle();
    }, 1000);
  });