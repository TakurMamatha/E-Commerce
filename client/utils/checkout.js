// async function placeOrder() {
//   const token = localStorage.getItem("token");

//   await fetch("http://localhost:5000/api/orders", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   alert("Order placed successfully!");
// }

async function placeOrder() {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (!userInfo) {
        alert("Please login first");
        window.location.href = "login.html";
        return;
    }

    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }

    const orderData = {
        orderItems: cart,
        shippingAddress: {
            address: "North Hyderabad",
            city: "Hyderabad",
            postalCode: "500001",
            country: "India"
        },
        paymentMethod: "Cash on Delivery",
        totalPrice: cart.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        )
    };

    try {
        const response = await fetch("http://localhost:5000/api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${userInfo.token}`
            },
            body: JSON.stringify(orderData)
        });

        const data = await response.json();

        if (response.ok) {
            alert("Order placed successfully ✅");

            localStorage.removeItem("cart");
            window.location.href = "orders.html";
        } else {
            alert(data.message || "Error placing order");
        }

    } catch (error) {
        console.error(error);
        alert("Server error");
    }
}