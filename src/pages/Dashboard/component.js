// REDUX
import { useDispatch } from 'react-redux';
import { signOut } from '../../app/slices/authSlice';
// STYLE
import './style.scss';

function Dashboard() {
  // REDUX
  const dispatch = useDispatch();

  return (
    <div className="dashboard-page">
      <h2>Welcome Logged in user</h2>
      <button onClick={() => dispatch(signOut())} type="button">Log Out</button>
    </div>
  );
}

export default Dashboard;
