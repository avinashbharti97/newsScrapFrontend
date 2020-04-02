import React from 'react';
import '../App.scss';

const Stats = ({stats})=>{
  return(
      <div class="row">
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
              </div>
  )
}     
export default Stats 
