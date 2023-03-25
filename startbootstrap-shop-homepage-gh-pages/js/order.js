

const submitButton = document.getElementById("submitBtn");

submitButton.addEventListener("click", () => {
  if (checkName && checkEmail && checkPhone && checkAddress) {
    // gå till bekräftelse
    location.href = "confirmation.html";
  } else {
    // visa errormeddelande
  }
});

function checkName() {
  const nameInput = document.getElementById("firstName");
  if (nameInput.innerHTML === "hej") {
    return true;
  }
}

function checkEmail() {}

function checkPhone() {}

function checkAddress() {}
