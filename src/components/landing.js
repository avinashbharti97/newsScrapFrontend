import React from 'react';
import Title from '../components/titleLogo.js';
import Stats from '../components/stats.js';
import Navbar from '../components/navbar.js';
import Routes from '../components/routes.js';

const Landing = ({state})=>{
  return(
    <React.Fragment>
      <Title/>
      <Stats stats = {state.stats} />
      <Navbar />
      <Routes news={state}/>
    </React.Fragment>
  )
}
export default Landing;
