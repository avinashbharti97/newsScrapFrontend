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
        {/*        <div class="col-4 text-center">
          <NavLink exact to="/bookmarks" activeClassName="section-route-active" className = "section-route">
            <svg height="8vmin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <path
                  fill="#2b2e63"
                  d="M63.45 40.24L23.77.55c-.74-.73-1.93-.73-2.67 0L.56 21.1c-.36.35-.56.83-.56 1.33s.2.98.56 1.33l39.68 39.69a1.883 1.883 0 001.99.43c.69-.25 1.17-.88 1.22-1.62l1.35-17.47 17.47-1.34c.73-.06 1.36-.54 1.62-1.23.25-.69.08-1.46-.44-1.98zm-20.55.92c-.93.07-1.66.81-1.73 1.74l-1.16 14.99L4.55 22.43 22.43 4.55 57.9 40.01l-15 1.15z"
                ></path>
                <path
                  fill="#ffdc7c"
                  d="M57.9 40.01l-15 1.15c-.93.07-1.66.81-1.73 1.74l-1.16 14.99L4.55 22.43 22.43 4.55 57.9 40.01z"
                ></path>
            </svg>
          </NavLink>
        </div>*/}
      </div>
    </div>
      )
  }

export default Navbar 
