import React, { useState } from "react";
import "./Product.css";
const Product = () => {
  const [Data, setData] = useState([]);

  let apikey = "https://fakestoreapi.com/products?limit=10";


  function fetchData(url){
    fetch(url)
    .then(res=> res.json())
    .then(data=> {
      console.log(data)
      setData(data)
    })
  }

  fetchData(apikey);

  return (
    <>
    <div className="productHeading">
      <h1>OUR PRODUCTS</h1>
    </div>
      <div className="productsShow">
        {Data.map(i => {
          const { id, category, image, price, rating, title } = i;

          return (
            <div className="box" key={id}>
              <div className="image-box">
                <img src={image} />
              </div>
              <div className="text-box">
                <h3>{category}</h3>
                <p>{title}</p>
                <p>${price}</p>
                <p>Rating:{rating.rate}</p>
              </div>
              <button className="addCart">
                Add to Cart
                <i className="fa-solid fa-cart-shopping" />
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
