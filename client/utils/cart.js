const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "../auth/login.html";
}

async function loadCart() {
  const token = localStorage.getItem("token");

  const response = await fetch("http://localhost:5000/api/cart", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const cart = await response.json();

  const container = document.getElementById("cartItems");

  container.innerHTML = "";

  cart.items.forEach((item) => {
    container.innerHTML += `
      <div>
        <h3>${item.product.name}</h3>
        <p>Qty: ${item.quantity}</p>
      </div>
    `;
  });
}

loadCart();
