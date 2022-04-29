import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductSingleView = ({ products, fetchProducts, addItemToCart }) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setProduct(products.find((product) => product.id === +id));
  }, [products]);

  return product ? (
    <div className="singleProdCont">
      <hr></hr>
      <div className="singProdWrapper">
        <div className="singProdImgCont">
          <img src={product.imgurl} />
        </div>
        <div className="singProdInfoCont">
          <h1>{product.title}</h1>
          <div className="singProdDesc">{product.description}</div>
          <div id="price">$ {product.price}</div>
          <div id="inStock">{product.stock} in Stock</div>
          <div className="addCont">
            <button onClick={() => addItemToCart(product)}>ADD TO CART</button>
            <a href="/Products">
              <button>CONTINUE SHOPING</button>
            </a>
            <a href="/Cart">
              <button>CHECKOUT</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1>Product Not found</h1>
  );
};

export default ProductSingleView;
