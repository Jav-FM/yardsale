import React from "react";
import ProductItem from "../components/ProductItem";
import useGetProducts from '../hooks/useGetProducts';
import "../styles/ProductList.scss";



const api = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {

  const products = useGetProducts(api);

  return (
    <section class="main-container">
      <div class="ProductList">
        {products.map(product => (
          <ProductItem product={product} key={product.id}/>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
