
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import MovieDetailWrapper from './components/MovieDetailWrapper';

const App: React.FC = () => {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/movie/:id" element={<MovieDetailWrapper />} />
          </Routes>
        </Router>
    );
}

export default App;
