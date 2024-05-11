import React from 'react';
import Layout from '../components/partials/Layout';

const Home = () => {

  const HomeContent = () => {
    return (
      <h1>Hello World</h1>
    )
  }

  return (
    <Layout Content={<HomeContent />} />
  );
};


export default Home;
