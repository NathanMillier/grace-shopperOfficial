import React from "react";
import { Link, useParams } from "react-router-dom";
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

          <div className="addCont">
            <button onClick={() => addItemToCart(product)}>
              <Link to="/Cart">ADD TO CART</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1>Product Not found</h1>
  );
};

export default ProductSingleView;
