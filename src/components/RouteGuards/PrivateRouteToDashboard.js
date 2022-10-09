// ROUTER
import { Navigate, Outlet } from 'react-router-dom';
// PROP TYPES
import PropTypes from 'prop-types';

function PrivateRouteToDashboard({ user }) {
  return user ? <Outlet /> : <Navigate to="/admin/signin" />;
}

PrivateRouteToDashboard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object
};

PrivateRouteToDashboard.defaultProps = {
  user: null
};

export default PrivateRouteToDashboard;
