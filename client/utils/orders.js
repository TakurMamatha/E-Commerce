const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "../auth/login.html";
}

async function loadOrders() {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please login first");
    window.location.href = "../auth/login.html";
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/orders/myorders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const orders = await response.json();

    const container = document.getElementById("ordersContainer");
    container.innerHTML = "";

    if (orders.length === 0) {
      container.innerHTML = "<p>No orders found.</p>";
      return;
    }

    // orders.forEach((order) => {
    //   container.innerHTML += `
    //     <div style="border:1px solid #ccc; padding:10px; margin:10px;">
    //       <p><strong>Order ID:</strong> ${order._id}</p>
    //       <p><strong>Total Price:</strong> ₹${order.totalPrice}</p>
    //       <p><strong>Status:</strong> ${
    //         order.isDelivered ? "Delivered ✅" : "Pending ❌"
    //       }</p>
    //       <p><strong>Date:</strong> ${new Date(order.createdAt).toLocaleDateString()}</p>
    //     </div>
    //   `;
    // });
//     container.innerHTML += `
//   <div style="border:1px solid #ccc; padding:10px; margin:10px;">
//     <p><strong>Order ID:</strong> ${order._id}</p>
//     <p><strong>Total Price:</strong> ₹${order.totalPrice}</p>
//     <button onclick="viewOrder('${order._id}')">View Details</button>
//   </div>
// `;
// container.innerHTML += `
//   <div class="product-card">
//     <p><strong>Order ID:</strong> ${order._id}</p>
//     <p>Total: ₹${order.totalPrice}</p>
//     <p>Status: ${order.isDelivered ? "Delivered" : "Pending"}</p>
//     <button onclick="viewOrder('${order._id}')">View Details</button>
//   </div>
// `;
container.innerHTML += `
  <div class="product-card">
    <p><i class="fa-solid fa-box"></i> Order ID: ${order._id}</p>
    <p><i class="fa-solid fa-indian-rupee-sign"></i> ₹${order.totalPrice}</p>
    <button onclick="viewOrder('${order._id}')">
      <i class="fa-solid fa-eye"></i> View
    </button>
  </div>
`;



  } catch (error) {
    console.error(error);
    alert("Failed to load orders");
  }
}
function viewOrder(id) {
  window.location.href = `order-details.html?id=${id}`;
}


loadOrders();
