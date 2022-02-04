import React from 'react';
import Header from './components/Header';
import Stats from './components/Stats';

const data = {
  profile: {
    name: 'Victor Crest',
    age: 26,
    city: 'London',
  },
  stats: [
    {
      label: 'Followers',
      value: '80K',
    },
    {
      label: 'Likes',
      value: '803K',
    },
    {
      label: 'Photos',
      value: '1.4K',
    },
  ],
};

const App = () => {
  const { profile: { age, city, name }, stats } = data;
  return (
    <div className="border border-black divide-y divide-slate-200 rounded-xl">
      <Header age={age} city={city} name={name} />
      <Stats stats={stats} />
    </div>
  );
};

export default App;
