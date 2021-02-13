import { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import SearchInputForm from '../../components/SearchInputForm';
import MoviesItemList from '../../components/MoviesItemList';

import apiMovies from '../../services/api';

const api = new apiMovies();

class MoviesPage extends Component {

  static propTypes = {
    searchQuery: PropTypes.string,
    movies: PropTypes.arrayOf(PropTypes.objectOf)
  }
    
  state = {
    searchQuery: '',
    movies: []
  }

  componentDidMount() {
    const { query } = queryString.parse(this.props.location.search);
    if (query) {
      this.setState({
        searchQuery: query
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;

    if (prevState.searchQuery !== searchQuery)
    {
      this.onSearchChange();
      api.searchMovies(searchQuery)
        // .then(({data}) => console.log(data))
        .then(({data}) => this.setState({movies: [...data.results]}))
    }
  }

  onSearch = (searchQuery) => {
    this.setState(
      {searchQuery}
    )
  }

  onSearchChange = () => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${this.state.searchQuery}`,
    })
  }

  render() {
    const { movies, searchQuery } = this.state;
    const { match } = this.props;

    return (
      <>
        <SearchInputForm onSearch={this.onSearch} />
        {<MoviesItemList movies={movies} />}
        {searchQuery && movies.length === 0 && <p>{`No data about "${searchQuery}"`}</p>}
      </>
    );
  }
}

export default MoviesPage;