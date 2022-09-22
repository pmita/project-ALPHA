// ROUTER
import { Routes, Route } from 'react-router-dom';
// COMPONENTS
import Navigation from './layout/Navigation';
// PAGES
import Home from './pages/Home';
import OurWork from './pages/OurWork/component';
import Contact from './pages/Contact/component';
import SignIn from './pages/SignIn/component';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
