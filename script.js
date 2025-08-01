const slides = document.querySelector('.slides');
const slideCount = slides.children.length;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function updateSlidePosition() {
  slides.style.transform = `translateX(-${currentIndex * 315}px)`;
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlidePosition();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < slideCount - 3) { // assuming 3 slides visible
    currentIndex++;
    updateSlidePosition();
  }
});
