import logo from './logo.svg';
import './App.css';
import Navbar from 'C:/work/DEV/REACT/wellvise/src/global/Navbar.js';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Footer from './global/Footer';
import Landing from './landing/Landing';
import Plans from './plans/Plans';
import Services from 'C:/work/DEV/REACT/wellvise/src/product/Services.js';

function App() {
  return (
    <div className="b">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Landing/>}/> 
          <Route path='/Plans' element={<Plans/>}/>
          <Route path='/Services' element={<Services/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
