import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const ManageOrder = () => {
  const [orders, setOrders] = useState();
  const { user, setIsLoading, isLoading } = useAuth();
  useEffect(() => {
    fetch(`https://murmuring-cove-28727.herokuapp.com/placedOrder`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  const handleDelete = (id) => {
    setIsLoading(true);
    const isConfirm = window.confirm("Are you sure...?");
    if (isConfirm) {
      fetch(`https://murmuring-cove-28727.herokuapp.com/deleteOrder/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };
  const manageUpdate = (id) => {
   
    fetch(`https://murmuring-cove-28727.herokuapp.com/updateOrder/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
       
        res.json()})
      .then((data) => {
          alert("Are you sure you want to update your order?");
      });
  };
  return (
    <div>
      <h1 className="text-center text-uppercase my-4">
        your {orders?.length} orders
      </h1>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-12 table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Adress</th>
                  <th scope="col">Number</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders
                  ? orders?.map((order, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{order.name}</td>
                        <td>{order.email}</td>
                        <td>{order.adress}</td>
                        <td>{order.number}</td>
                        <td>{order.status}</td>

                        <td className="d-flex">
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDelete(order?._id)}
                          >
                            Delete
                          </button>
                          <button
                            className="btn btn-sm btn-info ms-3"
                            onClick={() => manageUpdate(order?._id)}
                          >
                            Update
                          </button>
                        </td>
                      </tr>
                    ))
                  : ""}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
