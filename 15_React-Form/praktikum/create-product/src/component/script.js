document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("productForm");
  const productTableBody = document.getElementById("productTableBody");
  let productNum = 1000;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const productNameInput = document.getElementById("productName");
    const categoryInput = document.getElementById("productCategory");
    const freshnessInput = document.querySelectorAll(
      'input[name="productFreshness"]'
    );
    const descInput = document.getElementById("description");
    const priceInput = document.getElementById("productPrice");

    const productName = productNameInput.value;
    const productCategory = categoryInput.value;
    const productDesc = descInput.value;
    const productPrice = priceInput.value;
    let productFreshness = false;
    freshnessInput.forEach((input) => {
      if (input.checked) {
        productFreshness = true;
        productFreshness = input.value;
      }
    });

    // null checking refactor
    if (
      !productName ||
      !productCategory ||
      !productFreshness ||
      !productDesc ||
      !productPrice
    ) {
      alert("Please enter a valid value.");
      return;
    }

    if (productName.length > 25) {
      alert("Last Name must not exceed 25 characters.");
      return;
    }

    if (
      productName.includes("@") ||
      productName.includes("#") ||
      productName.includes("{") ||
      productName.includes("}")
    ) {
      alert("Product name must not contain symbols");
      return;
    }

    alert("Product created successfully!");

    productNum++;

    const newRow = productTableBody.insertRow();
    newRow.innerHTML = `
                <td>${productNum}</td>
                <td>${productName}</td>
                <td>${productCategory}</td>
                <td>${productFreshness}</td>
                <td>${productDesc}</td>
                <td>${productPrice}</td>
            `;
    form.reset();
  });
});
