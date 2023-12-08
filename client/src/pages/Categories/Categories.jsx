import React from 'react';
import './Categories.scss';

// IMPORTING COMPONENTS
import CatBox from '../../components/CatBox/CatBox';
import Heading from '../../components/Heading/Heading';
import Header from '../../components/Header/Header';
import Welcome from '../../components/Welcome/Welcome';

// IMPORTING ASSETS
import shirtImg from '../../assets/images/casual-shirt/regular_fit_denim_shirt.jfif';
import jeanImg from '../../assets/images/jeans/slim_cargo_jeans4.jfif';
import trouserImg from '../../assets/images/trousers/cargo_joggers4.jfif';
import tshirtImg from '../../assets/images/tshirts/slim_fit_white_tshirt.jfif';
import catWelcome from '../../assets/images/catwelcome.jpg'


const Categories = () => {

  const catOptions = [
    {
      id: 1,
      title: "Shirts",
      bgImg: shirtImg,
    },
    {
      id: 2,
      title: "Jeans",
      bgImg: jeanImg
    },
    {
      id: 3,
      title: "Trousers",
      bgImg: trouserImg
    },
    {
      id: 4,
      title: "T-Shirts",
      bgImg: tshirtImg
    }
  ];

  return (
    <div className="categoriesContainer" data-testid="categories">
      <Header bgImg={catWelcome}>
        <Welcome
          wHeader={"Unleash your fashion experience"}
          wSubHeader={"Choose from our vast collection of outfits. Explore menhew collection"}/>
      </Header>

      <main className="catMain">
        <Heading>CATEGORIZED FOR YOU</Heading>
        <div className="catGrid">
          <CatBox catOptions={catOptions} />
        </div>
      </main>
    </div>
  )
}

export default Categories;