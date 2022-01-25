import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/navbar/Navbar';
import Footer from './componentes/Footer';
import Home from './componentes/home/Home';
import UserProvaider from './store/appContext';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Pantalones from './componentes/pantalones/Pantalones';
import Bermudas from './componentes/bermudas'
import Admin from './componentes/admin/Admin';


function App() {
  return (
    <>

      <UserProvaider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pantalones' element={<Pantalones />} />
            <Route path='/bermudas' element={<Bermudas />} />
            <Route path='/admin' element={<Admin />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer/>
        </Router>
      </UserProvaider>

    </>
  );
}

export default App;
