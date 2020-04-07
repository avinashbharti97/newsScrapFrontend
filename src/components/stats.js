import React from 'react';
import '../App.scss';
import {NavLink} from "react-router-dom"
import arrow from '../svg/Arrow.svg'

const Stats = ({stats})=>{
  return(
    <NavLink style = {{textDecoration:'none'}}to="/dashboard">
      <div class="row ">
        <div class="col-3 text-center cnf">
          <p class="stats-heading">CONFIRMED</p> 
          <p>{stats.cnf}</p>
          <p class="td-stat">[+{stats.tdcnf}]</p>
        </div>
        <div class="col-3 text-center act">
          <p class="stats-heading">ACTIVE</p> 
          <p> </p>
          <p>{stats.act}</p>
        </div>
        <div class="col-3 text-center rec">
          <p class="stats-heading">RECOVERED</p>
          <p>{stats.rec}</p>
          <p class="td-stat">[+{stats.tdrec}]</p>
        </div>
        <div class="col-3 text-center dec">
          <p class="stats-heading">DECEASED</p>
          <p>{stats.dec}</p>
          <p class="td-stat">[+{stats.tddec}]</p>
        </div>
        <div class="col-12 text-right arrow">
          <svg
            height="8vmin"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            version="1.1"
            viewBox="0 0 50 50"
            xmlSpace="preserve"
          >
            <path id="arrow" d="M1 26h43.586l-6.293 6.293 1.414 1.414L48.414 25l-8.707-8.707-1.414 1.414L44.586 24H1z"></path>
          </svg>
        </div>
      </div>
    </NavLink>
  )
}     
export default Stats 
