// import { BrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import {
  About, HeroSection, IntroVideo,
  Experience, Navbar, StarsCanvas, Drop
} from './components'
import Stars from './components/canvas/Stars'

function App() {
  return (
    <Router>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          {/* <LoginModal /> */}
          <HeroSection />
          <About />
          <p className='mt-28' style={{ marginTop: '600px'}}></p>
          <p className='mt-28' style={{ marginTop: '600px'}}></p>
          {/* <Drop /> */}
          {/* <Hero /> */}
        </div>
        {/* <About /> */}
        {/* <Experience /> */}
        {/* <div className='relative z-0'> */}
          {/* <StarsCanvas /> */}
        {/* </div> */}
      </div>
    </Router>
  )
}

export default App;
