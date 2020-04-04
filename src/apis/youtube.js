import axios from 'axios';
const API_KEY = 'AIzaSyBAw5UFwq48Hu189Tz_GGlr5iMTW5l5x_8';

export default axios.create({
  
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: API_KEY
  }
})
