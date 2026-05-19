import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Hero from './components/sections/Hero'
import Navbar from './components/layout/Navbar'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-slate-50 text-gray-900 dark:bg-black dark:text-white'>
      <Navbar/>

      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact />
        
      </main>

      <Footer />
    </div>
  )
}

export default App
