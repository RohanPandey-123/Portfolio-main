import { BrowserRouter } from "react-router-dom"
import {About, Experience,Contact,Hero,Navbar,Tech,Works} from './components';
 
const App = ()=>{
  return (
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar/>
            <Hero/>
          </div>
          <div id="about">
            <About/>
          </div>
          <Experience/>
          <Tech/>
          <div id="work">
            <Works/>
          </div>
          <div className="relative z-0" id="contact">
            <Contact/>
          </div>
        </div>
      </BrowserRouter>
  )
}

export default App
