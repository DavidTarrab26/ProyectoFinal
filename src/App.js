import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/navbar/Navbar';
import Footer from './componentes/Footer';
import Home from './componentes/home/Home';
import UserProvaider from './store/appContext';


function App() {
  return (
    <>

      <UserProvaider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer/>
        </Router>
      </UserProvaider>

    </>
  );
}

export default App;
