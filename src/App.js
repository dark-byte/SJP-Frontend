import './App.css';
import Hero from './Components/Hero';
import Nav from './Components/Nav';
 import Login from './Components/Login'
 import Register from './Components/Register'
import LandingCategories from './Components/LandingCategories';
function App() {
  return (
    <div >
      <LandingCategories/>
       <Nav/> 
       <Hero/> 
        <Login/>  
        <Register/>  
    </div>
  );
}

export default App;
