import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import ITMaintenance from './components/ITMaintenance'
import WhyBluemine from './components/WhyBluemine'
import Clients from './components/Clients'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <ITMaintenance />
      <WhyBluemine />
      <Clients />
      <Contact />
    </>
  )
}

export default App
