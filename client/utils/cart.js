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

//   cart.items.forEach((item) => {
//     container.innerHTML += `
//       <div>
//         <h3>${item.product.name}</h3>
//         <p>Qty: ${item.quantity}</p>
//       </div>
//     `;
//   });
// }
cart.forEach((item, index) => {
  table.innerHTML += `
    <tr>
      <td>
        <input type="checkbox" class="select-product" data-index="${index}">
      </td>
      <td>${item.name}</td>
      <td>₹ ${item.price}</td>
      <td>${item.quantity}</td>
      <td>₹ ${item.price * item.quantity}</td>
    </tr>
  `;
});

loadCart();
