/* eslint-disable no-console */
import { useState, useEffect } from 'react';
// ROUTER
import { useNavigate } from 'react-router-dom';
// REDUX
import { useSelector, useDispatch } from 'react-redux';
import {
  signIn,
  selectAuthError,
  selectAuthIsPending,
  selectAuthUser
} from '../../app/slices/authSlice';
// STYLES
import './style.scss';

function SignIn() {
  // STATE & VARIABLES
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(selectAuthError);
  const isPending = useSelector(selectAuthIsPending);
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // EVENTS
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn({ email, password }));
  };

  // USE EFFECT
  useEffect(() => {
    if (user) {
      navigate('/admin/dashboard');
    }
  }, [user]);

  return (
    <div className="signin-page">
      <h2>Login to Dashboard</h2>
      <form className="signin-form" onSubmit={handleSubmit}>
        <label>
          <input
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            placeholder="Email"
            required
          />
        </label>
        <label>
          <input
            type="text"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            placeholder="Password"
            required
          />
        </label>
        {isPending
          ? <button className="btn highlight" type="button" disabled>Loading...</button>
          : <button className="btn highlight" type="submit">Login</button>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default SignIn;
