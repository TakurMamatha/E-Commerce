// Get category from URL
const urlParams = new URLSearchParams(window.location.search);
const categoryName = urlParams.get("category");

// Set page title
// document.getElementById("h2").innerText = categoryName + " Products";
document.getElementById("categoryTitle").innerText = categoryName + " Products";
// Load products
async function loadCategoryProducts() {
  try {
    const response = await fetch("http://localhost:5000/api/products");
    const products = await response.json();

    // Filter products by category
    const filteredProducts = products.filter(
      product => product.category === categoryName
    );

    const container = document.getElementById("categoryProducts");
    container.innerHTML = "";

    if (filteredProducts.length === 0) {
      container.innerHTML = "<h3>No products found</h3>";
      return;
    }

    filteredProducts.forEach(product => {
      container.innerHTML += `
        <div class="product-card">
          <img src="${product.image}" class="product-img">
          <h4>${product.name}</h4>
          <p>₹${product.price}</p>
          <button onclick="addToCart('${product._id}')">
            Add to Cart
          </button>
        </div>
      `;
    });

  } catch (error) {
    console.log(error);
  }
}

async function addToCart(productId) {

  try {
    // Get full product details from backend
    const response = await fetch(`http://localhost:5000/api/products/${productId}`);
    const product = await response.json();

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(item => item._id === product._id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(product.name + " added to cart ✅");

  } catch (error) {
    console.log("Error adding to cart:", error);
  }
}
loadCategoryProducts();