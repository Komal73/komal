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
  
  <div className="productsShow"> 

    {
      Data.map(i =>{
        const {id , category , image , price, rating} = i;

        return(
          <div className="box" key={id}>
            <div className="image-box">

            </div>
            <img src={image}/>
          </div>
        )

      })
    }
  </div> 
  )
};

export default Product;
