import React from "react";

const NavBar = () => {
  return (
    <div className="">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <h3>TFP</h3>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <ul class="navbar-nav ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  " href="/contact">
                  Contact us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="/blog">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ">SignIn</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
