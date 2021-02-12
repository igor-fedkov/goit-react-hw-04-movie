import { Component } from 'react';
import PropTypes from 'prop-types';

import apiMovies from '../../services/api';

const api = new apiMovies();

class Reviews extends Component {

  static propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.shape({
      author: PropTypes.string,
      content: PropTypes.string,
      id: PropTypes.number
    })))
  }

  state = {
    reviews: []
  }

  componentDidMount() {
    const { movieId } = this.props.match.params;
    api.getMovieReviews(movieId)
      .then(({data}) => this.setState({reviews: [...data.results]}))
      // .then(({data}) => console.log(data))
  }

  render() {
    const { reviews } = this.state;

    return (
      <ul>
        { 
          reviews.length ?
            reviews.map(({ author, content, id }) => {
              return (
                <li key={id}>
                  <h3>{author}</h3>
                  <p>{content}</p>
                </li>
              )
            }):
            <p>We don't have any reviews for this movies.</p>
        }
      </ul>
    )
  }
}

export default Reviews;