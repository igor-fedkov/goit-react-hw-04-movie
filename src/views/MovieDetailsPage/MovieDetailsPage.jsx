import { Component, Suspense, lazy } from 'react';
import { Route } from "react-router-dom";

import MovieDetails from '../../components/MovieDetails';
import AdditionalInformationNav from '../../components/AdditionalInformationNav';

import routes from '../../routes';

const Cast = lazy(() => import('../../components/Cast' /* webpackChunkName: "cast" */));
const Reviews = lazy(() => import('../../components/Reviews' /* webpackChunkName: "reviews" */));

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
        
        <Suspense fallback={<h1>Loading...</h1>}>
          <Route path={`${match.path}/cast`} component={Cast} />
          <Route path={`${match.path}/reviews`} component={Reviews} />
        </Suspense>
      </>
    );
  }
}

export default MovieDetailsPage;