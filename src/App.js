import { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import AppBar from './Components/AppBar/AppBar';
import { getCurrentUser } from './redux/Auth/authOperation';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

const HomePage = lazy(() =>
  import('./Page/HomePage/HomePage' /*webpackChunkName: "HomePage"*/),
);
const Login = lazy(() =>
  import('./Page/Login/Login' /*webpackChunkName: "Login"*/),
);
const Register = lazy(() =>
  import('./Page/Register/Register' /*webpackChunkName: "Register"*/),
);
const Contacts = lazy(() =>
  import('./Page/Contacts/Contacts' /*webpackChunkName: "Contacts"*/),
);

class App extends Component {
  componentDidMount() {
    this.props.onRefresh();
  }

  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={<h1>Lodding...</h1>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <PrivateRoute
              path="/contacts"
              component={Contacts}
              redirectTo="/login"
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/"
              component={Login}
            />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/"
              component={Register}
            />
            <Route component={HomePage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = {
  onRefresh: getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
