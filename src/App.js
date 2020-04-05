import React, {Component} from 'react';
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import News from './components/news';
import Footer from './components/footer'
import Nav from './components/nav';
import Navbar from './components/navbar.js';
import Routes from './components/routes.js';
import Title from './components/titleLogo.js';
import Loader from './components/loader';
import Stats from './components/stats';
import Routing from './components/routing';
import Video from './components/video'

class App extends Component {
  state = {
    news: [],
    stats:{
      cnf:0,
      act:0,
      rec:0,
      dec:0,
      statsUpdatedTime:0,
      tdcnf:0,
      tdact:0,
      tdrec:0,
      tddec:0
    },
    newsScrapeTime:0,
    loadingNews:true,
    loadingStats:true
  }

  async componentDidMount() {

    await fetch('https://api.covid19india.org/data.json')
      .then(res=> res.json()).then((data)=>{
        this.setState({
          stats:{
            cnf: data.statewise[0].confirmed,
            act: data.statewise[0].active,
            rec: data.statewise[0].recovered,
            dec: data.statewise[0].deaths,
            statsUpdatedTime: data.statewise[0].lastupdatedtime,
            tdcnf: data.statewise[0].deltaconfirmed,
           tdrec: data.statewise[0].deltarecovered,
            tddec: data.statewise[0].deltadeaths,
          },
          loadingStats:false
        })
      })
      .catch(console.log)
    await fetch('https://avinashbharti97-newsscrap.glitch.me/getNews')
    //fetch('http://localhost:3000/getNews')
      .then(res => res.json())
      .then((data) => {
        data.news.sort(()=>Math.random()-0.5);
        this.setState({
          news: data.news.map(obj=>({
            title: obj.title,
            url: obj.url,
            content: obj.content,
            source: obj.source,
            time: obj.time
          })),
          newsScrapeTime: data.time, 
          loadingNews: false,
        })
      })
      .catch(console.log)
  }


  render(){
    return(
      <div class="container">
        <BrowserRouter>
          <Nav/>
          <Title/>
          <Stats stats = {this.state.stats} />
          <Navbar />
          <Routes news={this.state}/>
        </BrowserRouter>
    </div>
    );
  }
}
export default App;
