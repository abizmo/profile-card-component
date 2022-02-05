import React from 'react';
import PropTypes from 'prop-types';

const Stat = ({ label, value }) => (
  <div className="text-center">
    <h2 className="font-bold mb-1 uppercase text-desaturatedBlue">{value}</h2>
    <p className="text-2xs tracking-widest text-grayishBlue">{label}</p>
  </div>
);

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Stat;
