import React from 'react';
import Home from './components/Home.jsx';
import MovieList from './components/MovieList.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/MovieSwiper.jsx';

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/movielist" element={<MovieList />}/>
      </Routes>
    </Router>
  );
};

export default App;
