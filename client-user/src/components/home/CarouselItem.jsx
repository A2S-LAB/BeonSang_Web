import { useState } from 'react';
import classes from './css/CarouselItem.module.css';
import { CarouselNav } from './CarouselNav';
import { CarouselImages } from './CarouselImages';

export const CarouselItem = () => {
  const [imageCount, setImageCount] = useState(0);

  return (
    <div className={classes['carousel-item']}>
      <CarouselNav imageCount={imageCount} onImageCount={setImageCount} />
      <CarouselImages imageCount={imageCount} onImageCount={setImageCount} />
    </div>
  );
};
