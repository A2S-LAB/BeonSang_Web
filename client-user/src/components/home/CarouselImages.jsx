import { useLocation, useNavigate } from 'react-router-dom';
import classes from './css/CarouselImages.module.css';
import restaurant from '../../assets/restaurant.jpg';
import chef from '../../assets/chef.jpg';
import sushi from '../../assets/sushi.jpg';

const IMAGES = [
  { title: 'restaurant', image: restaurant },
  { title: 'chef', image: chef },
  { title: 'sushi', image: sushi },
];

export const CarouselImages = ({ imageCount }) => {
  return (
    <>
      {imageCount === 0 && (
        <div className={classes['carousel-item']}>
          <img
            src={IMAGES[0].image}
            alt={IMAGES[0].title}
            className={classes['carousel-item__img']}
          />
        </div>
      )}
      {imageCount === 1 && (
        <div className={classes['carousel-item']}>
          <img
            src={IMAGES[1].image}
            alt={IMAGES[1].title}
            className={classes['carousel-item__img']}
          />
        </div>
      )}

      {imageCount === 2 && (
        <div className={classes['carousel-item']}>
          <img
            src={IMAGES[2].image}
            alt={IMAGES[2].title}
            className={classes['carousel-item__img']}
          />
        </div>
      )}
    </>
  );
};
