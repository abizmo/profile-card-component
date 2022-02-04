import React from 'react';
import PropTypes from 'prop-types';
import Stat from './Stat';

const Stats = ({ stats }) => (
  <div className="flex justify-evenly py-7">
    {stats.map(({ label, value }) => (
      <Stat key={label} label={label} value={value} />
    ))}
  </div>
);

Stats.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Stats;
