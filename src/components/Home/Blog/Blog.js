import React from "react";
import images from "../../../images/images-1.png";
import { Card, Button } from "react-bootstrap";
import BlogDetail from "../BlogDetail/BlogDetail";
const data = [
  {
    id: 1,
    img: images,
    title: "Lorem ipsum dolor sit amet",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repudiandae minus minima cumque, assumenda odit.",
  },
  {
    id: 1,
    img: images,
    title: "Lorem ipsum dolor sit amet",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repudiandae minus minima cumque, assumenda odit.",
  },
  {
    id: 1,
    img: images,
    title: "Lorem ipsum dolor sit amet",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repudiandae minus minima cumque, assumenda odit.",
  },
  //   {
  //     id: 1,
  //     img: images,
  //     title: "Lorem ipsum dolor sit amet",
  //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repudiandae minus minima cumque, assumenda odit.",
  //   },
];
const Blog = () => {
  return (
    <div>
      {/* <section class="container overflow-hidden mt-5 categories">
        <div class="row g-5">
          <div class="col">
            <div class="p-1 border bg-warning rounded d-flex align-items-center">
              <h1 class="text-white">Bags</h1>
              <img src="images/categories/bag.png" alt="" />
            </div>
          </div>
          <div class="col">
            <div class="p-1 border bg-primary rounded d-flex align-items-center">
              <h1 class="text-white">Watch</h1>
              <img src="images/categories/watch.png" alt="" />
            </div>
          </div>
          <div class="col">
            <div class="p-1 border bg-success rounded d-flex align-items-center">
              <h1 class="text-white">Shoes</h1>
              <img src="images/categories/shoes.png" alt="" />
            </div>
          </div>
        </div>
      </section> */}

      <div className="container">
        <div className="row">
          {data.map((blog) => (
            <div className="col-md-4 mt-5 mb-5 blog-details">
              <div className="d-flex justify-content-center ">
                <Card style={{ width: "18rem" }}>
                  <img src={blog.img} alt="" />
                  <Card.Body>
                    <Card.Title>{blog.title}</Card.Title>
                  </Card.Body>
                  <Card.Text>{blog.body}</Card.Text>
                  <Button>Book</Button>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
