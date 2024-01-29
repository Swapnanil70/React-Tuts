import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
    {/* This is a prop or passing a prop */}
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
    {/* <Navbar/> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert="This is an Alert."/>
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze below" mode={mode}/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
