import { useState, useEffect } from 'react'
import { Router, Routes, Route } from 'react-router-dom';
import Book from './Book.jsx'
import './App.css'
import Nav from './Nav.jsx'
import Trending from './Trending'
import Poster from './Poster'
import Carousel from './Carousel'
import Footer from './Footer.jsx';

function App() {
  const [api, setApi] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://gautampatil1.github.io/test_data.json');
        const apidata = await response.json();
        setApi(apidata);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (api === null) {
    // Render loading state or fallback UI
    return <div>Loading...</div>;
  }

  const { Fantasy, Mystery, Horror, Philosophy } = api.Data;

  return (
    <>
      <div className="container">
        <Nav />
        <Trending trending={Fantasy}/>
        <Poster />

        <div className="solid-container">
          <Carousel genre={Fantasy} />
          <Carousel genre={Mystery} />
          <Carousel genre={Horror} />
          <Carousel genre={Philosophy} />
          <Footer />
        </div>
      </div>
    </>
  );
}


export default App
