import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import ChatBot from "./components/ChatBot";

export default function App() {
  return (
    <>
      <Navbar/>
      <ChatBot />
      <Hero/>
      <Skills/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <Footer/>
    </>
  )
}