import React from 'react';
import '../App.scss';
import Footer from './footer.js'

const News = ({news})=>{
    return(
      <div class = "row">
          <div class="col-6 update-time mt-2">
            <h6 class="text-left font-weight-bold">LATEST</h6>
          </div>
          <div class="col-6 update-time mt-2">
            <p class="text-right fetch-time">FETCHED : {news.newsScrapeTime}</p>
          </div>
          <div class = "col-12">
            {news.news.map((s)=>(
                <div class="card mb-5 news-card">
                  <div class="card-body">
                    <h4 class="card-title title">{s.title}</h4>
                    <p class="news-time">{s.time}</p>
                    <p class="card-text content">{s.content}</p>
                    <a href={s.url} target="_blank" class="btn btn-link float-right" role="button" >
                      See full news
                    </a>
                  </div>
                </div>
            ))}
          </div> 
        </div>
      )
  }

export default News
