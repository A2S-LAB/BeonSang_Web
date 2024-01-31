import classes from './css/Carousel.module.css';
import { CarouselItem } from './CarouselItem';

export const Carousel = ({ scrollY }) => {
  return (
    <section className={classes.carousel}>
      {scrollY >= 100 && <CarouselItem />}
    </section>
  );
};
