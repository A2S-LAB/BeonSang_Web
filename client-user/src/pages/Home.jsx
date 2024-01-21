import { useState, useEffect } from 'react';
import { Header } from '../components/ui/Header';
import { Info } from '../components/home/Info';
import { Carousel } from '../components/home/Carousel';
import { Description } from '../components/home/Description';
import { Footer } from '../components/home/Footer';

export const Home = () => {
  const [scrollYValue, setScrollYValue] = useState('');

  const handleScroll = () => {
    setScrollYValue(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    console.log(scrollYValue);
  });

  return (
    <>
      <Header />
      <Info scrollY={scrollYValue} />
      <Carousel scrollY={scrollYValue} />
      <Description scrollY={scrollYValue} />
      <Footer scrollY={scrollYValue} />
    </>
  );
};
