import React, { useEffect, useState } from 'react';

import './MovieList.css';
import Fire from '../../assets/fire.png';
import MovieCard from './MovieCard';
import FilterGroup from './FilterGroup';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({ by: 'default', order: 'asc' });

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=9c077705bb9d788c3dc177a9316f01c5',
    );
    const data = await response.json();

    setMovies(data.results);
    setFilterMovies(data.results);
  };

  const handleFilter = rate => {
    if (rate === minRating) {
      setMinRating(0);
      setFilterMovies(movies);
      return;
    }

    setMinRating(rate);

    const filtered = movies.filter(movie => movie.vote_average >= rate);
    setFilterMovies(filtered);
  };

  const handleSort = e => {
    const { name, value } = e.target;
    setSort(prev => ({ ...prev, [name]: value }));
  }; // take note 📝

  console.log(sort);

  return (
    <section className="movie_list">
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          Popular
          <img
            src={Fire}
            alt="fire emoji"
            className="navbar_emoji"
          />
        </h2>

        <div className="align_center movie_list_fs">
          <FilterGroup
            minRating={minRating}
            onRatingClick={handleFilter}
            ratings={[8, 7, 6]}
          />

          <select
            name="by"
            id=""
            className="movie_sorting"
            onChange={handleSort}
            value={sort.by}
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            name="order"
            id=""
            className="movie_sorting"
            onChange={handleSort}
            value={sort.order}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {filterMovies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
