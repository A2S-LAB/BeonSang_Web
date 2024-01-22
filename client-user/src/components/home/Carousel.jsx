import classes from './css/Carousel.module.css';
import { CarouselItem } from './CarouselItem';

export const Carousel = ({ scrollY }) => {
  console.log(scrollY);
  return (
    <section className={classes.carousel}>
      {scrollY >= 546 && <CarouselItem />}
    </section>
  );
};
