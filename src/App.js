// COMPONENTS
import { Routes, Route } from 'react-router-dom';
import Navigation from './layout/Navigation';
// PAGES
// ROUTER
import OurWork from './pages/OurWork/component';
import Contact from './pages/Contact/component';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
