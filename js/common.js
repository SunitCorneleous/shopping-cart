function updateCaseNumber(isIncreaseNumber, field) {
  const caseInputField = document.getElementById(field);
  const prviousCaseInputValue = parseInt(caseInputField.value);

  let newCaseNumber;

  if (isIncreaseNumber) {
    newCaseNumber = prviousCaseInputValue + 1;
  } else {
    newCaseNumber = prviousCaseInputValue - 1;
  }

  caseInputField.value = newCaseNumber;

  return newCaseNumber;
}

function updateCaseTotalNumber(newCaseNumber, priceID, price) {
  const casePriceElement = document.getElementById(priceID);

  const newTotalCasePrice = price * newCaseNumber;
  casePriceElement.innerText = newTotalCasePrice;
}
