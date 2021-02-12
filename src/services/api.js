import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '7d0a85e1ac982d57f3f4ed4979257713';
const POSTER_SIZE = 'w185';
const FOTO_SIZE = 'w92';
// const TYPE_QUERY = ['trend', 'search', ]

class apiMovies {
  constructor () {
    this.imageUrl = '';
    this.getImageUrl();
    // console.log('constructor');
  }

  async getImageUrl () {
    // console.log("getImageUrl");
    // console.log('imageUrl1', this.imageUrl);
    this.imageUrl = await axios(`${BASE_URL}/configuration?api_key=${API_KEY}`)
      .then(response => response.data.images.base_url)
      // .then(response => console.log(response))
  }

  getPosterImageUrl = () => {
    return `${this.imageUrl}/${POSTER_SIZE}`;
  }

  getFotoImageUrl = () => {
    return `${this.imageUrl}/${FOTO_SIZE}`;
  }

  getTrendMoviesList = () => {
    const fullURL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
    return axios(fullURL);
  }

  searchMovies = (searchQuery) => {
    const fullURL = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`;
    return axios(fullURL);
  }

  getMovieDetails = (id) => {
    const fullURL = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
    return axios(fullURL);
  }

  getMovieCredits = (id) => {
    const fullURL = `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`;
    return axios(fullURL);
  }

  getMovieReviews = (id) => {
    const fullURL = `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`;
    return axios(fullURL);
  }  
}

export default apiMovies;
