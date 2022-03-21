import React, { Component } from 'react';
import {Link, NavLink} from "react-router-dom";
class Navbar extends Component {
   
    render() { 
        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{marginRight:1600}} >Digibyen</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">

        <NavLink className="nav-link" to="/omOss">Om oss</NavLink>
        <NavLink className="nav-link" to="/kontaktOss">Kontakt</NavLink>
        <NavLink className="nav-link " to="#">Noe annet</NavLink>
      </div>
    </div>
  </div>
</nav>);
    }
}
 
export default Navbar;