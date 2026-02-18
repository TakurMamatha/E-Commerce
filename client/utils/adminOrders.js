 const user = JSON.parse(localStorage.getItem("userInfo"));

if (!user || !user.isAdmin) {
  alert("Access denied");
  window.location.href = "../user/home.html";
}

 const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "../auth/login.html";
}

async function loadAllOrders() {
  const token = localStorage.getItem("token");

  const response = await fetch("http://localhost:5000/api/orders", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const orders = await response.json();

  const container = document.getElementById("ordersContainer");
  container.innerHTML = "";

  orders.forEach((order) => {
    container.innerHTML += `
      <div style="border:1px solid #ccc; margin:10px; padding:10px;">
        <p>User: ${order.user}</p>
        <p>Total: ₹${order.totalPrice}</p>
        <p>Status: ${order.isDelivered ? "Delivered" : "Pending"}</p>
        <button onclick="markDelivered('${order._id}')">Mark Delivered</button>
      </div>
    `;
  });
}

async function markDelivered(id) {
  const token = localStorage.getItem("token");

  await fetch(`http://localhost:5000/api/orders/${id}/deliver`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  alert("Order marked as delivered");
  loadAllOrders();
}

loadAllOrders();
