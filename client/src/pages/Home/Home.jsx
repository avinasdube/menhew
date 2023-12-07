import React from 'react';
import './Home.scss';
import Navbar from '../../components/Navbar/Navbar';
import Welcome from '../../components/Welcome/Welcome';
import BestSelling from '../../components/BestSelling/BestSelling';
import Heading from '../../components/Heading/Heading';
import NewLaunched from '../../components/NewLaunched/NewLaunched';

const Home = () => {
  return (
    <div className="homeContainer" data-testid="home">
      <div className="section-1">
        <Navbar/>
        <Welcome />
      </div>
      <div className="section-2">
        <Heading>BEST SELLING PRODUCTS</Heading>
        <BestSelling />
        <Heading>NEWLY LAUNCHED</Heading>
        <NewLaunched />
      </div>
    </div>
  )
}

export default Home;