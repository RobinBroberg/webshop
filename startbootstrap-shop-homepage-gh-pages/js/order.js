const submitButton = document.getElementById("submitBtn");

submitButton.addEventListener("click", () => {
  if (
    checkName() &&
    checkEmail() &&
    checkPhone() &&
    checkAddress() &&
    checkZipCode() &&
    checkCity()
  ) {
    // gå till bekräftelse
    localStorage.setItem("name", document.getElementById("name-input").value);
    localStorage.setItem("email", document.getElementById("email-input").value);
    localStorage.setItem("phone", document.getElementById("phone-input").value);
    localStorage.setItem(
      "address",
      document.getElementById("address-input").value
    );
    localStorage.setItem(
      "zipCode",
      document.getElementById("zipCode-input").value
    );
    localStorage.setItem("city", document.getElementById("city-input").value);

    location.href = "confirmation.html";
  }
});

function checkName() {
  const regexp = /^[A-Za-z\s\u00C0-\u00FF]{2,50}$/;
  const nameInput = document.getElementById("name-input");
  if (regexp.test(nameInput.value)) {
    document.getElementById("name-error").classList.add("hide");
    return true;
  } else {
    document.getElementById("name-error").classList.remove("hide");
  }
}

function checkEmail() {
  const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,50}$/;
  const emailInput = document.getElementById("email-input");
  if (regexp.test(emailInput.value)) {
    document.getElementById("email-error").classList.add("hide");
    return true;
  } else {
    document.getElementById("email-error").classList.remove("hide");
  }
}

function checkPhone() {
  const regexp = /^[\d()-]{0,50}$/;
  const phoneInput = document.getElementById("phone-input");
  if (regexp.test(phoneInput.value)) {
    document.getElementById("phone-error").classList.add("hide");
    return true;
  } else {
    document.getElementById("phone-error").classList.remove("hide");
  }
}

function checkAddress() {
  const regexp = /^[A-Za-z0-9\s\u00C0-\u00FF.,/\\-]{2,50}$$/;
  const addressInput = document.getElementById("address-input");
  if (regexp.test(addressInput.value)) {
    document.getElementById("address-error").classList.add("hide");
    return true;
  } else {
    document.getElementById("address-error").classList.remove("hide");
  }
}

function checkZipCode() {
  const regexp = /^\d{3}\s\d{2}$/;
  const zipCodeInput = document.getElementById("zipCode-input");
  if (regexp.test(zipCodeInput.value)) {
    document.getElementById("zipCode-error").classList.add("hide");
    return true;
  } else {
    document.getElementById("zipCode-error").classList.remove("hide");
  }
}

function checkCity() {
  const regexp = /^[A-Za-z\s\u00C0-\u00FF]{2,50}$/;
  const cityInput = document.getElementById("city-input");
  if (regexp.test(cityInput.value)) {
    document.getElementById("city-error").classList.add("hide");
    return true;
  } else {
    document.getElementById("city-error").classList.remove("hide");
  }
}
