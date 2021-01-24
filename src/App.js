import { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';

const HomePage = lazy(() =>
  import('./Page/HomePage/HomePage' /*webpackChunkName: "HomePage"*/),
);
const MovieDetailsPage = lazy(() =>
  import(
    './Page/MovieDetailsPage/MovieDetailsPage' /*webpackChunkName: "MovieDetailsPage"*/
  ),
);
const MoviesPage = lazy(() =>
  import('./Page/MoviesPage/MoviesPage' /*webpackChunkName: "MoviesPage"*/),
);

class App extends Component {
  state = {};

  // ClickBackPage = e => {};

  render() {
    return (
      <>
        <NavBar />
        <Suspense fallback={<h1>Lodding...</h1>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/movies/:id" component={MovieDetailsPage} />
            <Route path="/movies" component={MoviesPage} />
            <Route component={HomePage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
