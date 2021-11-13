import React from "react";
import { useForm } from "react-hook-form";

const AddReview = () => {
    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
  const onSubmit = (data) => {

    fetch(`https://murmuring-cove-28727.herokuapp.com/reviews`,{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(data)
    }).then(res => res.json())
    alert('Thanks for your valuable feedback!!')
   reset()
  };
  return (
    <div className="container">
      <h2 className="my-4 text-uppercase">add a review</h2>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                className="form-control"
                {...register("name", { required: true })}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Rating out of 5"
                className="form-control my-3"
                min={0}
                max={5}
                step="0.1"
                {...register("rating", { required: true })}
              />
            </div>
            <div className="form-group">
              <textarea
                type="text"
                placeholder="Your Exprience"
                className="form-control my-3"
                rows={4}
                cols={10}
                {...register("details", { required: true })}

              ></textarea>
            </div>
            <input
              type="submit"
              className="mb-4 text-uppercase btn btn-danger"
              value = 'add review'
            />

           
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
