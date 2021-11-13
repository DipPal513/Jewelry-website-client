import React, { useEffect, useState } from "react";
import { useAccordionButton } from "react-bootstrap";
import useAuth from "../Hooks/useAuth";
import Product from "./Product";

const Explore = (props) => {
  const [data, setData] = useState();

  const {admin,setIsLoading} = useAuth();

  useEffect(() => {
    fetch("https://murmuring-cove-28727.herokuapp.com/jewelries")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const _id = data?.map(d => d._id);
  console.log(data)
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
             const remaining = data?.filter((d) => d._id !== id);
           
             setData(remaining);
          }
        });
    }
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {data?.map(product => <Product key ={product._id} handleDelete={()=>handleDelete(product._id)} product={product}/>).slice(0,props.quantity)}
        </div>
      </div>
    </>
  );
};

export default Explore;
