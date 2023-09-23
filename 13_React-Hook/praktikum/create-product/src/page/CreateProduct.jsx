import { useState } from "react";

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

function CreateProduct() {
  const [language, setLanguage] = useState("en");

  const handleLocalization = (e) => {
    const changeLanguage = language === "en" ? "id" : "en";
    setLanguage(changeLanguage);
  };

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
          </div>
        </div>
        <div className="d-flex gap-3 justify-content-center">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: 100 }}
            onClick={handleLocalization}
          >
            ID/EN
          </button>
        </div>
      </div>
      <br />
    </>
  );
}

export default CreateProduct;
