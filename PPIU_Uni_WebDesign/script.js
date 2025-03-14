const seeMoreBtn = document.getElementById("seeMoreBtn");
const seeLessBtn = document.getElementById("seeLessBtn");
const hiddenEvents = document.querySelectorAll(".hidden-event");

seeMoreBtn.addEventListener("click", function () {
  hiddenEvents.forEach((event) => {
    event.style.display = "block";
  });
  seeMoreBtn.style.display = "none";
  seeLessBtn.style.display = "inline-block";
});

seeLessBtn.addEventListener("click", function () {
  hiddenEvents.forEach((event) => {
    event.style.display = "none";
  });
  seeLessBtn.style.display = "none";
  seeMoreBtn.style.display = "inline-block";
});