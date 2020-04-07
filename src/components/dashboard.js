import React from 'react';
import LineChart from './lineChart'
import '../App.scss'

const Dashboard = ()=>{
  return(
    <div class="row my-5">
      <div class="col-12">
        <div class="card news-card">
          <div class="card-body">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 col-md-3">
                  <div class="container">
                    <div class="row">
                      <div class="col-4 col-md-12">h</div>
                      <div class="col-4 col-md-12">h</div>
                      <div class="col-4 col-md-12">j</div>
                    </div>
                  </div> 
                </div>
                <div class="col-12 col-md-9">
                  <LineChart /> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
