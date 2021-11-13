import React, { useEffect, useState } from "react";
import Product from "./Product";

const Explore = (props) => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://murmuring-cove-28727.herokuapp.com/jewelries")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {data?.map(product => <Product key ={product._id} {...product}/>).slice(0,props.quantity)}
        </div>
      </div>
    </>
  );
};

export default Explore;
