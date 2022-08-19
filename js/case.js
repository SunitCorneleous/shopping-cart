document.getElementById("case-btn-plus").addEventListener("click", function () {
  const newCaseNumber = updateCaseNumber(true, "case-input");

  const priceID = "case-price";
  const price = 59;

  updateCaseTotalNumber(newCaseNumber, priceID, price);
});
document
  .getElementById("case-btn-minus")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(false, "case-input");

    const priceID = "case-price";
    const price = 59;

    updateCaseTotalNumber(newCaseNumber, priceID, price);
  });
