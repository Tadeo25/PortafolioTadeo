import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import Cover from './components/cover/Cover'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Info from './components/info/Info';
function App() {
const [scrollHeight, setScrollHeight] = useState(0)

const handleScroll = () => {
  const position = window.pageYOffset;
  setScrollHeight(position);
};
useEffect(() => {
  window.addEventListener("scroll", handleScroll);
}, [scrollHeight]);
  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
       <Cover />
       <About />
       <Info />
       <Footer />
    </div>
  );
}

export default App;
