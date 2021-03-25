
import './App.css';
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      {/* 
      
      -route
      -sign in


       */}
       <Navbar/>
       <Signin/>
    </div>
  );
}

export default App;
