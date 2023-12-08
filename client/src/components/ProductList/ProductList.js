import React from 'react';
import './ProductList.scss';
import { useParams } from 'react-router-dom';

// IMPORTING COMPONENTS
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import ProductCard from '../ProductCard/ProductCard';

// IMPORTING ASSETS
import listwelcome from '../../assets/images/listwelcome.jpg';
import himalayaTshirt from '../../assets/images/tshirts/loose_fit_himalaya_tshirt4.jfif';
import corduroyShirt from '../../assets/images/casual-shirt/regular_fit_carduroy_shirt4.jfif';
import plainblueTshirt from '../../assets/images/tshirts/regular_plain_darkblue_tshirt4.jfif';
import flannelShirt from '../../assets/images/casual-shirt/regular_fit_flannel_shirt4.jfif';
import twillJogger from '../../assets/images/trousers/regular_fit_twill_joggers3.jfif';
import Heading from '../Heading/Heading';

const ProductList = () => {

  const cat = useParams(1);

  const catProducts = [
    {
      id: 1,
      pImg: himalayaTshirt,
      title: "Himalaya T-Shirt",
      price: "Rs. 699",
    },
    {
      id: 2,
      pImg: corduroyShirt,
      title: "Corduroy Shirt",
      price: "Rs. 1099"
    },
    {
      id: 3,
      pImg: plainblueTshirt,
      title: "Plain T-Shirt",
      price: "Rs. 999"
    },
    {
      id: 4,
      pImg: flannelShirt,
      title: "Regular Fit Flannel Shirt",
      price: "Rs. 1499"
    },
    {
      id: 5,
      pImg: twillJogger,
      title: "Regular Fit Twill Jogger",
      price: "Rs. 799"
    }
  ]

  return (
    <div className="pListContainer">
      <Header bgImg={listwelcome}>
        <Welcome wHeader={`Explore our vast collection ${cat.category}`} />
      </Header>
      <main className="plistMain">
        <div className="filtersBar">

        </div>
        <Heading >Showing {cat.category}</Heading>
        <div className="productsGrid">
          {catProducts.map((catProduct) => (
            <ProductCard product={catProduct} key={catProduct.id} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default ProductList;