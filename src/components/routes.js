import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import '../App.scss';
import News from './news.js';
import Video from './video.js';
import Loader from './loader.js';

const Routes = ({news})=>{
    return(
            <Switch>
              <Route exact path="/">
                {
                  news.loadingNews?
                    <Loader/>:
                    <div>
                      <News news = {news} />
                    </div>
                }
              </Route> 
              <Route exact path="/vidNews"><Video/></Route> 
            </Switch>
      )
  }

export default Routes
