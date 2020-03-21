import React, {Component} from 'react';
import News from './components/news';

class App extends Component {
  state = {
    news: [],
  }

  componentDidMount() {
    fetch('http://localhost:3000/news')
    .then(res => res.json())
      .then((data) => {
      this.setState({ news: data })
    })
    .catch(console.log)
  }


  render(){
    return(
      <News news = {this.state.news} />
    );
  }
}
export default App;
