
import React from "react";
import { Card ,Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ title, description, image, price,_id }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <Card className = 'shadow h-100'>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className = 'text-muted'>
           {description}
          </Card.Text>
          <h5>
           ${price}
          </h5>
          <Link to= {`/purchase/${_id}`}>
          <Button variant="primary" >Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
