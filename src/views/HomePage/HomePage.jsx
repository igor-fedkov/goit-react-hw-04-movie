import { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';

import MoviesItemList from "../../components/MoviesItemList";

import apiMovies from "../../services/api";

const api = new apiMovies();

class HomePage extends Component {

  static propTypes = {
    trendMovies: PropTypes.arrayOf(PropTypes.object)
  }

  state = {
    trendMovies: []
  }

  componentDidMount() {
    
  api.getTrendMoviesList()
    .then(response => {
      this.setState({
        trendMovies: [...response.data.results]
      })}
    )
  }

  render() {
    const { trendMovies } = this.state;    

    return (
      <>
        <h1>Trending today</h1>
        <MoviesItemList movies={trendMovies} />
      </>
    )
  }
}

export default withRouter(HomePage);