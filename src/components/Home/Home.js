import React from "react";
import Blog from "./Blog/Blog";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
