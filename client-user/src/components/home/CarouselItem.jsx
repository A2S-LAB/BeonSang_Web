import { useState } from 'react';
import classes from './css/CarouselItem.module.css';
import { CarouselNav } from './CarouselNav';
import { CarouselImages } from './CarouselImages';

export const CarouselItem = () => {
  const [imageCount, setImageCount] = useState(0);
  let className = 'onImage';

  if (imageCount === 0) {
    className === 'firstImage';
  } else if (imageCount === 1) {
    className === 'secondImage';
  } else {
    className === 'lastImage';
  }

  return (
    <div className={classes['carousel-item']}>
      <CarouselNav imageCount={imageCount} onImageCount={setImageCount} />
      <CarouselImages
        imageCount={imageCount}
        onImageCount={setImageCount}
        className={className}
      />
    </div>
  );
};
