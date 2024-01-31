const carousel = document.querySelector('.carousel__image');
const buttonPrev = document.querySelector('.carousel__prev');
const buttonNext = document.querySelector('.carousel__next');
let count = 0;

const handleCarousel = state => {
  console.log(count);
  const IMAGES = [
    { title: 'outer', image: '/assets/beomsang-outer.jpeg' },
    { title: 'inner', image: '/assets/beomsang-inner.jpeg' },
    { title: 'food', image: '/assets/beomsang-food.jpeg' },
  ];

  const handle = {
    next: () => {
      if (count < 2) {
        count++;
        carousel.innerHTML = `<img src='${IMAGES[count].image}' alt='${IMAGES[count].title}'>`;
      }
    },
    prev: () => {
      if (count > 0) {
        count--;
        carousel.innerHTML = `<img src='${IMAGES[count].image}' alt='${IMAGES[count].title}'>`;
      }
    },
  };

  return handle[state]();
};

buttonPrev.addEventListener('click', handleCarousel.bind(this, 'prev'));
buttonNext.addEventListener('click', handleCarousel.bind(this, 'next'));
