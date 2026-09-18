const productsContainer = document.getElementById("fetchAllProducts");


async function fetchProducts() {

    try {

        const response = await fetch("data/allproducts.json");

        const products = await response.json();

        products.map(function(product) {

            productsContainer.innerHTML += `
                <div class="product-card" data-id = "${product.id}">

                    <div class="product-image">
                        <img src="${product.imgUrl}" alt="${product.name}">
                    </div>

                    <div class="product-content">

                        <h2>${product.name}</h2>

                        <p>${product.description}</p>

                        <h3>${product.value}</h3>

                    </div>

                </div>
            `;

        });

        // get all products cards
    // Get all product cards
        const productCards =
            document.querySelectorAll(".product-card");


        // Add click event to every card
        productCards.forEach(function(card) {

            card.addEventListener("click", function() {

                // Get product ID
                const id = card.dataset.id;


                // Go to product detail page
                window.location.href =
                    `product-detail.html?id=${id}`;

            });

        });

    } catch (error) {

        console.log("Error:", error);

    }
}





fetchProducts();