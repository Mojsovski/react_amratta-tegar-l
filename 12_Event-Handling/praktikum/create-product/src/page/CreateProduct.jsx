// import styles from "../page/component/CreateProduct.module.css";
import { Component } from "react";

const localization = {
  title: {
    id: "Buat Akun",
    en: "Create Account",
  },
  description: {
    en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
    id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
  },
};

class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "en",
    };
  }

  handleLocalization = () => {
    const changeLanguage = this.state.language === "en" ? "id" : "en";
    this.setState({
      language: changeLanguage,
    });
  };

  handleRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 50) + 1;
    console.log(`Random Number: ${randomNum}`);
    this.setState({
      randomNumber: randomNum,
    });
  };

  render() {
    const { language, randomNumber } = this.state;
    const title = localization.title[language];
    const description = localization.description[language];

    return (
      <>
        <div className="container text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
            className="rounded mx-auto d-block"
            alt="..."
            style={{ width: 62, height: 50 }}
          />{" "}
          <br />
          <div className="row align-items-start">
            <div className="col">
              <h2>{title}</h2>
              <p>{description}</p>
              <p>Random Number : {randomNumber}</p>
            </div>
          </div>
          <div className="d-flex gap-3 justify-content-center">
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: 100 }}
              onClick={this.handleLocalization}
            >
              ID/EN
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: 180 }}
              onClick={this.handleRandomNum}
            >
              Random Number
            </button>
          </div>
        </div>
        <br />
      </>
    );
  }
}

export default CreateProduct;
