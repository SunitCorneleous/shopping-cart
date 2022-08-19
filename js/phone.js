document
  .getElementById("phone-btn-plus")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(true, "phone-input");

    updateCaseTotalNumber(newCaseNumber, "phone-price", 1219);
  });
document
  .getElementById("phone-btn-minus")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(false, "phone-input");

    updateCaseTotalNumber(newCaseNumber, "phone-price", 1219);
  });
