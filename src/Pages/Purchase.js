import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
const Purchase = () => {
  const history = useHistory();
  const { user } = useAuth();
  const { id } = useParams();
  const [item, setItem] = useState();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    fetch(`https://murmuring-cove-28727.herokuapp.com/jewelries/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [item]);

  const onSubmit = (data) => {
    data.price = item.price;
    data.status = "pending";
    fetch("https://murmuring-cove-28727.herokuapp.com/placeOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {});
    reset();
    history.push("/dashboard/myOrder");
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 mb-5">
            <div className="card">
              <img
                className="card-img-top"
                src={item?.image}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{item?.title}</h5>
                <p className="card-text">{item?.description}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input
                  type="name"
                  className="form-control mb-3"
                  id="inputEmail4"
                  placeholder="name"
                  value={user?.displayName}
                  {...register("name")}
                  readOnly
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                  {...register("email")}
                  value={user?.email}
                  readOnly
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Adress"
                  {...register("adress")}
                />
              </div>

              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Phone Number"
                  {...register("number")}
                />
              </div>
              <input type="submit" className="btn btn-success mt-3" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Purchase;
