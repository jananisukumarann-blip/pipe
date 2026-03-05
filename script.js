/* ================= STICKY SCROLL HEADER ================= */

const scrollHeader = document.getElementById("scrollHeader");
const heroSection = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const heroHeight = heroSection.offsetHeight;

  if (window.scrollY > heroHeight - 100) {
    scrollHeader.classList.add("active");
  } else {
    scrollHeader.classList.remove("active");
  }
});


/* ================= CAROUSEL FUNCTIONALITY ================= */

const track = document.getElementById("carouselTrack");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;
const slides = document.querySelectorAll(".carousel-item");
const totalSlides = slides.length;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % totalSlides;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateCarousel();
});
/* FAQ Accordion */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});