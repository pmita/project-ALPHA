// ROUTER
import { Navigate, Outlet } from 'react-router-dom';
// PROP TYPES
import PropTypes from 'prop-types';

function PrivateRouteToHome({ user }) {
  return user ? <Navigate to="/admin/dashboard" /> : <Outlet />;
}

PrivateRouteToHome.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object
};

PrivateRouteToHome.defaultProps = {
  user: null
};

export default PrivateRouteToHome;
