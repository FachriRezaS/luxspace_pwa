import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Browse from './components/Browse';
import Arrive from './components/Arrive';
import Clients from './components/Clients';
import Aside from './components/Aside';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Browse/>
      <Arrive/>
      <Clients/>
      <Aside/>
      <Footer/>
    </>
  )
}
