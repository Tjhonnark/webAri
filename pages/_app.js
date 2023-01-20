import React, { useState, useEffect } from 'react';
import Head from "next/head";
/* COMPONENTS */
import Layout from '../components/Layout';
/* STYLES */
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, [])

  // Burger
  const [styleBurger, setStyleBurger] = useState(true);

  // Scroll Up
  const [styleScrollUp, setStyleScrollUp] = useState(true)

  // Scroll Up hidden
  useEffect(() => {
    addEventListener('scroll', (event) => {
      var scroll = document.documentElement.scrollTop;

      if (scroll < 600) {
        setStyleScrollUp(true);
      } else {
        setStyleScrollUp(false);
      }
      if (scroll < 4300) {
        setStyleBurger(true);
      } else {
        setStyleBurger(false);
      }
    });
  }, [])

  // Scroll Up function 
  const scrollUpFunction = () => {
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0) {
      /* window.requestAnimationFrame(scrollUp); */
      window.scrollTo(0, 0);
    }
  }

  //IMAGE
  const [Image, setImage] = useState(true)

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    
    var width = windowSize.width;
    
    if (width > 500) {
      setImage(true);
    } else {
      setImage(false);
    }
    

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log(Image)

  return (
    <div>
      <Head>
        <title>Conos y Waffles Clarita</title>
        <meta name="description" content="Hacemos tu mundo más dulce y feliz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Layout>
        <Component
          {...pageProps}
          scrollUpFunction={scrollUpFunction}
          styleScrollUp={styleScrollUp}
          styleBurger={styleBurger}
          Image={Image}
        />
      </Layout>

    </div>
  );
}

export default MyApp
