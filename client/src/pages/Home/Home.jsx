import React from 'react';
import './Home.scss';
import Navbar from '../../components/Navbar/Navbar';
import Welcome from '../../components/Welcome/Welcome';
import BestSelling from '../../components/BestSelling/BestSelling';

const Home = () => {
  return (
    <div className="homeContainer" data-testid="home">
      <div className="section-1">
        <Navbar/>
        <Welcome />
      </div>
      <div className="section-2">
        <div className="heading">Best Selling Products</div>
        <BestSelling />
      </div>
    </div>
  )
}

export default Home;