import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Browse from './components/Browse';
import Arrive from './components/Arrive';
import Clients from './components/Clients';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Offline from './components/Offline';

export default function App() {
  const [items, setItems] = useState([])
  const [offlineStatus, setofflineStatus] = useState(!navigator.onLine);

  useEffect(() => {
    (async function(){
      const res = await fetch(
        'https://bwacharity.fly.dev/items', 
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            // "x-api-key": process.env.REACT_APP_APIKEY,
          }
        }
      )
      const { nodes } = await res.json()
      setItems(nodes);

      const script = document.createElement('script')
      script.src = '/carousel.js'
      script.async = false
      document.body.appendChild(script)
    })();
    handleOfflineStatus()
    window.addEventListener('online', handleOfflineStatus);
    window.addEventListener('offline', handleOfflineStatus);

    return () => {
      window.removeEventListener('online', handleOfflineStatus);
      window.removeEventListener('offline', handleOfflineStatus);
    }
  }, [offlineStatus]);

  const handleOfflineStatus = () => {
    setofflineStatus(!navigator.onLine);
  }
  
  return (
    <>
      {offlineStatus && <Offline/>}
      <Header/>
      <Hero/>
      <Browse/>
      <Arrive items={items} />
      <Clients/>
      <Aside/>
      <Footer/>
    </>
  )
}
