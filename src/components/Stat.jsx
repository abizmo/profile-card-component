import React from 'react';
import PropTypes from 'prop-types';

const Stat = ({ label, value }) => (
  <div className="text-center">
    <h3 className="font-bold uppercase">{value}</h3>
    <p className="text-xs">{label}</p>
  </div>
);

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Stat;
