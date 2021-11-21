import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, redirectTo }) => {
  const loggedIn = useSelector((state) => state.user.logged_in);
  const username = useSelector((state) => state.user.username);

  return (
    (loggedIn && username) ? children : <Navigate to={redirectTo} />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

export default PrivateRoute;
