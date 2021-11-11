import React from "react";
import { Card } from "react-bootstrap";
const BlogDetail = ({ blog }) => {
  const { img, title, body } = blog;
  //   console.log(props);
  return (
    <div className="">
      <div className="col-md-3 mt-5 blog-details">
        <div className="d-flex justify-content-center ">
          <Card style={{ width: "18rem", height: "300px" }}>
            <img src={img} alt="" />
            <Card.Body>
              <Card.Text>{title}</Card.Text>
            </Card.Body>
            <Card.Text>{body}</Card.Text>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
