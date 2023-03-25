const id = localStorage.getItem("productId");
const image = localStorage.getItem("productImage");
const title = localStorage.getItem("productTitle");
const price = localStorage.getItem("productPrice");

console.log("ID: ", id);
console.log("image: ", image);
console.log("Title: ", title);
console.log("Price: ", price);

document.getElementById("ID").innerHTML = id;
document.getElementById("image").src = image;
document.getElementById("title").innerHTML = title;
document.getElementById("price").innerHTML = price;
