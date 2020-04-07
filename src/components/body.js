import React from 'react';
import { Switch, Route,  NavLink } from "react-router-dom";
import '../App.scss';
import Landing from './landing';
import Dashboard from './dashboard';
import Video from './video';
import Title from './titleLogo.js'
import Stats from './stats.js';
import logo from '../svg/logo.svg'
import Navbar from './navbar.js'
const Body = ({state})=>{
  return(
    <Switch>
      <Route exact path='/'> <Landing state = {state}/> </Route>
      <Route path='/dashboard'> <Dashboard data = {state}/> </Route>
      <Route path="/vidNews">
        <Title/>
        <Stats stats={state.stats}/>
        <Navbar/>
        <Video/>
      </Route> 
    </Switch>
  )
}     
export default Body 
