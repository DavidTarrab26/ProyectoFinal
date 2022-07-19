import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/navbar';
import Footer from './componentes/footer';
import Home from './componentes/home';
import AppProvider from './store/appContext';
import Pantalones from './componentes/pantalones';
import Bermudas from './componentes/bermudas'
import Admin from './componentes/admin/Admin';
import Detalle from './componentes/detalle';
import Registrarse from './componentes/registrarse';
import Login from './componentes/login';
import Carrito from './componentes/carritos/Carrito';



function App() {
  return (
    <>

      <AppProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='proyectofinal/' element={<Home />} />
            <Route path='proyectofinal/pantalones' element={<Pantalones />} />
            <Route path='proyectofinal/bermudas' element={<Bermudas />} />
            <Route path='proyectofinal/admin' element={<Admin />} />
            <Route path='proyectofinal/registrarse' element={<Registrarse/>} />
            <Route path='proyectofinal/login' element={<Login/>} />
            <Route path='proyectofinal/carrito' element={<Carrito />} />
            <Route path='/:id' element={<Detalle />} />
          </Routes>
          <Footer/>
        </Router>
      </AppProvider>

    </>
  );
}

export default App;
