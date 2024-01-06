import React, { useEffect, useState } from 'react';
import './ProductList.scss';
import { useParams } from 'react-router-dom';

// IMPORTING COMPONENTS
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import ProductCard from '../ProductCard/ProductCard';
import { fetchProducts } from '../../api/api';

// IMPORTING ASSETS
import listwelcome from '../../assets/images/listwelcome.jpg';
import Heading from '../Heading/Heading';
import FiltersBar from '../FiltersBar/FiltersBar';

const ProductList = () => {

  const [products, setProducts] = useState([]);

  // getting category title from url
  const cat = useParams(1);

  // fetching products based on category obtained from url on component mount
  useEffect(() => {
    // defining filter structure as json object
    const filter = {
      productCategory: `${cat.productCategory}`,
    }

    // function to fetch products from database
    const getProducts = async () => {
      const response = await fetchProducts(filter)
      setProducts(response.data) // setting obtained product details
    }
    getProducts();
  }, [cat.productCategory])

  return (
    <div className="pListContainer">
      <Header bgImg={listwelcome}>
        <Welcome wHeader={`Explore our vast collection of ${cat.category}`} />
      </Header>
      <main className="plistMain">
        <Heading >Showing {cat.category}</Heading>
        <FiltersBar />
        <div className="productsGrid">
          {products.map((product) => (
            <ProductCard product={product} key={product.productId} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default ProductList;