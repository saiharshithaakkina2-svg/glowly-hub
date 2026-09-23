#  GlowHub - Beauty E-Commerce Website

GlowHub is a beginner-friendly beauty e-commerce website built using **HTML, CSS, JavaScript, and JSON**.

The project is created to practice frontend development concepts by building a real-world style e-commerce website.

##  Technologies Used

* HTML5
* CSS3
* JavaScript
* JSON
* Fetch API
* Local Storage
* Git & GitHub

## ✨ Features

*  Home page
*  Product listing
* Product details page
*  Product image gallery
* Product ratings
*  Product descriptions
*  Product pricing
*  Quantity increase/decrease
*  Add to Cart functionality
*  Local Storage for cart data
*  Responsive design

## 📂 Project Structure

```text
GlowHub/
│
├── index.html
├── products.html
├── product-detail.html
├── cart.html
│
├── products.css
├── product-detail.css
├── cart.css
│
├── data/
│   ├── allproducts.json
│   └── productdetails.json
│
├── Js/
│   ├── fetchAllProducts.js
│   ├── productDetail.js
│   └── cart.js
│
└── assets/
    ├── lipstick/
    ├── foundation/
    ├── moisturizer/
    └── serem/
```

##  Product Listing

Products are loaded from the JSON file using the JavaScript **Fetch API**.

```text
allproducts.json
       ↓
   Fetch API
       ↓
   JavaScript
       ↓
 Product Cards
```

Each product card displays:

* Product image
* Product name
* Description
* Price

##  Product Details

When a user clicks on a product, the product ID is passed through the URL.

Example:

```text
product-detail.html?id=3
```

JavaScript gets the product ID from the URL and finds the matching product from `productdetails.json`.

## 🖼️ Product Image Gallery

The product details page includes:

* Main product image
* Thumbnail images
* Image switching functionality

Clicking a thumbnail changes the main product image.

## 🛒 Shopping Cart

The cart functionality uses **JavaScript and Local Storage**.

```text
Product Details
       ↓
  Add to Cart
       ↓
 Local Storage
       ↓
   Cart Page
       ↓
 Display Product
```

## 🔢 Quantity Management

Users can increase or decrease the product quantity.

```text
[ − ]   1   [ + ]
```

The quantity cannot go below `1`.

## 📱 Responsive Design

The website is designed to work across:

* 💻 Desktop
* 📱 Mobile

CSS media queries are used to make the layout responsive.



## 🔄 Data Flow

```text
JSON
 ↓
Fetch API
 ↓
JavaScript
 ↓
Find Product
 ↓
DOM Manipulation
 ↓
Display Product
```



## 👩‍💻 Learning Project

GlowHub is a learning project created as part of my frontend development journey.

I am building this project step by step while learning **HTML, CSS, JavaScript, Fetch API, JSON, DOM manipulation, Local Storage, GitHub**.

> This project is for learning purposes and does not process real payments or real orders.











<img width="363" height="386" alt="Screenshot 2026-09-19 204610" src="https://github.com/user-attachments/assets/78c0ae38-f60e-4dcc-9556-9749a88af1aa" />
<img width="360" height="245" alt="Screenshot 2026-09-19 204625" src="https://github.com/user-attachments/assets/1afa0efa-efd4-4c04-a0e1-82a999f3487b" />
<img width="843" height="371" alt="Screenshot 2026-09-21 213400" src="https://github.com/user-attachments/assets/a6d73b5f-4817-444d-bd96-7676cd30355a" />
<img width="842" height="413" alt="Screenshot 2026-09-21 213419" src="https://github.com/user-attachments/assets/0bc1d32f-92e8-4697-a0b6-7a694c84fcbe" />
