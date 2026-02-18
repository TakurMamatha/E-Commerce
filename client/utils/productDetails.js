const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

async function loadProduct() {
  const response = await fetch(`http://localhost:5000/api/products/${productId}`);
  const product = await response.json();

  const container = document.getElementById("productDetails");

  container.innerHTML = `
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <p>₹${product.price}</p>
    <button onclick="addToCart()">Add to Cart</button>
  `;
}

async function addToCart() {
  const token = localStorage.getItem("token");

  await fetch("http://localhost:5000/api/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      productId,
      quantity: 1,
    }),
  });

  alert("Added to cart!");
}

loadProduct();
