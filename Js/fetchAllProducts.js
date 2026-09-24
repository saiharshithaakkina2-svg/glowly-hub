const productsContainer = document.getElementById("fetchAllProducts");
const searchContainer = document.getElementById("search");
const dropdownbtn = document.getElementById("dropdownbtn");
const dropdownmenu = document.getElementById("dropdownmenu")
const lowToHigh = document.getElementById("lowToHigh");
const highToLow = document.getElementById("highToLow");
const errorMessage = document.getElementById("errorMessage");

let allProducts = [];
let sortOrder = "default";


// STEP 1: Fetch all products

async function fetchProducts() {

    try {

        const response = await fetch("data/allproducts.json");

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const products = await response.json();

        if (!Array.isArray(products)) {
            throw new Error("Invalid product data");
        }

        allProducts = products;

        displayProducts(allProducts);

    } catch (error) {

        console.log("Error:", error);

        errorMessage.textContent =
            "Unable to load products. Please try again.";
    }

}


// STEP 2: Display products

function displayProducts(products) {

    productsContainer.innerHTML = "";

    if (products.length === 0) {

        errorMessage.textContent =
            "No matching products found.";

        return;

    }

    errorMessage.textContent = "";

    products.forEach(function(product) {

        productsContainer.innerHTML += `

            <div class="product-card" data-id="${product.id}">

                <div class="product-image">

                    <img
                        src="${product.imgUrl}"
                        alt="${product.name}"
                    >

                </div>

                <div class="product-content">

                    <h2 class="product-name">
                        ${product.name}
                    </h2>

                    <p>${product.description}</p>

                    <h3>${product.value}</h3>

                </div>

            </div>

        `;

    });

}


// STEP 3: Convert price to a number

function getPrice(product) {

    return Number(
        String(product.value).replace(/[^0-9.-]/g, "")
    );

}


// STEP 4: Search and filter products

function filterProducts() {

    try {

        const searchText =
            searchContainer.value.trim().toLowerCase();

        let filteredProducts = allProducts.filter(
            function(product) {

                if (typeof product.name !== "string") {
                    throw new Error("Product name is missing");
                }

                return product.name
                    .toLowerCase()
                    .includes(searchText);

            }
        );


        // Apply selected sorting

        if (sortOrder === "low") {

            filteredProducts.sort(function(a, b) {
                return getPrice(a) - getPrice(b);
            });

        } else if (sortOrder === "high") {

            filteredProducts.sort(function(a, b) {
                return getPrice(b) - getPrice(a);
            });

        }


        displayProducts(filteredProducts);

    } catch (error) {

        console.log("Search Error:", error);

        errorMessage.textContent =
            "Something went wrong while searching.";

    }

}


// STEP 5: Search event

searchContainer.addEventListener("input", function() {

    filterProducts();

});


// STEP 6: Open and close dropdown

dropdownbtn.addEventListener("click", function() {

    dropdownmenu.classList.toggle("show");

});


// STEP 7: Sort price from low to high

lowToHigh.addEventListener("click", function() {

    sortOrder = "low";

    filterProducts();

    dropdownmenu.classList.remove("show");

    dropdownbtn.textContent = "Price: Low to High ▼";

});


// STEP 8: Sort price from high to low

highToLow.addEventListener("click", function() {

    sortOrder = "high";

    filterProducts();

    dropdownmenu.classList.remove("show");

    dropdownbtn.textContent = "Price: High to Low ▼";

});


// STEP 9: Navigate to product details

productsContainer.addEventListener("click", function(event) {

    const card = event.target.closest(".product-card");

    if (!card) {
        return;
    }

    const id = card.dataset.id;

    window.location.href = `product-detail.html?id=${id}`;

});


// STEP 10: Fetch products when the page loads

fetchProducts();