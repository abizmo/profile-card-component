import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ age, city, name }) => (
  <div className="flex flex-col flex-end items-center">
    <div>
      {name}
      {age}
    </div>
    <div>
      {city}
    </div>
  </div>
);

Header.propTypes = {
  age: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Header;
