import { RiArrowDropRightLine } from 'react-icons/ri';
import { RiArrowDropLeftLine } from 'react-icons/ri';
import classes from './css/CarouselNav.module.css';

export const CarouselNav = ({ imageCount, onImageCount }) => {
  const handlePrev = () => {
    if (imageCount > 0) {
      onImageCount(imageCount => imageCount - 1);
    }
  };
  const handleNext = () => {
    if (imageCount < 2) {
      onImageCount(imageCount => imageCount + 1);
    }
  };

  return (
    <nav className={classes.carousel__nav}>
      <button className={classes.carousel__prev} onClick={handlePrev}>
        <RiArrowDropLeftLine />
      </button>
      <button className={classes.carousel__next} onClick={handleNext}>
        <RiArrowDropRightLine />
      </button>
    </nav>
  );
};
