import './App.css';
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import Featured from './Components/Featured';
//  import Login from './Components/Login'
//  import Register from './Components/Register'
function App() {
  return (
    <div >
        <Nav/>
        <Hero/>
        <Featured/>
        {/* <Login/>  
        <Register/>   */}
    </div>
  );
}

export default App;
