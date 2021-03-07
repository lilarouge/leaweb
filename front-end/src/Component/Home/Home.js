import React, {Component} from "react";
import {Link} from "react-router-dom";
import './Home.css';



class Home extends Component {
    render() {
      return (
          <div className="Home">
          <img src="Images/home2.jpg" className="home2"/>
          <a>
          <li><Link to='/LeaBio' className="LeaTitle">Lea Bessoudo Greck </Link></li><br/>
          {/* <li><Link to='/LeaBio' className="Artist"> Video Artist</Link></li> */}
          <img src="Images/home1.jpg" className="home1"/>
          </a>
          </div>
      );
    }
  }

export default Home;


