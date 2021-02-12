import { Component } from 'react';
import PropTypes from 'prop-types';

import apiMovies from '../../services/api';

import noFoto from '../../img/no-foto-w92.jpg';


const api = new apiMovies();

class Cast extends Component {

  static propTypes = {
    actors: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      profile_path: PropTypes.string,
      character: PropTypes.string
    })))
  }

  state = {
    actors: []
  }

  componentDidMount() {
    const { movieId } = this.props.match.params;
    api.getMovieCredits(movieId)
      .then(({data}) => this.setState({actors: [...data.cast]}))
  }

  render() {
    const { actors } = this.state;

    return (
      <ul>
        {actors.map(({id, name, profile_path, character}) => {
          return (
            <li key={id.toString()}>
              <img
                src={profile_path ? `${api.getFotoImageUrl()}/${profile_path}` : noFoto}
                alt={profile_path ? `Photo ${name}` : `No photo ${name}`} />
              <p>{name}</p>
              <p>Character: <span>{character}</span></p>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Cast;