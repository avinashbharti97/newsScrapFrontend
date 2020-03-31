import React from 'react';
import '../App.scss';
import Slide from 'react-reveal/Slide';

const News = ({news})=>{
    return(
      <div class = "row">
          <div class="col-6 update-time mt-5">
            <h6 class="text-left font-weight-bold">LATEST</h6>
          </div>
          <div class="col-6 update-time mt-5">
            <p class="text-right">Mar 30, 23:18</p>
          </div>
          <div class = "col">
            {news.map((s)=>(
                <div class="card mb-5 news-card">
                  <div class="card-body">
                    <h4 class="card-title">{s.title}</h4>
                    <p class="card-text">{s.content}</p>
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
