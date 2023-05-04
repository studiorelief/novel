import { loadAttributesScript } from '$utils/fs-attributes';
import { animateSwiperSlides } from '$utils/gsap';
import { loadModelViewerScript } from '$utils/modal-viewer';
import { appSwiper, loadSwiper } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  // Load modalviewser
  loadModelViewerScript()
    .then(() => {
      console.log('Model viewer script loaded successfully');
    })
    .catch((error) => {
      console.error('Error loading model viewer script:', error);
    });

  // Go to Anchor after click Unlock
  const submitButton = document.querySelector('.button.is-submit');
  submitButton.addEventListener('click', () => {
    window.location.href = '#unlock';
  });

  // load Swiper
  loadSwiper()
    .then(() => {
      console.log('Swiper script loaded successfully');
      appSwiper();
    })
    .catch((error) => {
      console.error('Error loading Swiper script:', error);
    });

  Promise.all([
    loadAttributesScript(
      'https://cdn.jsdelivr.net/npm/@finsweet/attributes-formsubmit@1/formsubmit.js'
    ),
  ])
    .then(() => {
      console.log('All Finsweet Attributes scripts loaded');
    })
    .catch((error) => {
      console.error(error);
    });

  // Call the function to apply the animations
  if (window.innerWidth >= 1000) {
    animateSwiperSlides();
  }
});
