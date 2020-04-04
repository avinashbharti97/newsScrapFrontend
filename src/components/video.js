import React, {Component} from 'react';
import ReactPlayer from 'react-player'
import Footer from './footer.js'
import '../App.scss';
import searchYoutube from 'youtube-api-v3-search';
import Loader from './loader.js'
//const API_KEY = 'AIzaSyBAw5UFwq48Hu189Tz_GGlr5iMTW5l5x_8';
const API_KEY = 'AIzaSyBr9MxwQkTOo94-WnEftaVfHQbknOH3kro';


class Video extends Component{
  state = {
    video: [],
    loadingVideo:true,
    message:true
  }

  async componentDidMount(){
    console.log('yo')
    var response;
    const option = {
      q: 'India corona latest news hindi english',
      part: 'snippet',
      type: 'video',
      maxResults: 20,
      order: 'viewCount'
    }
    try{
      response = await searchYoutube(API_KEY, option);
      if(response && response.error){
        console.log(response)
        throw ('error');
      }
      this.setState({
          video: response.items,
        loadingVideo:false,
        message:false
      })
    }catch(e){
      console.log(e);
    }

    console.log(this.state.video)
  }

  render(){
    return(
      <React.Fragment>
        {
          this.state.loadingVideo?
            <Loader/>:
            <div class = "row">
              {this.state.message?
                  <p>Daily limit exeeded</p>:

              <div class = "col-12">
                      {this.state.video.map((s)=>(
                          <div class="card mb-5 news-card">
                            <div class="card-body">
                                <div class="row">
                                  <div class="col-12 col-md-6">
                                    <ReactPlayer url={"https://www.youtube.com/embed/"+s.id.videoId+"?showinfo=0&enablejsapi=1&origin=http://localhost:3000"} controls width="100%"  />
                                  </div>
                                  <div class="col-12 col-md-6">
                                    <h5 class="card-title title">{s.snippet.title}</h5>
                                    <p class="news-time"> {s.snippet.publishedAt}</p>
                                    <p class="card-text content">{s.snippet.description}</p>
                                  </div>
                                </div>
                            </div>
                          </div>
                      ))}
                    </div> }
                  </div>
        }
      </React.Fragment>
    )
  }
}
export default Video 
