import React from 'react';
import LineChartTotal from './lineChartTotal.js';
import LineChartDaily from './lineChartDaily.js';
import '../App.scss'

const Dashboard = ({data})=>{
  return(
    <div class="row my-5">
      <div class="col-12 col-md-6">
        <div class="card news-card">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12">
                  <LineChartTotal dailyData = {data}/> 
                </div>
              </div>
            </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="card news-card">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12">
                  <LineChartDaily dailyData = {data}/> 
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
