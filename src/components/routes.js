import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import '../App.scss';
import News from './news.js';
import Video from './video.js';
import Loader from './loader.js';
import Footer from './footer.js'

const Routes = ({news })=>{
    return(
            <Switch>
              <Route exact path="/">
                {
                  news.loadingNews?
                    <Loader/>:
                    <div>
                      <News news = {news} />
                      <Footer/>
                    </div>
                }
              </Route> 
              <Route path="/vidNews">
                  <Video/>
                </Route> 
              
            </Switch>
      )
  }

export default Routes
