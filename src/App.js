import React, {Component} from 'react';
import Nav from './components/nav';
import Body from './components/body';
import ReactGA from 'react-ga';

const trackingId = "UA-163239506-1"; // Replace with your Google Analytics tracking ID
function initializeReactGA(){
  ReactGA.initialize(trackingId);
  ReactGA.pageview('/');
}


class App extends Component {
  state = {
    news: [],
    dailyDates:[],
    TotalConfirmedNumbers:[],
    TotalRecoveredNumbers:[],
    TotalDeceasedNumbers:[],
    DailyConfirmedNumbers:[],
    DailyRecoveredNumbers:[],
    DailyDeceasedNumbers:[],
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
    stateWise:[], 
    loadingStats:true,
    
  }

  async componentDidMount() {

    await fetch('https://api.covid19india.org/data.json')
      .then(res=> res.json()).then((data)=>{
        data.cases_time_series.forEach(obj=>{
          this.setState(prevState=>({
                dailyDates: [...prevState.dailyDates, obj.date.slice(0,6)],
               TotalConfirmedNumbers:[...prevState.TotalConfirmedNumbers, obj.totalconfirmed],
                TotalDeceasedNumbers:[...prevState.TotalDeceasedNumbers, obj.totaldeceased],
                TotalRecoveredNumbers:[...prevState.TotalRecoveredNumbers, obj.totalrecovered],
                DailyRecoveredNumbers:[...prevState.DailyRecoveredNumbers, obj.dailyrecovered],
                DailyConfirmedNumbers:[...prevState.DailyConfirmedNumbers, obj.dailyconfirmed],
                DailyDeceasedNumbers:[...prevState.DailyDeceasedNumbers, obj.dailydeceased],
          }))
        });
        let stateWise = this.state.stateWise;
        stateWise.push(data.statewise)
        this.setState(
          {stateWise:stateWise}     
        )
        this.state.stateWise.forEach(obj=>{
          obj.forEach(s=>{
            console.log(s.state)
          })
        })
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
    //await fetch('https://avinashbharti97-newsscrap.glitch.me/news')
    await fetch('https://api.jsonbin.io/b/5e8ecc638e85c8437012fd64/latest')
    //const proxyurl = "https://cors-anywhere.herokuapp.com/";
    //const options = {
      //method: 'GET',
      //url: 'https://covidnews-45ef.restdb.io/rest/news/5e8be8c75053da750001d448',
      //headers:{
        //'Content-Type': 'application/json',
        //'Accept': 'application/json',
        //'x-apikey':'5e8c4d59111788414066c759',
        //'Access-Control-Origin': '*',
        //"Access-Control-Allow-Headers":"Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
        //"Access-Control-Allow-Credentials": "true",
        //"Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT"
      //}
    //}
    //axios(options)
    //await fetch('https://covidnews-45ef.restdb.io/rest/news/5e8be8c75053da750001d448', {
      //headers:{
        //'Content-Type': 'application/json',
        //'x-apikey': '5e8c4d59111788414066c759',
        //'Access-Control-Allow-Origin': '*',
        //"Access-Control-Allow-Headers":"Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
        //"Access-Control-Allow-Credentials": "true",
        //"Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT"
      //}
    //})
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
        <Nav/>
        <Body state = {this.state}/>
    </div>
    );
  }
}
export default App;
