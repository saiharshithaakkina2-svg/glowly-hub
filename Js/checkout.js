
const checkoutItems = document.getElementById("checkoutItems");
const checkoutTotal = document.getElementById("checkoutTotal");

const checkoutForm = document.getElementById("checkoutForm");

const orderMessage = document.getElementById("orderMessage");
const checkoutLayout = document.getElementById("checkoutLayout");

const checkoutHeading = document.querySelector(
    ".checkout-container > h1"
);




// Get cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];


// =========================
// DISPLAY ORDER SUMMARY
// =========================

function displayCheckout() {

    checkoutItems.innerHTML = "";

    if (cart.length === 0) {

        checkoutItems.innerHTML = `
            <p>Your cart is empty.</p>

            <a href="products.html">
                Continue Shopping
            </a>
        `;

        checkoutTotal.textContent = "$0";

        return;
    }


    let total = 0;


    cart.forEach(function(product) {

        const price = Number(
            product.price.replace("$", "")
        );

        const productTotal =
            price * product.quantity;

        total += productTotal;


        checkoutItems.innerHTML += `

            <div class="checkout-item">

                <img
                    src="${product.src}"
                    alt="${product.title}"
                >

                <div>

                    <h3>
                        ${product.title}
                    </h3>

                    <p>
                        Price: ${product.price}
                    </p>

                    <p>
                        Quantity: ${product.quantity}
                    </p>

                    <p>
                        Total: $${productTotal}
                    </p>

                </div>

            </div>

        `;
    });


    checkoutTotal.textContent = `$${total}`;
}


// =========================
// FORM VALIDATION
// =========================

checkoutForm.addEventListener("submit", function(event) {

    event.preventDefault();


    // Get values
    const name =
        document.getElementById("name").value.trim();

    const address =
        document.getElementById("address").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const payment =
        document.getElementById("payment").value;


    // Error elements
    const nameError =
        document.getElementById("nameError");

    const addressError =
        document.getElementById("addressError");

    const emailError =
        document.getElementById("emailError");

    const paymentError =
        document.getElementById("paymentError");


    // Clear previous errors
    nameError.textContent = "";
    addressError.textContent = "";
    emailError.textContent = "";
    paymentError.textContent = "";


    let isValid = true;


    // Name validation
    if (name === "") {

        nameError.textContent =
            "Name is required";

        isValid = false;
    }


    // Address validation
    if (address === "") {

        addressError.textContent =
            "Address is required";

        isValid = false;
    }


    // Email validation
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "") {

        emailError.textContent =
            "Email is required";

        isValid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Enter a valid email";

        isValid = false;
    }


    // Payment validation
    if (payment === "") {

        paymentError.textContent =
            "Please select a payment method";

        isValid = false;
    }


    // Stop if validation fails
    if (!isValid) {
        return;
    }


    // Check cart
    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }


    // =========================
    // ORDER SUCCESS
    // =========================

    localStorage.removeItem("cart");

    cart = [];


    // Hide form
// Hide the customer form and order summary
checkoutLayout.style.display = "none";

// Hide the Checkout heading
checkoutHeading.style.display = "none";

// Show only the order confirmation
orderMessage.style.display = "block";

    // Show confirmation

orderMessage.innerHTML = `

    <div class="order-success">

        <div class="success-icon">
            ✓
        </div>

        <h2>
            Order Confirmed Successfully!
        </h2>


            <div class="customer-details">

            <h3>
                Customer Details
            </h3>

            <p>
                <strong>Name:</strong>
                ${name}
            </p>

            <p>
                <strong>Email:</strong>
                ${email}
            </p>

            <p>
                <strong>Address:</strong>
                ${address}
            </p>

            <p>
                <strong>Payment Method:</strong>
                ${payment}
            </p>

        </div>
        


        <p>
            Thank you for shopping with GlowHub.
        </p>

        <p>
            Your order has been placed successfully.
        </p>


        <a href="products.html">
            Continue Shopping
        </a>

    </div>

`;


});


// Display products
displayCheckout();
