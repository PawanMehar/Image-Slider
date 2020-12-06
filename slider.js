const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const pre = document.querySelector('#pre');
const auto = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = function() {
    const current = documement.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current');
    
    }
    else{
        slides[0].classList.add('current');
    }
    setTimeout(() => current .classList.remove('current'));

};
const preSlide = function() {
    const current = documement.querySelector('.current');
    current.classList.remove('current');
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current');
    
    }
    else{
        slides[0].classList.add('current');
    }
    setTimeout(() => current .classList.remove('current'));

};

next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  });
  
  prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  });
  
  // Auto slide
  if (auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
  }

