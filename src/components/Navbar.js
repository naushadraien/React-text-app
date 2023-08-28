import React from 'react'
import PropTypes from 'prop-types'
// Link is imported to use Link and to in our code
import { Link } from 'react-router-dom';

//props in react

export default function Navbar(props) {
  return (
    // Here ${props.mode}  and ${props.mode} are variables
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        {/* <a className="navbar-brand" href="/">
          {props.title}
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* Here <a></a> is change to <Link></Link> and href="" is changed to to="" */}
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
              {/* <a className="nav-link" aria-current="page" href="/">
                Home
              </a> */}
            </li>
            <li className="nav-item">
              {/* Here <a></a> is change to <Link></Link>  and href="" is changed to to="" */}
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
              {/* <a className="nav-link" href="/about">
                {props.aboutText}
              </a> */}
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form> */}
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Set Title Here',
  aboutText: 'About'
};