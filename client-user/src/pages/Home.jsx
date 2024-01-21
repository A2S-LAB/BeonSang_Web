import { useState, useEffect } from 'react';
import { Header } from '../components/ui/Header';
import { Info } from '../components/home/Info';
import { Carousel } from '../components/home/Carousel';
import { Description } from '../components/home/Description';
import { Footer } from '../components/home/Footer';

export const Home = () => {
  return (
    <>
      <Header />
      <Info />
      <Carousel />
      <Description />
      <Footer />
    </>
  );
};
