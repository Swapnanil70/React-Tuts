import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }


  const toggleMode = (color)=>{
    console.log("Mode : ", mode)
    if(mode === 'light'){
      console.log("light mode is set change to dark");
      setMode('dark');
      if (color === "secondary") {
        document.body.style.backgroundColor = '#b4b3b5';
      }
      else if (color === "purple") {
        document.body.style.backgroundColor = '#8a2be2';
      }
      else{
        document.body.style.backgroundColor = '#042743';
      }
      showAlert("Dark Mode has been enabled.", "success");
      document.title = 'TextUtils - DarkMode';
    }
    else {
      console.log("dark mode is set change to light")
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled.", "success");
      document.title = 'TextUtils - LightMode';
    }
  }

  return (
    <>
    <Router>
    {/* This is a prop or passing a prop */}
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
    {/* <Navbar/> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About"/>
    <Alert alert={alert}/>
      <div className="container my-3">
        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />
            <Route exact path="/about" element={<About/>} />
          </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
