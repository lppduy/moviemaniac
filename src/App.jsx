import React from 'react';
import './App.css';
import MovieList from './components/MovieList/MovieList';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <main>
        <MovieList />
      </main>
    </div>
  );
};

export default App;
