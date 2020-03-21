import React from 'react';

const News = ({news})=>{
    return(
      <div>
        <center><h1>corona news</h1></center>
        {news.map((s)=>(
          <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{s.title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{s.url}</h6>
                  <p class="card-text">{s.content}</p>
                </div>
              </div>
        ))}
      </div>
      )
  }

export default News
