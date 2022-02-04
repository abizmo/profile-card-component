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
    <div className="divide-y divide-slate-200 mx-auto rounded-xl shadow-xl w-80">
      <Header age={age} city={city} name={name} />
      <Stats stats={stats} />
    </div>
  );
};

export default App;
