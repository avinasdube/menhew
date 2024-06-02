import React, { useEffect, useState } from 'react';
import './Product.scss';
import Navbar from '../../components/Navbar/Navbar';

import fav from '../../assets/icons/favourite.png';
import cart from '../../assets/icons/cart.png';
import Heading from '../../components/Heading/Heading';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../../api/api';
import { API_BASE_URL, API_ENDPOINTS } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../reducers/cartSlice';

const Product = () => {
  const [product, setProduct] = useState({});

  const [productQuantity, setProductQuantity] = useState(1);
  const [productSize, setProductSize] = useState("");

  const dispatch = useDispatch();

  // setting activeImg as first image of product if product available else blank
  const [activeImg, setActiveImg] = useState(
    product[0] ?
      `${API_BASE_URL}${API_ENDPOINTS.fetchImages}/${product[0]?.productId}/${product[0]?.images[0]}` :
      '');

  // getting product._id value from url
  const id = useParams(1);

  // fetching product details with obtained product._id on component mount
  useEffect(() => {
    // defining filter structure as json object
    const filter = {
      _id: `${id._id}`,
    }

    // function to fetch products from database
    const getProducts = async () => {
      const response = await fetchProducts(filter)
      setProduct(response.data)
    }
    getProducts();
  }, [id._id])

  return (
    <div className="productContainer" data-testid="product">
      <Navbar />
      <main className="pcontMain">
        <div className="pcontLeft">
          <div className="largeImg">
            <img
              src={activeImg === "" ? `${API_BASE_URL}${API_ENDPOINTS.fetchImages}/${product[0]?.productId}/${product[0]?.images[0]}` : activeImg}
              alt=''></img>
          </div>
          <div className="smallImg">
            <img src={`${API_BASE_URL}${API_ENDPOINTS.fetchImages}/${product[0]?.productId}/${product[0]?.images[0]}`}
              alt=''
              onClick={() => setActiveImg(`${API_BASE_URL}${API_ENDPOINTS.fetchImages}/${product[0]?.productId}/${product[0]?.images[0]}`)}></img>
            <img
              src={`${API_BASE_URL}${API_ENDPOINTS.fetchImages}/${product[0]?.productId}/${product[0]?.images[1]}`}
              alt=''
              onClick={() => setActiveImg(`${API_BASE_URL}${API_ENDPOINTS.fetchImages}/${product[0]?.productId}/${product[0]?.images[1]}`)}></img>
            <img
              src={`${API_BASE_URL}${API_ENDPOINTS.fetchImages}/${product[0]?.productId}/${product[0]?.images[2]}`}
              alt=''
              onClick={() => setActiveImg(`${API_BASE_URL}${API_ENDPOINTS.fetchImages}/${product[0]?.productId}/${product[0]?.images[2]}`)}></img>
            <img
              src={`${API_BASE_URL}${API_ENDPOINTS.fetchImages}/${product[0]?.productId}/${product[0]?.images[3]}`}
              alt=''
              onClick={() => setActiveImg(`${API_BASE_URL}${API_ENDPOINTS.fetchImages}/${product[0]?.productId}/${product[0]?.images[3]}`)}></img>
          </div>
        </div>
        <div className="pcontRight">
          <Heading>{product[0]?.productName}</Heading>
          <div className="price">&#8377; {product[0]?.productPrice}</div>
          <div className="pdescrip">{product[0]?.productDescription}</div>
          <div className="pCount">
            <button className="pButton" onClick={() => setProductQuantity((prev) => prev === 1 ? 1 : prev - 1)}>-</button>
            <span>{productQuantity}</span>
            <button className="pButton" onClick={() => setProductQuantity((prev) => prev + 1)}>+</button>
          </div>
          <div className="psize">
            <div className="psizeHeading">Size</div>
            <div className="sizeButtons">
              <button className={`pButton ${productSize === "S" ? 'active' : ''}`} onClick={() => setProductSize("S")}>S</button>
              <button className={`pButton ${productSize === "M" ? 'active' : ''}`} onClick={() => setProductSize("M")}>M</button>
              <button className={`pButton ${productSize === "L" ? 'active' : ''}`} onClick={() => setProductSize("L")}>L</button>
              <button className={`pButton ${productSize === "XL" ? 'active' : ''}`} onClick={() => setProductSize("XL")}>XL</button>
            </div>
          </div>
          <div className="pactions">
            <button className="pButton"><img src={fav} alt=''></img></button>
            <button className="pButton" onClick={() => dispatch(addToCart({
              id: product[0]._id,
              productId: product[0].productId,
              productName: product[0].productName,
              productDescription: product[0].productDescription,
              productQuantity: productQuantity,
              productSize: productSize,
              productPrice: product[0].productPrice,
              productImage: product[0].images[0]
            }))}><img src={cart} alt=''></img></button>
            <button className="pButton">CHECKOUT</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Product;