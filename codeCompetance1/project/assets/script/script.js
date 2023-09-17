document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formInput");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const email = emailInput.value;

    // null checking refactor
    if (!firstName || !lastName || !email) {
      alert("Please enter a valid value.");
      return;
    }

    alert("Product created successfully!");

    form.reset();
  });
});
