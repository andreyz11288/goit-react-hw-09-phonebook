import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsAutheticated } from '../redux/Auth/authSelectors';

function PrivateRoute({
  children,
  isLoggedIn,
  redirectTo = '/',
  ...routeProps
}) {
  //   const isLoggedIn = useSelector(getIsAutheticated);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
const mapStateToProps = state => ({
  isLoggedIn: getIsAutheticated(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
