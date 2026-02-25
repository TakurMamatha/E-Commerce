// 🔐 Check Login
const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "../auth/login.html";
}

// 🌍 Store all products globally
let allProducts = [];

// 🚀 Load Products from Backend
async function loadProducts() {
  try {
    const response = await fetch("http://localhost:5000/api/products");
    const products = await response.json();

    console.log("Products Loaded:", products);

    allProducts = products; // Save globally

    displayProducts(allProducts); // Show all products

  } catch (error) {
    console.error("Error loading products:", error);
  }
}

// 🖥 Display Products
function displayProducts(productList) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  productList.forEach(product => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" class="product-img">
        <h4>${product.name}</h4>
        <p><strong>₹${product.price}</strong></p>
        <p>${product.category}</p>
        <button onclick="addToCart('${product._id}')">
          Add to Cart
        </button>
      </div>
    `;
  });
}

// 🏷 Filter by Category
function filterProducts(category) {
  const filtered = allProducts.filter(
    product => product.category === category
  );

  displayProducts(filtered);
}

// 🛒 Add to Cart
function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(productId);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product added to cart!");
}

// 🔄 Call Load on Page Load
loadProducts();