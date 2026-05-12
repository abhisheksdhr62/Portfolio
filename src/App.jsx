import { useState } from 'react'
import Navbar from "../src/components/Navbar"
import Hero from "../src/components/Hero";
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import './App.css'
import Projects from './components/Projects';
import Contact from "./components/Contact"
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Certificates from './components/Certificate';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
    <Skills/>
    <Projects/>
    <Certificates/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
