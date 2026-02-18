const user = JSON.parse(localStorage.getItem("userInfo"));

if (!user || !user.isAdmin) {
  alert("Access denied");
  window.location.href = "../user/home.html";
}

const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "../auth/login.html";
}

async function loadProducts() {
  const token = localStorage.getItem("token");

  const response = await fetch("http://localhost:5000/api/products", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const products = await response.json();

  const container = document.getElementById("productsContainer");
  container.innerHTML = "";

  products.forEach((product) => {
    container.innerHTML += `
      <div>
        <h3>${product.name}</h3>
        <button onclick="deleteProduct('${product._id}')">Delete</button>
      </div>
    `;
  });
}

async function deleteProduct(id) {
  const token = localStorage.getItem("token");

  await fetch(`http://localhost:5000/api/products/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  alert("Product deleted");
  loadProducts();
}

loadProducts();
