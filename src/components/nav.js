import React from 'react';
import {  NavLink } from "react-router-dom";
import '../App.scss';
import logo from '../svg/logo.svg'

const Nav = ()=>{
  return(
        <div class="row my-3">
          <NavLink to='/'>
            <div class="col">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            </NavLink>
          <div class="col text-right font-weight-bold">
            <a style = {{textDecoration:'none'}}href="https://github.com/avinashbharti97/newsScrap">
              <p>/github</p>
              {  /*<img src={github} className="github-logo float-right" alt="github-logo" />*/}
            </a>
          </div>
        </div>
  )
}     
export default Nav
