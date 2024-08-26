const cartItemsContainer = document.querySelector(".cart-items-container");
const cartTotal = document.querySelector("#cart-total");

const products = [
  {
    img: "",
    title: "Head Phones",
    price: 150,
    quantity: 3,
  },
  {
    img: "",
    title: "Head Phones",
    price: 150,
    quantity: 3,
  },
  {
    img: "",
    title: "Mouse",
    price: 150,
    quantity: 3,
  },
  {
    img: "",
    title: "Airpods",
    price: 150,
    quantity: 3,
  },
  {
    img: "",
    title: "Cable",
    price: 150,
    quantity: 0,
  },
  {
    img: "",
    title: "Keyboard",
    price: 150,
    quantity: 3,
  },
  {
    img: "",
    title: "Cable",
    price: 150,
    quantity: 3,
  },
  {
    img: "",
    title: "Printer",
    price: 150,
    quantity: 3,
  },
];

for (let item of products) {
  const product = document.createElement("div");
  product.innerHTML = `
  <div class="product-container">
    <div class="product-info">
      <img src=${item.img}>
      <p>${item.title}</p>
      <p>$${item.price}.00</p>
    </div>
    <div class="product-details">
      <form>
      <input type="number" value=${item.quantity} min=0>
      </form>
      <button class="remove-item">Remove</button>
    </div>
</div>
  `;
  cartItemsContainer.appendChild(product);
}

function totalAmount() {
  // const prod = JSON.parse(localStorage.getItem("card"))| [];

  const total = products.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  );

  cartTotal.textContent = `Total : $${total}.00`;
}

totalAmount();
