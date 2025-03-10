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
    fetch('/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart })
    }).then(res => res.json()).then(session => {
        return stripe.redirectToCheckout({ sessionId: session.id });
    }).catch(err => console.error(err));
}

function viewOrders() {
    document.getElementById("admin-content").innerHTML = "<p>Fetching orders...</p>";
}

function updateStock() {
    document.getElementById("admin-content").innerHTML = "<p>Updating stock...</p>";
}

// AI-generated product descriptions
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".ai-description").forEach(desc => {
        desc.textContent = "AI is generating a description...";
        setTimeout(() => {
            desc.textContent = "This product is designed for high-end parties and entertainment. Featuring cutting-edge technology, it's the perfect addition to any event.";
        }, 2000);
    });
});
