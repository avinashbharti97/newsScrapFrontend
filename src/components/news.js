import React from 'react';
import { Link } from 'react-router-dom';
const News = ({news})=>{
    return(
      <div>
        <center><h1>corona news</h1></center>
        {news.map((s)=>(
          <div class="card m-4">
                <div class="card-body">
                  <h5 class="card-title">{s.title}</h5>
                  <p class="card-text">{s.content}</p>
                  <a href={s.url} target="_blank">see full news here</a>
                </div>
              </div>
        ))}
      </div>
      )
  }

export default News
