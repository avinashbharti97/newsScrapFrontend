import React from 'react';
import '../App.scss';

const News = ({news})=>{
    return(
        <div class = "row">
          <div class = "col">
            {news.map((s)=>(
              <div class="card my-5 news-card">
                    <div class="card-body">
                      <h4 class="card-title">{s.title}</h4>
                      <p class="card-text">{s.content}</p>
                      <a href={s.url} target="_blank" >
                        <button type="button" class="btn btn-link float-right">See full news</button>
                      </a>
                      </div>
                  </div>
            ))}
          </div> 
        </div>
      )
  }

export default News
