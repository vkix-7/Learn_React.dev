import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact'; 
import Nav from './Components/Nav';
import {Route,Routes} from 'react-router';
function App() {
  return (
    <div className="App"> <Nav/>
      <header className="App-header">
       
        <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/About" Component={About}></Route>
        <Route path="/Contact" Component={Contact}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
