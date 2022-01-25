import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/navbar/Navbar';
import Footer from './componentes/Footer';
import Home from './componentes/home/Home';
import UserProvaider from './store/appContext';
import Pantalones from './componentes/pantalones/Pantalones';
import Bermudas from './componentes/bermudas'
import Admin from './componentes/admin/Admin';
import Detalle from './componentes/detalle';


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
            <Route path='/:id' element={<Detalle />} />
          </Routes>
          <Footer/>
        </Router>
      </UserProvaider>

    </>
  );
}

export default App;
