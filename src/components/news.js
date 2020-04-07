import React from 'react';
import '../App.scss';
//import '../card-col.scss'
import Footer from './footer.js'

const News = ({news})=>{
  return(
    <React.Fragment>
      <div class = "row">
          <div class="col-6 update-time mt-2">
            <h6 class="text-left font-weight-bold">LATEST</h6>
          </div>
          <div class="col-6 update-time mt-2">
            <p class="text-right fetch-time">FETCHED : {news.newsScrapeTime}</p>
          </div>
          <div class="col-12">
            <div class="card-columns">
          {news.news.map((s)=>(
            <div class="card mb-4 news-card" >
                  <div class="card-body">
                    <h4 class="card-title title">{s.title}</h4>
                    <p class="news-time">{s.time}</p>
                    <p class="card-text content">{s.content}</p>
                    <a  class="" style = {{textDecoration: 'none'}}href={s.url} target="_blank" class="btn btn-link float-right mb-4" role="button" >
                      See full news
                    </a>
                  </div>
                </div>
            ))}
            </div>
        </div>
      </div>
      </React.Fragment>
      )
  }

export default News
