import React from 'react';
import './NewLaunched.scss';

import new1 from '../../assets/images/tshirts/loose_fit_himalaya_tshirt.jfif';
import new2 from '../../assets/images/casual-shirt/regular_fit_carduroy_shirt.jfif';
import new3 from '../../assets/images/tshirts/regular_plain_darkblue_tshirt.jfif';
import checkout from '../../assets/icons/upright.png';

import NavButton from '../NavButton/NavButton';

const NewLaunched = () => {

  const newProducts = [
    {
      id: 1,
      pImg: new1,
      title: "Himalaya T-Shirt"
    },
    {
      id: 2,
      pImg: new2,
      title: "Corduroy Shirt"
    },
    {
      id: 3,
      pImg: new3,
      title: "Plain T-Shirt"
    }

  ]
  return (
    <div className="newLaunchContainer">
      {newProducts.map((newProduct) => (
        <div className="newProduct" style={{backgroundImage: `url(${newProduct.pImg})`}} key={newProduct.id}>
          <div className="redirect"><NavButton link={''} navImg={checkout}/></div>
          <span className="tag">NEW</span>
          <span className="ptitle">{newProduct.title}</span>
        </div>))}
    </div>
  )
}

export default NewLaunched;