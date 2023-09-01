document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('productForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const productNameInput = document.getElementById('productName');
        const productName = productNameInput.value;
        const optionCategory = document.getElementById('productCategory');
        const radioFreshness = document.querySelectorAll('input[name="productFreshness"]');
        const fileInput = document.getElementById('file');
        const descInput = document.getElementById('description');
        const priceInput = document.getElementById('productPrice');

        //product name
        if (!productName) {
            alert("Please enter a valid Product name.");
            return;
        }

        if (productName.length > 25) {
            alert("Last Name must not exceed 25 characters.");
            return;
        }

        if (productName.includes('@') || productName.includes('#') || productName.includes(
                '{') || productName.includes('}')) {
            alert("Product name must not contain symbols");
            return;
        }

        //product category
        if (!optionCategory.value) {
            alert("Product category field must be filled in.");
            return;
        }

        //product freshness
        let selectedRadio = false;
        radioFreshness.forEach(input => {
            if (input.checked) {
                selectedRadio = true;
            }
        });

        if (!selectedRadio) {
            alert("Please enter a valid Product Freshness.");
            return;
        }

        //upload file
        if (!fileInput.value) {
            alert("Please upload a file.");
            return;
        }

        //desc
        if (!descInput.value) {
            alert("Please enter a description.");
            return;
        }

        //productprice
        if (!priceInput.value) {
            alert("Please enter a product price.");
            return;
        }

        alert("Product created successfully!");

        form.reset();
    });
});