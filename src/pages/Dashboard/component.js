import { useEffect } from 'react';
// ROUTER
import { useNavigate } from 'react-router-dom';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { signOut, selectAuthUser } from '../../app/slices/authSlice';
// STYLE
import './style.scss';

function Dashboard() {
  // STATE & VARIABLES
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // USE EFFECT
  useEffect(() => {
    if (!user) {
      navigate('/admin/signin');
    }
  }, [user]);

  return (
    <div className="dashboard-page">
      <h2>Welcome Logged in user</h2>
      <button onClick={() => dispatch(signOut())} type="button">Log Out</button>
    </div>
  );
}

export default Dashboard;
