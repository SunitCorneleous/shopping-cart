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

// get innertext from element
function getElementTotalById(elementId) {
  const element = document.getElementById(elementId);
  const totalNumber = parseInt(element.innerText);

  return totalNumber;
}

// set the final amounts with tax and total
function setTotalAmounts() {
  // phone and case total number
  const phoneTotalNumber = getElementTotalById("phone-price");
  const caseTotalNumber = getElementTotalById("case-price");

  // total price
  const totalPrice = phoneTotalNumber + caseTotalNumber;

  // set total price
  const subtotalElement = document.getElementById("sub-total");
  subtotalElement.innerText = totalPrice;

  // calculate tax and set total price
  const taxAmount = parseFloat((totalPrice * 0.1).toFixed(2));
  const taxElement = document.getElementById("tax-amount");
  taxElement.innerText = taxAmount;

  // calculate final total price and set total price
  const finalTotalNumber = totalPrice + taxAmount;
  const finalTotalElement = document.getElementById("final-total");
  finalTotalElement.innerText = finalTotalNumber;
}
