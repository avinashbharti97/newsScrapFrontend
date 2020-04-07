import React from 'react';
import LineChartTotal from './lineChartTotal.js';
import LineChartDaily from './lineChartDaily.js';
import '../App.scss'

const Dashboard = ({data})=>{
  return(
    <React.Fragment>
    <div class="row my-5">
      <div class="col-12 col-md-6 cum">
      <div class="col-12"><p>Cumulative</p></div>
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
      <div class="col-12"><p>Daily</p></div>
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
    <div class="row my-5">
      <div class="col-12">
        <div class="card news-card">
          <table class="table table-borderless table-hover">
            <thead class="thead-dark">
              <tr class="table-title font-weight-bold">
                <th scope="col">STATE/UT</th>
                <th scope="col">CNF</th>
                <th scope="col">REC</th>
                <th scope="col">DEC</th>
              </tr>
            </thead>
            <tbody class="table-body">
              {data.stateWise.map((s)=>(
                s.map((x)=>(
                  <tr>
                    <td>{x.state}</td>
                    <td><span class="inline state-cnf">+{x.deltaconfirmed}</span><span class="inline state-cnf-d">{x.confirmed}</span></td>
                    <td><span class="inline state-rec">+{x.deltarecovered}</span><span class="inline state-rec-d">{x.recovered}</span></td>
                    <td><span class="inline state-dec">+{x.deltadeaths}</span><span class="inline state-dec-d">{x.deaths}</span></td>
                  </tr>
                ))
              ))}
           </tbody>
          </table>
        </div>
      </div>
    </div>
      <div class="mx-auto btn btn-dark float-center source-btn"><a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSc_2y5N0I67wDU38DjDh35IZSIS30rQf7_NYZhtYYGU1jJYT6_kDx4YpF-qw0LSlGsBYP8pqM_a1Pd/pubhtml"> crowdsourced patient database</a></div>
  </React.Fragment>
  )
}

export default Dashboard;
