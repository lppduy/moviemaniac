import React from 'react';

const FilterGroup = ({ minRating, onRatingClick, ratings }) => {
  return (
    <ul className="align_center movie_filter">
      {ratings.map(rate => (
        <li
          className={`movie_filter_item ${minRating === rate ? 'active' : ''}`}
          onClick={() => onRatingClick(rate)}
          key={rate.toString()}
        >
          {rate}+ Star
        </li>
      ))}
    </ul>
  );
};

export default FilterGroup;
