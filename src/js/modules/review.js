import Swiper from 'swiper/bundle';

const swiper = new Swiper('.review__wrapper', {
  // Optional parameters

  slidesPerView: 3,
  spaceBetween: 20,
  autoHeight: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

console.log('slider');
