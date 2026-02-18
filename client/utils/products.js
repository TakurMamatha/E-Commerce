const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "../auth/login.html";
}


// async function loadProducts() {
//   try {
//     const response = await fetch("http://localhost:5000/api/products");
//     const data = await response.json();

//     const container = document.getElementById("products");
//     container.innerHTML = "";

//     data.forEach(product => {
//         container.innerHTML += `
//             <div class="product-card">
//                 <img src="${product.image}" class="product-img">
//                 <h4>${product.name}</h4>
//                 <p>₹${product.price}</p>
//                 <p>${product.category}</p>
//                 <button onclick="addToCart('${product._id}')">
//                   Add to Cart
//                 </button>
//             </div>
//         `;
//     });
let allProducts = []; // store products globally

async function loadProducts() {
  try {
    const response = await fetch("http://localhost:5000/api/products");
    const data = await response.json();

    allProducts = data; // save all products

    displayProducts(allProducts); // show all products initially

  } catch (error) {
    console.error(error);
  }
}
function displayProducts(productList) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  productList.forEach(product => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" class="product-img">
        <h4>${product.name}</h4>
        <p><strong>₹${product.price}</strong></p>
        <p>⭐ ${product.rating || 4}</p>
        <p>${product.description || "No description available"}</p>
        <button onclick="addToCart('${product._id}')">
          Add to Cart
        </button>
      </div>
    `;
  });
}
function displayProducts(productList) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  productList.forEach(product => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" class="product-img">
        <h4>${product.name}</h4>
        <p><strong>₹${product.price}</strong></p>
        <p>⭐ ${product.rating || 4}</p>
        <p>${product.description || "No description available"}</p>
        <button onclick="addToCart('${product._id}')">
          Add to Cart
        </button>
      </div>
    `;
  });
}
function filterProducts(category) {
  const filtered = allProducts.filter(
    product => product.category === category
  );

  displayProducts(filtered);
}
function filterByCategory(category) {
  fetch("http://localhost:5000/api/products")
    .then(res => res.json())
    .then(data => {

      const filtered = data.filter(
        product => product.category === category
      );

      const container = document.getElementById("products");
      container.innerHTML = "";

      filtered.forEach(product => {
        container.innerHTML += `
          <div class="product-card">
            <img src="${product.image}" class="product-img">
            <h4>${product.name}</h4>
            <p>₹${product.price}</p>
            <p>${product.category}</p>
            <button onclick="addToCart('${product._id}')">
              Add to Cart
            </button>
          </div>
        `;
      });

    })
    .catch(err => console.log(err));
}
function addToCart(productId) {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(productId);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product added to cart!");
}

loadProducts();

  
  
