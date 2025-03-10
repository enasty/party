let cart = [];
const stripe = Stripe('YOUR_STRIPE_PUBLIC_KEY');

function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    let total = 0;
    cartList.innerHTML = "";
    cart.forEach(item => {
        total += item.price;
        let listItem = document.createElement("li");
        listItem.textContent = `${item.product} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
    });
    document.getElementById("cart-total").textContent = total.toFixed(2);
    document.getElementById("cart-count").textContent = cart.length;
}

function checkout() {
    alert("Thank you for your purchase! Checkout system coming soon.");
    cart = [];
    updateCart();
}
