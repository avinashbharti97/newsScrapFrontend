import React, {Component} from 'react';
import ReactPlayer from 'react-player'
import '../App.scss';
import youtube from '../apis/youtube';
import searchYoutube from 'youtube-api-v3-search';
const API_KEY = '';


class Video extends Component{
  state = {
    video: []
  }

  async componentDidMount(){
    console.log('yo')
    var response;
    const option = {
      q: 'India corona latest news',
      part: 'snippet',
      type: 'video'
    }
    try{
      response = await searchYoutube(API_KEY, option);
      console.log(response.items)
    }catch(e){
      console.log(e);
    }


    this.setState({
      video: response.items
    })
    console.log(this.state.video)
  }

  render(){
    return(
      <div class = "row">
              <div class = "col">
                {this.state.video.map((s)=>(
                    <div class="card mb-5 news-card">
                      <div class="card-body">
                        <ReactPlayer url={"https://www.youtube.com/embed/"+s.id.videoId}  />
                        <h4 class="card-title title">{s.snippet.title}</h4>
                      </div>
                    </div>
                ))}
              </div> 
          </div>
    )
  }
}
export default Video 
