/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    const productContainer = document.querySelector('.row');

    data.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4');
      productDiv.innerHTML = `
        <div class="card h-100">
          <img class="card-img-top images mx-auto" src="${product.image}" alt="">
          <div class="card-body p-4">
            <div class="text-center">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">$${product.price}</p>
            </div>
          </div>
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent mx-auto">
            <div class="text-center">
              <a class="btn btn-outline-dark mt-auto mt-3" href="#">View options</a>
            </div>
          </div>
        </div>
      `;
      productContainer.appendChild(productDiv);
    });
  })
  .catch(error => console.log(error));

