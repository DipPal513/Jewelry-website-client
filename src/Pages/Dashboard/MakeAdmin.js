import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
    e.target.value = "";
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://murmuring-cove-28727.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
          
        }
      })
      .finally(() => alert("Admin added succesfully!"));

    e.preventDefault();
  };
  return (
    <div className="makeAdmin">
      <h2 className="text-uppercase my-4">make an admin</h2>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6">
          <form onSubmit={handleAdminSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control"
                onBlur={handleOnBlur}
              />
              <button className="btn btn-danger mt-3 text-uppercase">
                make admin
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
