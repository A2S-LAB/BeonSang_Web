import { useState, useEffect } from 'react';
import { Header } from '../components/ui/Header';
import { Logo } from '../components/home/Logo';
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
  });

  return (
    <>
      <Header />
      <Logo scrollY={scrollYValue} />
      <Info scrollY={scrollYValue} />
      <Carousel scrollY={scrollYValue} />
      <Description scrollY={scrollYValue} />
      <Footer scrollY={scrollYValue} />
    </>
  );
};
