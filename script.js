let cartCount = 0;

function addToCart(productName) {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
  alert(`${productName} added to cart!`);
}

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");

  // Close dropdown when menu toggles
  document.getElementById("shopDropdown").classList.remove("show-dropdown");
}

function toggleDropdown() {
  const dropdown = document.getElementById("shopDropdown");
  dropdown.classList.toggle("show-dropdown");
}

// Close dropdown if clicked outside
document.addEventListener("click", function (e) {
  const dropdown = document.getElementById("shopDropdown");
  const shopLink = e.target.closest(".dropdown a");

  if (!shopLink && !e.target.closest("#shopDropdown")) {
    dropdown.classList.remove("show-dropdown");
  }
});

function openCart() {
  document.getElementById('cart-panel').classList.remove('hidden');
}

function closeCart() {
  document.getElementById('cart-panel').classList.add('hidden');
}
