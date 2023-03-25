/*!
 * Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

let map = new Map();
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    const productContainer = document.querySelector(".row");
    data.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add(
        "col-12",
        "col-sm-6",
        "col-md-4",
        "col-lg-3",
        "mb-4"
      );
      productObject = {
        id: product.id,
        image: product.image,
        title: product.title,
        price: product.price,
      };
      map.set(productObject, "buy-button-" + productObject.id);
      productDiv.innerHTML = `
        <div class="card h-100">
          <img class="card-img-top images mx-auto" src="${
            productObject.image
          }" alt="">
          <div class="card-body p-4">
            <div class="text-center">
              <h5 class="card-title">${productObject.title}</h5>
              <p class="card-text">$${productObject.price}</p>
            </div>
          </div>
          <p class="card-text mx-auto">$${product.price}</p>
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent mx-auto">
            <div class="text-center">
              <a id="${map.get(
                productObject
              )}"class="btn btn-outline-dark mt-auto mt-3 buy-button "  href="#">Buy Item </a>
            </div>
          </div>
        </div>
      `;
      productContainer.appendChild(productDiv);
    });
    map.forEach((value, key) => {
      const currentProduct = key;
      // vill skicka vidare currentProduct till order.html
      let anchor = document.getElementById(value);
      anchor.addEventListener("click", (event) => {
        localStorage.setItem("productId", currentProduct.id);
        localStorage.setItem("productImage", currentProduct.image);
        localStorage.setItem("productTitle", currentProduct.title);
        localStorage.setItem("productPrice", currentProduct.price);
        window.location.href = "order.html";
      });
    });
  })
  .catch((error) => console.log(error));
