{
  const subtotalElement = document.getElementById("sub-total");
  const subtotalNumber = subtotalElement.innerText;

  const taxElement = document.getElementById("tax-amount");
  const taxNumber = taxElement.innerText;

  const finalTotalElement = document.getElementById("final-total");
  const finalTotalNumber = finalTotalElement.innerText;

  // console.log(subtotalNumber, taxNumber, finalTotalNumber);
}

document
  .getElementById("phone-btn-plus")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(true, "phone-input");

    updateCaseTotalNumber(newCaseNumber, "phone-price", 1219);

    setTotalAmounts();
  });
document
  .getElementById("phone-btn-minus")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(false, "phone-input");

    updateCaseTotalNumber(newCaseNumber, "phone-price", 1219);

    setTotalAmounts();
  });
