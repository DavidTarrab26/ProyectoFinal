import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/navbar/Navbar';
import Footer from './componentes/Footer';
import Home from './componentes/home';
import AppProvider from './store/appContext';
import Pantalones from './componentes/pantalones/Pantalones';
import Bermudas from './componentes/bermudas'
import Admin from './componentes/admin/Admin';
import Detalle from './componentes/detalle';
<<<<<<< HEAD
import Registrarse from './componentes/registrarse';
import Login from './componentes/login';
=======
import Carrito from './componentes/carritos/Carrito';

>>>>>>> 24ae192337a7c8ac31681fa0d9c2cc0bb64cf281

function App() {
  return (
    <>

      <AppProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pantalones' element={<Pantalones />} />
            <Route path='/bermudas' element={<Bermudas />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/:id' element={<Detalle />} />
<<<<<<< HEAD
            <Route path='/registrarse' element={<Registrarse/>} />
            <Route path='/login' element={<Login/>} />
=======
            <Route path='/carrito' element={<Carrito />} />
>>>>>>> 24ae192337a7c8ac31681fa0d9c2cc0bb64cf281
          </Routes>
          <Footer/>
        </Router>
      </AppProvider>

    </>
  );
}

export default App;
