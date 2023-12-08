import React from 'react';
import './Home.scss';

import homeWelcome from '../../assets/images/welcomes.jpg';
import BestSelling from '../../components/BestSelling/BestSelling';
import Heading from '../../components/Heading/Heading';
import NewLaunched from '../../components/NewLaunched/NewLaunched';
import Header from '../../components/Header/Header';
import Welcome from '../../components/Welcome/Welcome';

const Home = () => {

  return (
    <div className="homeContainer" data-testid="home">
      <Header bgImg={homeWelcome}>
        <Welcome
          wHeader={"A gentleman is never off-fashion"}
          wSubHeader={"Huge collection of outfits, curated just for you."}
          wLink={"/categories"} />
      </Header>
      <main className="section-2">
        <Heading>BEST SELLING PRODUCTS</Heading>
        <BestSelling />
        <Heading>NEWLY LAUNCHED</Heading>
        <NewLaunched />
      </main>
    </div>
  )
}

export default Home;