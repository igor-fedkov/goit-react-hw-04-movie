import { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header';

import routes from './routes';

const HomePage = lazy(() => import('./views/HomePage' /* webpackChunkName: "home-page" */));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage' /* webpackChunkName: "movies-details-page" */));
const MoviesPage = lazy(() => import('./views/MoviesPage' /* webpackChunkName: "movies-page" */));


function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path={routes.home} exact component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
