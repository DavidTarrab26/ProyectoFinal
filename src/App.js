import './App.css';


import Navbar from './componentes/navbar/Navbar';
import Footer from './componentes/Footer/Footer';
import Home from './componentes/home/Home';
//import Navbar from './componentes/navbar/Navbar';
import UserProvaider from './store/appContext';


function App() {
  return (
    <>

      <UserProvaider>
        <Navbar/>
        <Home />
        <Footer/>
      </UserProvaider>

    </>
  );
}

export default App;
