// ROUTER
import { Navigate, Outlet } from 'react-router-dom';
// PROP TYPES
import PropTypes from 'prop-types';

function PrivateRouteToHome({ user }) {
  return user ? <Navigate to="/admin/dashboard" /> : <Outlet />;
}

PrivateRouteToHome.propTypes = {
  user: null
};

PrivateRouteToHome.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object.isRequired
};

export default PrivateRouteToHome;
