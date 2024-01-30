import React  from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'
import { useState } from 'react'

export default function Navbar(props) {

  const [darkModeColor, setdarkModeColor] = useState('primary')

  const setDarkModeColor = (color, button) => {
    setdarkModeColor(color);
    props.toggleMode(darkModeColor);
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.aboutText}</a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          <button type="button" onClick={() => setDarkModeColor("primary", "colorbtn")} className="btn btn-primary btn-circle btn-sm mx-3">Blue</button>
          <button type="button" onClick={() => setDarkModeColor("secondary", "colorbtn")} className="btn btn-secondary btn-circle btn-sm">Grey</button>
          <button type="button" onClick={() => setDarkModeColor("purple", "colorbtn")} className="btn btn-purple btn-circle btn-sm mx-3">Purple</button>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {title : PropTypes.string.isRequired,
                    aboutText : PropTypes.string
                }

// We use this default if anything is not passed from the App.js file

// Navbar.defaultProps = {
//     title : 'Set title here',
//     aboutText : 'About Text here'
// }