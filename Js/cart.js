const cartItems = document.getElementById("cartItems");

const subtotal = document.getElementById("subtotal");

const total = document.getElementById("total");


// Get cart from Local Storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];


// Display Cart
function displayCart() {

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">
                <h2>Your Cart is Empty</h2>

                <p>
                    You haven't added any products yet.
                </p>

                <a href="products.html">
                    Continue Shopping
                </a>
            </div>
        `;

        subtotal.textContent = "$0";
        total.textContent = "$0";

        return;
    }


    cart.forEach(function(product) {

        cartItems.innerHTML += `

            <div class="cart-item">

                <img 
                    src="${product.src}" 
                    alt="${product.title}"
                >

                <div class="cart-info">

                    <h2>${product.title}</h2>

                    <p>${product.price}</p>

                    <div class="quantity">

                        <button 
                            onclick="decreaseQuantity(${product.id})">
                            −
                        </button>

                        <span>
                            ${product.quantity}
                        </span>

                        <button 
                            onclick="increaseQuantity(${product.id})">
                            +
                        </button>

                    </div>

                    <button 
                        class="remove-btn"
                        onclick="removeFromCart(${product.id})">
                        Remove
                    </button>

                </div>

            </div>

        `;
    });


    calculateTotal();
}


// Increase Quantity
function increaseQuantity(id) {

    const product = cart.find(function(item) {
        return item.id === id;
    });

    if (product) {

        product.quantity++;

        saveCart();

        displayCart();
    }
}


// Decrease Quantity
function decreaseQuantity(id) {

    const product = cart.find(function(item) {
        return item.id === id;
    });

    if (product && product.quantity > 1) {

        product.quantity--;

        saveCart();

        displayCart();
    }
}


// Remove Product
function removeFromCart(id) {

    cart = cart.filter(function(product) {
        return product.id !== id;
    });

    saveCart();

    displayCart();
}


// Save Cart
function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
}


// Calculate Total
function calculateTotal() {

    let subtotalValue = 0;


    cart.forEach(function(product) {

        const price = Number(
            product.price.replace("$", "")
        );

        subtotalValue += price * product.quantity;
    });


    subtotal.textContent = `$${subtotalValue}`;

    total.textContent = `$${subtotalValue}`;
}

const checkoutBtn = document.getElementById("checkoutBtn");

checkoutBtn.addEventListener("click", function () {

    // Get cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if cart is empty
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Go to checkout page
    window.location.href = "checkout.html";
});


// Display cart when page loads
displayCart();