import React from 'react';
import {WhatsappShareButton, WhatsappIcon,} from 'react-share'
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
                      <div class="row">
                        <div class="col-6">
                          <a  class="" style = {{textDecoration: 'none'}}href={s.url} target="_blank" class="btn btn-link float-left " role="button" >
                            See full news
                          </a>
                        </div>
                        <div class="col-6">
                          <div class="float-right">
                            <WhatsappShareButton url={ "\r\n"+"👉"+s.url+ "\r\n\r\n" +" ✔"+"  ```Read more covid-19 short news at :``` *https://covidnews.netlify.com* "} title={"👉"+s.title}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 18 18"
                              >
                                <g transform="translate(1027.024 -1369.362)">
                                  <circle
                                    style={{ isolation: "auto", mixBlendMode: "normal" }}
                                    cx="-1022.54"
                                    cy="1379.05"
                                    r="2"
                                    fill="#ff5a67"
                                    color="#000"
                                    overflow="visible"
                                  ></circle>
                                  <circle
                                    style={{ isolation: "auto", mixBlendMode: "normal" }}
                                    cx="-1013.684"
                                    cy="1383.105"
                                    r="1.5"
                                    fill="#00d1b6"
                                    color="#000"
                                    overflow="visible"
                                  ></circle>
                                  <circle
                                    cx="-1013.802"
                                    cy="1375.211"
                                    r="1.5"
                                    fill="#00d1b6"
                                    color="#000"
                                    overflow="visible"
                                    style={{ isolation: "auto", mixBlendMode: "normal" }}
                                  ></circle>
                                  <circle
                                    cx="-1021.5"
                                    cy="1378.362"
                                    r="2"
                                    fill="none"
                                    stroke="#373449"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    color="#000"
                                    overflow="visible"
                                    style={{ isolation: "auto", mixBlendMode: "normal" }}
                                  ></circle>
                                  <circle
                                    cx="-1014.5"
                                    cy="1382.362"
                                    r="1.5"
                                    fill="none"
                                    stroke="#373449"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    color="#000"
                                    overflow="visible"
                                    style={{ isolation: "auto", mixBlendMode: "normal" }}
                                  ></circle>
                                  <path
                                    fill="none"
                                    stroke="#a2b7cc"
                                    d="M-1016.15 1381.427l-3.688-2.13m3.687-4l-3.687 2.13"
                                  ></path>
                                  <circle
                                    style={{ isolation: "auto", mixBlendMode: "normal" }}
                                    cx="-1014.5"
                                    cy="1374.362"
                                    r="1.5"
                                    fill="none"
                                    stroke="#373449"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    color="#000"
                                    overflow="visible"
                                  ></circle>
                                </g>
                              </svg>
                            </WhatsappShareButton>
                          </div>
                        </div>
                      </div>
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
