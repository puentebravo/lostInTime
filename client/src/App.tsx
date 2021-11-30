import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Contact from './pages/contact';
import Blog from './pages/blog';
import './App.css';


function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
