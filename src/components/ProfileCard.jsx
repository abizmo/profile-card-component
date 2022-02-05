import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Stats from './Stats';

const ProfileCard = ({
  age, city, name, stats,
}) => (
  <div className="bg-white divide-y divide-slate-200 mx-auto rounded-xl shadow-xl w-80">
    <Header age={age} city={city} name={name} />
    <Stats stats={stats} />
  </div>
);

ProfileCard.propTypes = {
  age: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf().isRequired,
};

export default ProfileCard;
