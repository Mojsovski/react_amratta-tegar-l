import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4  ">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              euismod ligula ac purus dignissim.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Contact Form</h5>
            <form id="formInput">
              <div className="row">
                <div className="col-md-6 mb-2">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input type="text" className="form-control" id="firstName" />
                </div>
                <div className="col-md-6 mb-2">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input type="text" className="form-control" id="lastName" />
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-2">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows={4}
                  defaultValue={""}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
