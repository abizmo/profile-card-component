import React from 'react';
import ProfileCard from './components/ProfileCard';

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
    <div className="mx-auto">
      <img
        className="z-back fixed -top-26rem -left-39rem xl:-top-96 xl:-left-32 h-full w-auto max-w-none"
        src={`${process.env.PUBLIC_URL}/images/bg-pattern-top.svg`}
        alt="pattern-top"
      />
      <ProfileCard age={age} city={city} name={name} stats={stats} />
      <img
        className="z-back fixed -bottom-96 -right-39rem xl:-bottom-26rem xl:-right-32 h-full w-auto max-w-none"
        src={`${process.env.PUBLIC_URL}/images/bg-pattern-bottom.svg`}
        alt="pattern-bottom"
      />
    </div>
  );
};

export default App;
