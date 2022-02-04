import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ age, city, name }) => (
  <div>
    <div className="relative bg-header-pattern h-44 rounded-t-xl">
      <img
        className="absolute ring-4 ring-white rounded-full -bottom-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        src={`${process.env.PUBLIC_URL}/images/image-victor.jpg`}
        alt="victor"
      />
    </div>
    <div className="flex flex-col flex-end items-center pt-20 pb-7">
      <div className="mb-2">
        <h1 className="font-bold text-desaturatedBlue">
          {name}
          {' '}
          <small className="font-normal ml-2 text-base text-grayishBlue">{age}</small>
        </h1>
      </div>
      <div>
        <p className="text-small text-grayishBlue">{city}</p>
      </div>
    </div>
  </div>
);

Header.propTypes = {
  age: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Header;
