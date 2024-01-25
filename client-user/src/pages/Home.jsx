import { useState, useEffect } from 'react';
import { Header } from '../components/ui/Header';
import { Logo } from '../components/home/Logo';
import { BrandMenu } from '../components/home/BrandMenu';
import { Carousel } from '../components/home/Carousel';
import { BrandPromise } from '../components/home/BrandPromise';
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
      <BrandMenu scrollY={scrollYValue} />
      <Carousel scrollY={scrollYValue} />
      <BrandPromise scrollY={scrollYValue} />
      <Footer scrollY={scrollYValue} />
    </>
  );
};
