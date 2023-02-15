//  import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
          <Link className="navbar-brand"  to={'/'}>NewsMonkey</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-Link"  to={'/'}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link" to={'/business'}>Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link" to={'/entertainment'}>entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link" to={'/health'}>Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link" to={'/science'}>Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link" to={'/sports'}>Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link" to={'/technology'}>Technology</Link>
              </li>  
            </ul>    
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar