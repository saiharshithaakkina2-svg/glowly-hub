const cartItems = document.getElementById("cartItems");

const subtotal = document.getElementById("subtotal");

const total = document.getElementById("total");

console.log(cartItems);
console.log(subtotal);
console.log(total);

let cart = JSON.parse(localStorage.getItem("cart")) || [];

console.log("Cart:", cart);

function displayCart() {

    cartItems.innerHTML = "";

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

                        <button>−</button>

                        <span>${product.quantity}</span>

                        <button>+</button>

                    </div>

                </div>

            </div>

        `;
    });
}

displayCart();