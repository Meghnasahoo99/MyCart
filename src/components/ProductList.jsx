import React from "react";
import Product from "./Product";


function ProductList(props) {
  return props.product.map((product,i) => {
    return <Product product={product} key={i} />;
  });
}

export default ProductList;
