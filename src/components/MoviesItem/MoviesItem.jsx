import { Link, withRouter } from "react-router-dom"
import PropTypes from 'prop-types';

import routes from '../../routes'

const MoviesItem = ({ title, id, location }) => {
  return (
    <li>
      <Link to={{
        pathname: `${routes.movies}/${id}`,
        state: { from: location }
        }}>
        {title}
      </Link>
    </li>
  );
}

MoviesItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number
}

export default withRouter(MoviesItem);