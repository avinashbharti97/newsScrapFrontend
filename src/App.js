import React, {Component} from 'react';
import News from './components/news';
import Nav from './components/nav';
import Time from './components/updatedTime';

class App extends Component {
  state = {
    news: [],
  }

  componentDidMount() {
    fetch('https://avinashbharti97-newsscrap.glitch.me/getNews')
    .then(res => res.json())
      .then((data) => {
        this.setState({
          loading: false,
          news: data
        })
    })
    .catch(console.log)
  }


  render(){
    return(
      <div class="container">
        <Nav/>
        <Time/>
        <News news = {this.state.news} />
    </div>
    );
  }
}
export default App;
