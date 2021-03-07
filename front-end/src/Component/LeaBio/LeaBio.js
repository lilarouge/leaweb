import React, {Component} from "react";
import {Link} from "react-router-dom";
import './LeaBio.css';

class LeaBio extends Component {
    render() {
      return (
          <div className="LeaBio">
          <p className="LeaText">
          Léa Bessoudo Greck is a Franco-Israeli artist. <br/>
          She was born in South of France in 1994 and started her artistic education from a very young age at the prestigious Monaco Academy of Dance.<br/> 
          She pursued her carrier as a dancer and choregrapher at the Kibbutz Contemporary Dance Company (Israel).<br/>
          Her passion for art and visual compositions didn't stop on stage as she is known as a painter and a video maker.<br/>
          Her subtle eye and her passion for movement always brings her to investigate the object she films and portraits it in a very unique way.<br/>
          Inspired by the "pop art" heritage she is constantly requestionning our perception of reality.<br/>
          Her work is a true dive inside her deepest fantasies. <br/>
          </p>  
            <img src="Images/LeaBioPhoto.jpg" className="LeaBioPhoto"/>


          </div>
      );
    }
  }
export default LeaBio;
