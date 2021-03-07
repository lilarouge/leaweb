import React, {Component} from "react";
import './NavigationBar.css';
import { Link} from "react-router-dom";

class NavigationBar extends Component {
    render() {
      return (
        <div className='NavigationBar'>

                  <nav className="nav1">
                  <ul className="nav2">
                    <li><Link to='/' className="nav-link">Home</Link></li>
                    <li><Link to='/LeaBio' className="nav-link">About</Link></li>
                    <li><Link to='/Works' className="nav-link">Gallery</Link></li>
                    <li><Link to='/Contact' className="nav-link">Contact</Link></li>
                    
                  </ul>
                  </nav>
               
        </div>
      );
    }
  }
export default NavigationBar;
