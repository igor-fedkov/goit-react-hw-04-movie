import { Component } from 'react';
import PropTypes from 'prop-types';

import apiMovies from '../../services/api';
import s from './MovieDetails.module.css';

const api = new apiMovies();

class MovieDetails extends Component {

  static propTypes = {
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.shape({
      name: PropTypes.string
    })))
  }

  state = {
    release_date: '',
    genres: []
  }

  componentDidMount() {
    // console.log('componentDidMount');
    const { movieId } = this.props;    
    // console.log('movieId', movieId);
    api.getMovieDetails(movieId)
      .then(response =>
        // console.log(response.data)
        this.setState({ ...response.data })
      );    
  }

  render() {
    const { poster_path, title, release_date, vote_average, overview, genres } = this.state;

    const movieName = `${title} (${release_date.slice(0, 4)})`;
    const fullImageUrl = `${api.getPosterImageUrl()}/${poster_path}`;
    const allGenres = genres
      .reduce((all, genre) => {
        all.push(genre.name);
        return all}, [])
      .join(' ');
    
    
    return (
      <>
        {title &&
          <div className={s.container}>
            <img
              className={s.poster}
              src={poster_path ? fullImageUrl : null}
              alt={poster_path ? `Poster for ${title}` : `No poster for ${title}`}>
            </img>
            <div className={s.description}>
              <h1 className={s.title}>{movieName}</h1>
              <p>
                User Score: <span>{vote_average * 10}%</span>
              </p>
              <p className={s.overview}>Overview</p>
              <p>
                {overview}
              </p>
              <p className={s.genres}>
                Genres
              </p>
              <p>
                {allGenres}
              </p>
            </div>
          </div>
        }
      </>
    );
  }
}

export default MovieDetails;