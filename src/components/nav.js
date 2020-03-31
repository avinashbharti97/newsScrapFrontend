import React from 'react';
import '../App.scss';
import logo from '../svg/logo.svg'
import github from '../svg/Github.svg'

const Nav = ()=>{
  return(
        <div class="row my-3">
          <div class="col">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div class="col text-right font-weight-bold">
            <a href="https://github.com/avinashbharti97/newsScrap">
              <p>/github</p>
              {  /*<img src={github} className="github-logo float-right" alt="github-logo" />*/}
            </a>
          </div>
        </div>
  )
}     
export default Nav
