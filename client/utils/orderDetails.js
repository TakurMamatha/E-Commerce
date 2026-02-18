const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "../auth/login.html";
}

const params = new URLSearchParams(window.location.search);
const orderId = params.get("id");

async function loadOrderDetails() {
  try {
    const response = await fetch(
      `http://localhost:5000/api/orders/${orderId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const order = await response.json();

    const container = document.getElementById("orderDetails");

    container.innerHTML = `
      <p><strong>Order ID:</strong> ${order._id}</p>
      <p><strong>Total Price:</strong> ₹${order.totalPrice}</p>
      <p><strong>Payment Method:</strong> ${order.paymentMethod}</p>
      <p><strong>Shipping Address:</strong> 
        ${order.shippingAddress.address}, 
        ${order.shippingAddress.city}, 
        ${order.shippingAddress.postalCode}
      </p>
      <h3>Items:</h3>
      ${order.orderItems
        .map(
          (item) => `
          <div>
            <p>${item.name}</p>
            <p>Qty: ${item.qty}</p>
            <p>Price: ₹${item.price}</p>
          </div>
        `
        )
        .join("")}
    `;
  } catch (error) {
    console.error(error);
  }
}

loadOrderDetails();
