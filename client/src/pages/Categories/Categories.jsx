import React from 'react';
import './Categories.scss';

// IMPORTING COMPONENTS
import Navbar from '../../components/Navbar/Navbar';
import CatBox from '../../components/CatBox/CatBox';

// IMPORTING ASSETS
import shirtImg from '../../assets/images/casual-shirt/regular_fit_denim_shirt.jfif';
import jeanImg from '../../assets/images/jeans/slim_cargo_jeans4.jfif';
import trouserImg from '../../assets/images/trousers/cargo_joggers4.jfif';
import tshirtImg from '../../assets/images/tshirts/slim_fit_white_tshirt.jfif';


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
      <header className="header">
        <Navbar />
        <div className="headerIntro">
          <div className="introHeading">Unleash your fashion experience</div>
          <div className="introSubheading">Choose from our vast collection of outfits. Explore menhew collection.</div>
        </div>
      </header>
      <main className="catMain">
        <div className="catHeading">CATEGORIZED FOR YOU</div>
        <div className="catGrid">
          <CatBox catOptions={catOptions} />
        </div>
      </main>
    </div>
  )
}

export default Categories;