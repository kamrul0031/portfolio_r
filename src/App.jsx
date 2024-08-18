import {Suspense,lazy} from 'react'
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
const Home = lazy(()=> import('./components/Home'))
const About = lazy(()=> import('./components/About'))
const Contact = lazy(()=> import('./components/Contact'))
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  
  return ( 
    <Router>
      <div className="bg-slate-950 h-screen md:flex md:flex-col md:justify-between">
      <Navbar/>
      <Suspense>
         <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      </Suspense>
      
    </div>
    </Router>
   );
  }
export default App;