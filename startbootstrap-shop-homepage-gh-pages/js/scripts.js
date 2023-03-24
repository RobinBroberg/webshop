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
    const productContainer = document.getElementById('product-container');

    data.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product'); // add the "product" class
      productDiv.innerHTML = `
        <h3 class="title">${product.title}</h3>
        <img class="images" src="${product.image}" alt="">
        <p class="price">$${product.price}</p>
        <p class="category">${product.category}</p>
      `;
      productContainer.appendChild(productDiv);
    });
  })
  .catch(error => console.log(error));