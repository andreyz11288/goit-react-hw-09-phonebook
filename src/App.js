import { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './Page/HomePage';
import MoviesPage from './Page/MoviesPage';
import s from './App.module.css';

class App extends Component {
  state = {};

  ClickHomePage = () => {};

  render() {
    return (
      <>
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              className={s.navLink}
              activeClassName={s.navLinkactive}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className={s.navLink}
              activeClassName={s.navLinkactive}
            >
              Movies
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies" component={MoviesPage} />
          <Route component={HomePage} />
        </Switch>
      </>
    );
  }
}

export default App;
