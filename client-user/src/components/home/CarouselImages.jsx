import classes from './css/CarouselImages.module.css';
import restaurant from '../../assets/restaurant.jpg';
import chef from '../../assets/chef.jpg';
import sushi from '../../assets/sushi.jpg';

const IMAGES = [
  { title: 'restaurant', image: restaurant },
  { title: 'chef', image: chef },
  { title: 'sushi', image: sushi },
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
