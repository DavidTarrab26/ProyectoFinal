import './App.css';
<<<<<<< HEAD
import Footer from './componentes/Footer/Footer';
import Home from './componentes/home/Home';
//import Navbar from './componentes/navbar/Navbar';
import UserProvaider from './store/appContext';
=======
import Footer from './componentes/footer';
>>>>>>> 7c7a4dad96a8a2f2c5c3580c2abb6bc5398066c4


function App() {
  return (
    <>
      <UserProvaider>
        
        <Home />
        <Footer/>
      </UserProvaider>
    </>
  );
}

export default App;
