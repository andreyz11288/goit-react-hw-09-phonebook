import { Suspense, lazy, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
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

const App = () => {
  const dispatch = useDispatch();
  const onRefresh = useCallback(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    onRefresh();
  }, [onRefresh]);

  return (
    <>
      <AppBar />
      <Suspense fallback={<h1>Lodding...</h1>}>
        <Switch>
          <Route
            exact
            path="/"
            // component={HomePage}
          >
            <HomePage />
          </Route>
          <PrivateRoute
            path="/contacts"
            // component={Contacts}
            redirectTo="/login"
          >
            <Contacts />
          </PrivateRoute>
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/"
            // component={Login}
          >
            <Login />
          </PublicRoute>
          <PublicRoute
            path="/register"
            restricted
            redirectTo="/"
            // component={Register}
          >
            <Register />
          </PublicRoute>
          <Route
          // component={HomePage}
          >
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
