import { Component } from 'react';
import { Route } from "react-router-dom";

import MovieDetails from '../../components/MovieDetails';
import AdditionalInformationNav from '../../components/AdditionalInformationNav';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews';

import routes from '../../routes';

class MovieDetailsPage extends Component {

  onGoBack = () => {
    this.props.history.push(this.props.location?.state?.from || routes.home);
  }

  render() {
    const { match } = this.props;

    return (
      <>
        <button type='button' onClick={this.onGoBack}>&larr;Go back</button>
        <MovieDetails movieId={match.params.movieId} />
        <AdditionalInformationNav />
        
        <Route path={`${match.path}/cast`} component={Cast} />
        <Route path={`${match.path}/reviews`} component={Reviews} />
      </>
    );
  }
}

export default MovieDetailsPage;