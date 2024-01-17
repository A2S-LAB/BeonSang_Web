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

export const CarouselImages = () => {
  const elementImages = IMAGES.map((element, index) => {
    return (
      <div key={index} className={classes['carousel-item']}>
        <img
          src={element.image}
          alt={element.title}
          className={classes['carousel-item__img']}
        />
      </div>
    );
  });

  return <>{elementImages}</>;
};
