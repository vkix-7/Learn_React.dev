// {/* <import './App.css'; */}
// import Color from './components/Color';
// import Effect2 from './components/Effect2';
// import Todo from './components/Todo'; 
import React,{useState} from 'react';
import { inputcontext } from './context/context';
import Footer1 from './components/Footer1';

function App() {

  const [input, setInput] = useState();
  console.log(input);
  return (
    <>
      <inputcontext.Provider value={input}>
      <div className ="app">
        <Footer1/>
        <h1>React App</h1>
        <h1>{input}</h1>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input></div> 
      </inputcontext.Provider>
    </>
  );
}

export default App; 