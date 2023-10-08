import React from "react";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <div className="container-xl py-5 text-white">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1>Welcome Home</h1>
              <p>
                Company Description Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>
            <div className="col-6 col-md-4">
              <img
                src="https://academy.alterra.id/wp-content/uploads/2022/06/Logo-Colour-Transparant-1.png"
                alt="Company Logo"
                className="img-fluid rounded-rectangle"
              />
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="row">
              <div className="col-md-4">
                <h5>follow us to get exciting offers</h5>
                <div className="input-group mb-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      Subscribe
                    </button>
                  </div>
                </div>
                <h5>Follow Us:</h5>
                <div className="social-icons">
                  <div className="row row-cols-lg-6">
                    <div className="p-2 g-col-6">
                      <a
                        href="https://www.facebook.com/rzntegar"
                        className="btn btn-primary"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </div>
                    <div className="p-2 g-col-6">
                      <a
                        href="https://www.instagram.com/amrattategarl/"
                        className="btn btn-primary"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                    <div className="p-2 g-col-6">
                      <a
                        href="https://www.linkedin.com/in/amratta-tegar-lazuardy-31a805226/"
                        className="btn btn-primary"
                      >
                        <i className="fab fa-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <h5>Code Competance</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam euismod ligula ac purus dignissim.
                </p>
              </div>
              <div className="col-md-4">
                <h5>Contact Information</h5>
                <address>
                  <strong>Address:</strong>
                  <br />
                  Jl.Indrapasta No 5, Semarang Barat
                  <br />
                  Semarang, Jawa Tengah
                </address>
                <p>
                  <strong>Phone:</strong> +62 89538590054
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
