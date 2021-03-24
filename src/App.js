import logo from './logo.svg';
import './App.css';
import Signup from "./pages/Signup"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      {/* 
      
      -route
      -sign in


       */}
       <Navbar></Navbar>
       <Signup></Signup>
    </div>
  );
}

export default App;
