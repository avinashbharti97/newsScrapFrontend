import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import '../App.scss';
import News from './news.js';
import Video from './video.js';
import Loader from './loader.js';
import Footer from './footer.js'

const Routes = ({news })=>{
  return(
    <React.Fragment>
      {
        news.loadingNews?
          <Loader/>:
          <div>
            <News news = {news} />
            <Footer/>
          </div>
      }
      <Switch>
      <Route path="/vidNews">
        <Video/>
      </Route> 
    </Switch>
  </React.Fragment>
    )
  }

export default Routes
