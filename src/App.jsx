import './App.css'

import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact';

function App() {


  return (
    <>
      <div className='select-none'>

        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
      </div>
    </>
  )
}

export default App
