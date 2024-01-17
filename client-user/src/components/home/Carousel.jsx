import classes from './css/Carousel.module.css';
import { CarouselItem } from './CarouselItem';

export const Carousel = () => {
  return (
    <section className={classes.carousel}>
      <CarouselItem />
    </section>
  );
};
