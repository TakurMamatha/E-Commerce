const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "../auth/login.html";
}

function addProduct() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const image = document.getElementById("image").value;
  const category = document.getElementById("category").value;

  fetch("http://localhost:5000/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    },
    body: JSON.stringify({ name, price, image, category })
  })
  .then(res => res.json())
  .then(data => {
    alert("Product Added Successfully!");
  })
  .catch(err => console.error(err));
}
