async function placeOrder() {
  const token = localStorage.getItem("token");

  await fetch("http://localhost:5000/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  alert("Order placed successfully!");
}

