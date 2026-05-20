import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
// import ParticleBg from './components/ParticleBg'  
import ScrollBar from './components/ScrollBar'



function App() {
  return (
    <>

      {/* <ParticleBg /> */}
      <ScrollBar />

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App