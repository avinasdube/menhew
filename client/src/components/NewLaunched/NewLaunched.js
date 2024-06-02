import React, { useEffect, useState } from 'react';
import './NewLaunched.scss';

import checkout from '../../assets/icons/upright.png';

import NavButton from '../NavButton/NavButton';
import { fetchProducts } from '../../api/api';
import { API_BASE_URL, API_ENDPOINTS } from '../../utils/constants';

const NewLaunched = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const filter = {
      productTag: "newlaunched",
    };

    // function to fetch products from database
    const getProducts = async () => {
      const response = await fetchProducts(filter);
      setProducts(response.data) // setting obtained product details
    }

    getProducts();
  }, [])

  return (
    <div className="newLaunchContainer">
      {products.map((newProduct) => (
        <div className="newProduct" style={{ backgroundImage: `url(${API_BASE_URL}${API_ENDPOINTS.fetchImages}/${newProduct.productId}/${newProduct.images[0]})` }} key={newProduct._id}>
          <div className="redirect"><NavButton link={`/products/${newProduct.productCategory}/${newProduct._id}`} navImg={checkout} /></div>
          <span className="tag">NEW</span>
          <span className="ptitle">{newProduct.productName}</span>
        </div>))}
    </div>
  )
}

export default NewLaunched;