import React from 'react';
import './Home.scss';
import Navbar from '../../components/Navbar/Navbar';
import Welcome from '../../components/Welcome/Welcome';
import BestSelling from '../../components/BestSelling/BestSelling';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="homeContainer" data-testid="home">
      <div className="section-1">
        <Navbar/>
        <Welcome />
      </div>
      <div className="section-2">
        <div className="heading">BEST SELLING PRODUCTS</div>
        <BestSelling />
        <Footer />
      </div>
    </div>
  )
}

export default Home;