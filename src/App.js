import './App.css';
import Footer from './componentes/Footer/Footer';
import Home from './componentes/home/Home';
//import Navbar from './componentes/navbar/Navbar';
import UserProvaider from './store/appContext';


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
