import { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';

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
  // state = {};

  // ClickBackPage = e => {};

  render() {
    return (
      <>
        <NavBar />
        <Suspense fallback={<h1>Lodding...</h1>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/contacts" component={Contacts} />
            <Route component={HomePage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
