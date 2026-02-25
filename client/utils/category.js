// Get category from URL
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

// Set title
document.getElementById("categoryTitle").innerText =
  category + " Products";

// Fetch filtered products
fetch(`http://localhost:5000/api/products`)
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
        </div>
      `;
    });

  })
  .catch(err => console.log(err));