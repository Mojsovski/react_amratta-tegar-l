import React from "react";
import HeroImg from "../assets/hero.png";
import Header from "../component/Header";
import PopUp from "../component/PopUp";

function LandingPage() {
  return (
    <>
      <PopUp />
      <Header />
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="home-main-text">
                <h1 className="display-4">
                  Better Solutions For Your Business
                </h1>
                <p className="lead">
                  We are a team of talented designers making websites with
                  Bootstrap
                </p>
              </div>
              <div className="button">
                <a className="btn btn-primary button-a" href="#">
                  Get Started
                </a>
                <a className="btn btn-secondary button-a" href="#">
                  Watch Video
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <img src={HeroImg} className="img-fluid" alt="hero-img" />
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron2">
        <div className="main2">
          <div className="main2-text">
            <h2>Join Our Newsletter </h2>
            <p>
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
            </p>
          </div>
          <div className="text-box">
            <input type="text" className="search-bar" id="search-bar" />
            <a className="button-b" href="#">
              Subscribe
            </a>
          </div>
        </div>
      </div>
      <footer>
        <div className="about">
          <div className="wrap">
            <div className="address">
              <h2>ARSHA</h2>
              <p>A108 Adam Street New York, NY 535022 United States</p>
              <p>
                <b>Phone</b>: +1 5589 55488 55
              </p>
              <p>
                <b>Email</b>: info@example.com
              </p>
            </div>
            <div className="links">
              <h3> Usefull Links</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="services">
              <h3> Our Social Networks</h3>
              <ul>
                <li>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>
            <div className="networks">
              <h3> Our Social Networks</h3>
              <br />
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
              <br />
              <div className="row gap-2">
                <span className="dot " />
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
            </div>
          </div>
        </div>
        <div className="credit">
          <div className="container">
            <div className="row ">
              <div className="col-md-6">
                <p>&copy; Copyright Arsha. All Rights Reserved</p>
              </div>
              <div className="col-md-6">
                <p>Designed by BootstrapMade</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
