import React from 'react';
import '../App.scss';

const Stats = ({stats})=>{
  return(
      <div class="row">
                <div class="col-3 text-center cnf">
                  <p>CONFIRMED</p> 
                  <p>{stats.cnf}</p>
                </div>
                <div class="col-3 text-center act">
                  <p>ACTIVE</p> 
                  <p>{stats.act}</p>
                </div>
                <div class="col-3 text-center rec">
                  <p>RECOVERED</p>
                  <p>{stats.rec}</p>
                </div>
                <div class="col-3 text-center dec">
                  <p>DECEASED</p>
                  <p>{stats.dec}</p>
                </div>
              </div>
  )
}     
export default Stats 
