import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './home/Home';
import { CourseDetail } from './courseDetail/CourseDetail';
import { Blog } from './blog/Blog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curso/:id" element={<CourseDetail />} />
        <Route path="/blog/:id" element={<Blog />} />
        </Routes>
    </Router>
  );
}

export default App;
