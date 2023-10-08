import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Img1 from "../assets/Img1.jpg";
import Me from "../assets/Me.jpg";
import Yukino from "../assets/Yukino.webp";

function ProjectTwo() {
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

      <div className="about-me" style={{ paddingTop: "70px" }}>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <div className="text-center">
            <h2>About Me</h2>
          </div>
          <div className="container-xl py-5">
            <div className="row text-center">
              <div className="col-4">
                <div className="card" style={{ height: "74%" }}>
                  <img
                    src={Img1}
                    class="card-img-top"
                    alt=""
                    style={{
                      width: "100%",
                      height: "70%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Activity</h5>
                    <p className="card-text">
                      Now I'm taking part in the 2023 Complete Front-End
                      Engineer Career with React JS, an Studi Independen Batch 5
                      from Kampus Merdeka
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card" style={{ height: "74%" }}>
                  <img
                    src={Me}
                    class="card-img-top"
                    alt=""
                    style={{
                      width: "100%",
                      height: "70%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Introduce</h5>
                    <p className="card-text">
                      My name is Amratta Tegar Lazuardy. You can call me Tegar.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card" style={{ height: "74%" }}>
                  <img
                    src={Yukino}
                    class="card-img-top"
                    alt=""
                    style={{
                      width: "100%",
                      height: "70%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Fun Fact</h5>
                    <p
                      className="card-text"
                      style={{ textDecoration: "line-through" }}
                    >
                      I Love My Waifu
                    </p>
                    <p className="card-text">
                      My Hobby is listen old music like 90' City Pop Japan Song
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProjectTwo;
