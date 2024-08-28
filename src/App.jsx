import {Suspense,lazy} from 'react'
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Loader from './components/Loader';
const Home = lazy(()=> import('./components/Home'))
const About = lazy(()=> import('./components/About'))
const Contact = lazy(()=> import('./components/Contact'))
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ParticleBg from './particleBg/ParticleBg';

function App() {
  
  return ( 
    <Suspense fallback={<Loader/>}>
    <Router>
      <div className="bg-slate-950 h-screen md:flex md:flex-col md:justify-between">
      <Navbar/>
         <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <ParticleBg/>
      <Footer/>
      
    </div>
    </Router>
  </Suspense>
   );
  }
export default App;