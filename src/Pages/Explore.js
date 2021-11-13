import React, { useEffect, useState } from "react";
import { useAccordionButton } from "react-bootstrap";
import useAuth from "../Hooks/useAuth";
import Product from "./Product";

const Explore = (props) => {
  const [products, setProducts] = useState([]);

  const {admin,setIsLoading} = useAuth();

  useEffect(() => {
    fetch("https://murmuring-cove-28727.herokuapp.com/jewelries")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const _id = products?.map(d => d._id);
  console.log(products)
  const handleDelete = (id) => {
    setIsLoading(true);
    
    const isConfirm = window.confirm("Are you sure...?");
    if (isConfirm) {
      fetch(`https://murmuring-cove-28727.herokuapp.com/deleteProduct/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
             const remaining = products? products.filter((d) => d._id !== id) : [];
           
             setProducts(remaining);
          }
        });
    }
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {products?.map(product => <Product key ={product._id} handleDelete={()=>handleDelete(product._id)} product={product}/>).slice(0,props.quantity)}
        </div>
      </div>
    </>
  );
};

export default Explore;
