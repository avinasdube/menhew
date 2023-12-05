import React from 'react';
import './Home.scss';
import Welcome from '../../components/Welcome/Welcome';
import BestSelling from '../../components/BestSelling/BestSelling';

const Home = () => {
  return (
    <div className="homeContainer" data-testid="home">
      <Welcome />
      <BestSelling />
    </div>
  )
}

export default Home;