import React from 'react';
import '../App.scss';

const News = ({news})=>{
    return(
      <div class = "row">
          <div class="col-6 update-time mt-5">
            <h6 class="text-left font-weight-bold">LATEST</h6>
          </div>
          <div class="col-6 update-time mt-5">
            <p class="text-right fetch-time">FETCHED AT : {news.newsScrapeTime}</p>
          </div>
          <div class = "col">
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
