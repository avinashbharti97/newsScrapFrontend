import React from 'react';
import '../App.scss';
import loader from '../svg/hand.svg'

const Loader = ()=>{
  return(
  <center>
    <div class="loader-icon1 m-5">
      <img src={loader} height= "100%" width="100%"   alt="loader" />
    </div>
    <div class="loader-text1"><p>Meanwhile wash your hands folks!</p></div>
  </center>
  )
}     
export default Loader 
