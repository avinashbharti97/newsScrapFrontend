import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import '../App.scss';
import News from './news.js';
import Video from './video.js';
import Loader from './loader.js';

const Routing = ({news})=>{
    return(
          <Router>
            <div class = "row mt-5">
              <nav>
              <NavLink exact to="/" activeClassName="section-route--active"><p class="text-center" >Text</p></NavLink>
                <NavLink to="/vidNews" activeClassName="section-route--active"><p class="text-center" >video</p></NavLink>
            </nav>
           </div>
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
            </Switch>
            <Switch>
              <Route exact path="/vidNews"><Video news = {news}/></Route> 
            </Switch>
         </Router>
      )
  }

export default Routing 
