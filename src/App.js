import { useEffect } from 'react';
// ROUTER
import { Routes, Route } from 'react-router-dom';
// REDUX
import { useDispatch } from 'react-redux';
import { authenticated } from './app/slices/authSlice';
// COMPONENTS
import Navigation from './layout/Navigation';
// PAGES
import Home from './pages/Home';
import OurWork from './pages/OurWork/component';
import Contact from './pages/Contact/component';
import SignIn from './pages/SignIn/component';
import Dashboard from './pages/Dashboard/component';
import { fireAuth } from './firebase/config';

function App() {
  // STATE & VARIABLES
  const dispatch = useDispatch();

  // USE EFFECT
  useEffect(() => {
    const unsubscribe = fireAuth.onAuthStateChanged((user) => {
      dispatch(authenticated(user));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/signin" element={<SignIn />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
