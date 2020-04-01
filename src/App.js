import React, {Component} from 'react';
import News from './components/news';
import Nav from './components/nav';
import Title from './components/titleLogo.js';
import Loader from './components/loader';
import Stats from './components/stats';

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

  componentDidMount() {

    //fetch('https://avinashbharti97-newsscrap.glitch.me/getNews')
    fetch('http://localhost:3000/getNews')
      .then(res => res.json())
      .then((data) => {
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

    fetch('https://api.covid19india.org/data.json')
      .then(res=> res.json()).then((data)=>{
        this.setState({
          stats:{
            cnf: data.statewise[0].confirmed,
            act: data.statewise[0].active,
            rec: data.statewise[0].recovered,
            dec: data.statewise[0].deaths,
            statsUpdatedTime: data.statewise[0].lastupdatedtime,
            tdcnf: data.key_values[0].confirmeddelta,
           tdrec: data.key_values[0].recovereddelta,
            tddec: data.key_values[0].deceaseddelta,
          },
          loadingStats:false
        })
      })
      .catch(console.log)
  }


  render(){
    return(
      <div class="container">
        <Nav/>
        <Title/>
        {
          this.state.loadingNews?
            <Loader/>:
            <div>
              <Stats stats = {this.state.stats}/>
              <News news = {this.state} />
            </div>
        }
    </div>
    );
  }
}
export default App;
