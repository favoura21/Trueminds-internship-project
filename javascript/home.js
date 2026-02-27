// ADD TO CART
const cartButtons = document.querySelectorAll(".cart-btn");

cartButtons.forEach(button => {
  button.addEventListener("click", () => {
    alert("Item added to cart!");
  });
});
