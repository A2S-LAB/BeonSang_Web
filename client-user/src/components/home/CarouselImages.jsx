import classes from './css/CarouselImages.module.css';
import beomsangOuter from '../../assets/beomsang-outer.jpeg';
import beomsangInner from '../../assets/beomsang-inner.jpeg';
import beomsangFood from '../../assets/beomsang-food.jpeg';

const IMAGES = [
  { title: 'beomsang-outer', image: beomsangOuter },
  { title: 'beomsang-inner', image: beomsangInner },
  { title: 'beomsang-food', image: beomsangFood },
];

export const CarouselImages = ({ imageCount, className }) => {
  return (
    <div className={classes.className}>
      <img
        src={IMAGES[imageCount].image}
        alt={IMAGES[imageCount].title}
        className={classes['carousel-item__img']}
      />
    </div>
  );
};
