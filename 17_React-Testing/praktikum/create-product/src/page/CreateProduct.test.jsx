import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ProductForm from "../component/ProductForm";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../store/store";

test("Memastikan bahwa form input Product Name dapat menerima input teks dan menampilkannya di halaman.", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <ProductForm />
      </MemoryRouter>
    </Provider>
  );
  const productNameInput = screen.getByLabelText("Product name:");

  fireEvent.change(productNameInput, {
    target: { value: "Sample Product Name" },
  });

  expect(productNameInput.value).toBe("Sample Product Name");
});
