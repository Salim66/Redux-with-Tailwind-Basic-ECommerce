import React, { useEffect } from 'react';
import Footer from '../../../components/Footer/Footer';
import Header from '../Header/Header';
import Shop from '../Shop/Shop';

const Home = () => {

  useEffect(() => {
    window.scroll(0,0);
  }, []);

  return (
    <>
        <Header />
        <Shop />
        <Footer />
    </>
  )
}

export default Home