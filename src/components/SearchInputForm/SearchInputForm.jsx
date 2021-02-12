import { Component } from 'react';
import PropTypes from 'prop-types';

import apiMovies from '../../services/api';
import s from './SearchInputForm.module.css';

const api = new apiMovies();

class SearchInputForm extends Component {

  static propTypes = {
    searchText: PropTypes.string
  }

  state = {
    searchText: ''
  }

  onInput = (event) => {
    this.setState(
      { searchText: event.target.value }
    )
  }

  onSubmit = (event) => {
    event.preventDefault();

    const { searchText } = this.state;
    const { onSearch } = this.props;

    if (searchText.trim().length > 0) {
      onSearch(searchText);
    }

    this.setState({
      searchText: ''
    })
  }

  render() {
    const { searchText } = this.state;
    return (
      <form className={s.form} type='submit' onSubmit={this.onSubmit}>
        <input className={s.input} type="text" autoFocus value={searchText} onChange={this.onInput}></input>
        <button className={s.button} type="submit">Search</button>
      </form>
    );
  }
}

SearchInputForm.propTypes = {
  onSearch: PropTypes.func
}

export default SearchInputForm;