import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import MoviesItem from "../MoviesItem";

const MoviesItemList = ({ movies }) => {
  return (
    <ul>
      {
        movies.map(({ id, title }) => 
          <MoviesItem
            key={id.toString()}
            title={title}
            id={id}
          />)
      }
    </ul> 
  );
}

MoviesItem.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object)
}

export default withRouter(MoviesItemList);