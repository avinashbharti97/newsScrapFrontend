import React, {Component} from 'react';
import News from './components/news';
import Nav from './components/nav';
import Title from './components/titleLogo.js';
import Loader from './components/loader';
import Stats from './components/stats';

class App extends Component {
  state = {
    news: [],
    cnf:0,
    act:0,
    rec:0,
    dec:0,
    statsUpdatedTime:0,
    loadingNews:true,
    loadingStats:true
  }

  componentDidMount() {

    fetch('https://avinashbharti97-newsscrap.glitch.me/getNews')
    .then(res => res.json())
      .then((data) => {
        this.setState({
          news: data,
          loadingNews: false,
        })
    })
      .catch(console.log)

    fetch('https://api.covid19india.org/data.json')
      .then(res=> res.json()).then((data)=>{
        this.setState({
          cnf: data.statewise[0].confirmed,
          act: data.statewise[0].active,
          rec: data.statewise[0].recovered,
          dec: data.statewise[0].deaths,
          statsUpdatedTime: data.statewise[0].lastupdatedtime,
          loadingStats:false
        })
        console.log(data.statewise[0]);
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
              <Stats stats = {this.state}/>
              <News news = {this.state.news} />
            </div>
        }
    </div>
    );
  }
}
export default App;
