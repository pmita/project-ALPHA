import { useEffect } from 'react';
// ROUTER
import { Routes, Route } from 'react-router-dom';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { authenticated, selectAuthIsReady, selectAuthUser } from './app/slices/authSlice';
// FIREBASE
import { fireAuth } from './firebase/config';
// COMPONENTS
import Navigation from './layout/Navigation';
import PrivateRouteToHome from './components/RouteGuards/PrivateRouteToHome';
import PrivateRouteToDashboard from './components/RouteGuards/PrivateRouteToDashboard';
// PAGES
import Home from './pages/Home';
import OurWork from './pages/OurWork/component';
import Contact from './pages/Contact/component';
import SignIn from './pages/SignIn/component';
import Dashboard from './pages/Dashboard/component';

function App() {
  // STATE & VARIABLES
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);
  const authIsReady = useSelector(selectAuthIsReady);
  const apiKey = `${process.env.REACT_APP_FIREBASE_API_KEY}`;

  // eslint-disable-next-line no-console
  console.log(apiKey);

  // useEFFECT
  useEffect(() => {
    const unsubscribe = fireAuth.onAuthStateChanged((refUser) => {
      dispatch(authenticated(refUser));
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
        {authIsReady && (
          <>
            <Route path="/admin/signin" elemement={<PrivateRouteToHome user={user} />}>
              <Route path="/admin/signin" element={<SignIn />} />
            </Route>
            <Route path="/admin/dashboard" element={<PrivateRouteToDashboard user={user} />}>
              <Route path="/admin/dashboard" element={<Dashboard />} />
            </Route>
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
