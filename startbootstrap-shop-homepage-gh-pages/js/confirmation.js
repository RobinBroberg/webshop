function generateOrderId() {
  let orderId = "";
  for (let i = 0; i < 10; i++) {
    orderId += Math.floor(Math.random() * 10);
  }
  return orderId;
}

document.getElementById("order-id").innerHTML = generateOrderId();
document.getElementById("date").innerHTML = new Date()
  .toISOString()
  .slice(0, 10);
document.getElementById("ID").innerHTML = localStorage.getItem("productId");
document.getElementById("image").src = localStorage.getItem("productImage");
document.getElementById("title").innerHTML =
  localStorage.getItem("productTitle");
document.getElementById("price").innerHTML =
  localStorage.getItem("productPrice");
document.getElementById("name").innerHTML = localStorage.getItem("name");
document.getElementById("email").innerHTML = localStorage.getItem("email");
document.getElementById("phone").innerHTML = localStorage.getItem("phone");
document.getElementById("address").innerHTML = localStorage.getItem("address");
document.getElementById("zipCode").innerHTML = localStorage.getItem("zipCode");
document.getElementById("city").innerHTML = localStorage.getItem("city");
