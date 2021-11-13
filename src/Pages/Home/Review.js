import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ReactStars from "react-stars";
const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://murmuring-cove-28727.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="review-section my-5">
      <h2 className="text-uppercase">what people say about us</h2>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-10 py-5">
          <Slider {...settings}>
            {reviews.map((review) => (
              <>
              
                <div className="card mx-3">
                  <div className="card-body text-center">
                    <h5 className="card-title">{review.name}</h5>

                    <ReactStars
                      className="d-flex align-items-center justify-content-center"
                      count={parseFloat(review.rating)}
                      // onChange={ratingChanged}
                      size={24}
                      half={true}
                      color1={"#ffd700"}
                      color2={"#000"}
                    />

                    <p className="card-text">{review.details}</p>
                  </div>
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Review;
