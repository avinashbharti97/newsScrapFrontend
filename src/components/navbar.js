import React from 'react';
import {  NavLink } from "react-router-dom";
import '../App.scss';
import textlogo from '../svg/text.svg'
import videologo from '../svg/video.svg';

const Navbar = ()=>{
  return(
    <div>
      <div class = "row mb-4 mt-5">
        <div class="col-6 text-center">

          <NavLink exact to="/" activeClassName="section-route-active" className = "section-route">
              <img src={textlogo} className="text-logo" alt="textlogo" />
          </NavLink>
        </div>
        <div class="col-6 text-center">
          <NavLink to="/vidNews" activeClassName="section-route-active" className = "section-route">
              <img src={videologo} className="video-logo" alt="videologo" />
          </NavLink>
        </div>
      </div>
  </div>
      )
  }

export default Navbar 
