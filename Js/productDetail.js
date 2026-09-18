const productDetails = document.getElementById("productDetails");

// Get ID from URL
const urlParams = new URLSearchParams(window.location.search);

const productId = Number(urlParams.get("id"));

console.log("Selected ID:", productId);

// Fetch product details
async function getProduct() {
  try {
    const response = await fetch("data/productdetails.json");

    const products = await response.json();

    // Find selected product
    const product = products.find(function (item) {
      return item.id === productId;
    });

    console.log("Selected Product:", product);

    // Create slider images
    let sliderImages = "";

    product.imageSlider.forEach(function (image) {
      sliderImages += `
            
                <img
                    class="thumbnail"
                    src="${image.src}"
                    alt="${image.alt}"
                    onclick="changeImage('${image.src}')"
                >

            `;
    });

    // Display product
    productDetails.innerHTML = `

            <div class="product-image-section">

                <!-- Main Image -->
                <div class="main-image">

                    <img
                        id="mainImage"
                        src="${product.src}"
                        alt="${product.alt}"
                    >

                </div>


            // Small Images 
                <div class="thumbnail-container">

                    ${sliderImages}

                </div>

            </div>


            <div class="product-info">

                <p class="product-category">
                    GlowHub Beauty
                </p>

                <h1>${product.title}</h1>

                <div class="rating">

                    ⭐⭐⭐⭐⭐

                    <span>
                        ${product.rating}/5
                    </span>

                </div>


                <p class="description">
                    ${product.description}
                </p>


                <h2 class="price">
                    ${product.price}
                </h2>


                <div class="quantity">

                    <button onclick="decreaseQuantity()">   − </button>

                    <span id="quantity">    1  </span>

                    <button onclick="increaseQuantity()">    +  </button>

                </div>


                <button class="add-cart" onclick = "addToCart(${product.id})">
                    Add to Cart
                </button>


                <button class="buy-now">
                    Buy Now
                </button>

            </div>

        `;
  } catch (error) {
    console.log("Error:", error);
  }
}


function addToCart(id) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    console.log("Cart:", cart);
    console.log("Product ID:", id);

}



// Change main image
function changeImage(imageSrc) {
  document.getElementById("mainImage").src = imageSrc;
}

// Quantity
function increaseQuantity() {
  const quantity = document.getElementById("quantity");

  let value = Number(quantity.textContent);

  value++;

  quantity.textContent = value;
}

function decreaseQuantity() {
  const quantity = document.getElementById("quantity");

  let value = Number(quantity.textContent);

  if (value > 1) {
    value--;

    quantity.textContent = value;
  }
}

getProduct();
