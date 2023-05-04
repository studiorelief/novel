// Import GSAP if you're using a bundler like webpack or rollup
import { gsap } from 'gsap';

function animateSwiperSlides() {
  // Set initial state for all ".swiper-slide" elements
  gsap.set('.swiper-slide', { width: 'auto' });
  gsap.set('.slider_p', { opacity: 0 });
  gsap.set('.button.is-icon.is-slider', { display: 'none' });
  gsap.set('.slider_cards-h', { scale: 1 });
  gsap.set('.slider_cards-c-overlay', { opacity: 0 });

  // Add click event listener to all ".swiper-slide" elements
  document.querySelectorAll('.swiper-slide').forEach((slide) => {
    slide.addEventListener('click', (event) => {
      // Animate clicked ".swiper-slide" element
      gsap.to(event.currentTarget, {
        width: 500,
        duration: 0.25,
      });

      // Animate child elements of the clicked ".swiper-slide" element
      const sliderP = event.currentTarget.querySelector('.slider_p');
      const buttonSlider = event.currentTarget.querySelector('.button.is-icon.is-slider');
      const sliderCardsH = event.currentTarget.querySelector('.slider_cards-h');
      const sliderCardsOverlay = event.currentTarget.querySelector('.slider_cards-c-overlay');

      gsap.to(sliderP, { opacity: 1, duration: 0.25 });
      gsap.to(buttonSlider, { display: 'flex', duration: 0.25 });
      gsap.to(sliderCardsH, { scale: 2, duration: 0.25 });
      gsap.to(sliderCardsOverlay, { opacity: 1, duration: 0.25 });

      // Reset the width of all sibling ".swiper-slide" elements
      const siblings = Array.from(event.currentTarget.parentNode.children).filter(
        (child) => child !== event.currentTarget
      );
      siblings.forEach((sibling) => {
        gsap.to(sibling, {
          width: '25%',
          duration: 0.25,
        });

        // Animate sibling elements
        const sliderP = sibling.querySelector('.slider_p');
        const buttonSlider = sibling.querySelector('.button.is-icon.is-slider');
        const sliderCardsH = sibling.querySelector('.slider_cards-h');
        const sliderCardsOverlay = sibling.querySelector('.slider_cards-c-overlay');

        gsap.to(sliderP, { opacity: 0, duration: 0.25 });
        gsap.to(buttonSlider, { display: 'none', duration: 0.25 });
        gsap.to(sliderCardsH, { scale: 1, duration: 0.25 });
        gsap.to(sliderCardsOverlay, { opacity: 0, duration: 0.25 });
      });
    });
  });
}

export { animateSwiperSlides };
