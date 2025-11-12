// Product Data
const products = [
    // Clothes
    {
        id: 1,
        name: "Classic White T-Shirt",
        category: "clothes",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
        description: "Comfortable cotton t-shirt perfect for everyday wear"
    },
    {
        id: 2,
        name: "Denim Jacket",
        category: "clothes",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
        description: "Stylish denim jacket with a modern fit"
    },
    {
        id: 3,
        name: "Summer Dress",
        category: "clothes",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
        description: "Light and breezy summer dress in vibrant colors"
    },
    {
        id: 4,
        name: "Hooded Sweatshirt",
        category: "clothes",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
        description: "Cozy hooded sweatshirt for casual comfort"
    },
    
    // Electronics
    {
        id: 5,
        name: "Wireless Headphones",
        category: "electronics",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
        description: "Premium noise-cancelling wireless headphones"
    },
    {
        id: 6,
        name: "Smart Watch",
        category: "electronics",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
        description: "Feature-rich smartwatch with health tracking"
    },
    {
        id: 7,
        name: "Wireless Mouse",
        category: "electronics",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",
        description: "Ergonomic wireless mouse with precision tracking"
    },
    {
        id: 8,
        name: "USB-C Charger",
        category: "electronics",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=400&fit=crop",
        description: "Fast charging USB-C cable and adapter"
    },
    {
        id: 9,
        name: "Bluetooth Speaker",
        category: "electronics",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
        description: "Portable Bluetooth speaker with rich bass"
    },
    
    // Accessories
    {
        id: 10,
        name: "Leather Wallet",
        category: "accessories",
        price: 45.99,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
        description: "Genuine leather wallet with multiple card slots"
    },
    {
        id: 11,
        name: "Sunglasses",
        category: "accessories",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop",
        description: "Stylish UV protection sunglasses"
    },
    {
        id: 12,
        name: "Leather Belt",
        category: "accessories",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1624222247344-550fb60583fd?w=400&h=400&fit=crop",
        description: "Classic leather belt with adjustable buckle"
    },
    {
        id: 13,
        name: "Backpack",
        category: "accessories",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
        description: "Durable backpack with laptop compartment"
    },
    
    // Shoes
    {
        id: 14,
        name: "Running Shoes",
        category: "shoes",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
        description: "Comfortable running shoes with cushioned sole"
    },
    {
        id: 15,
        name: "Casual Sneakers",
        category: "shoes",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop",
        description: "Stylish casual sneakers for everyday wear"
    },
    {
        id: 16,
        name: "Formal Dress Shoes",
        category: "shoes",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop",
        description: "Elegant leather dress shoes for formal occasions"
    },
    {
        id: 17,
        name: "Hiking Boots",
        category: "shoes",
        price: 179.99,
        image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop",
        description: "Waterproof hiking boots for outdoor adventures"
    },
    
    // Books
    {
        id: 18,
        name: "The Art of Programming",
        category: "books",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",
        description: "Comprehensive guide to modern programming"
    },
    {
        id: 19,
        name: "Design Thinking",
        category: "books",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        description: "Learn creative problem-solving techniques"
    },
    {
        id: 20,
        name: "Business Strategy",
        category: "books",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e58f803?w=400&h=400&fit=crop",
        description: "Essential strategies for business success"
    }
];

// Cart State
let cart = [];
let currentCategory = 'all';

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    loadCart();
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderProducts();
        });
    });

    // Cart modal
    cartBtn.addEventListener('click', () => {
        cartModal.classList.add('active');
        renderCart();
    });

    closeCart.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });

    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.classList.remove('active');
        }
    });

    // Mobile menu
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Footer category links
    document.querySelectorAll('.footer-section a[data-category]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.category;
            filterButtons.forEach(btn => {
                if (btn.dataset.category === category) {
                    btn.click();
                    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                navMenu.classList.remove('active');
            }
        });
    });
}

// Render Products
function renderProducts() {
    const filteredProducts = currentCategory === 'all' 
        ? products 
        : products.filter(p => p.category === currentCategory);

    productsGrid.innerHTML = '';

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; padding: 2rem; color: var(--text-light);">No products found in this category.</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
                <span class="product-price">$${product.price.toFixed(2)}</span>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
    return card;
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartCount();
    animateCartButton();
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCart();
}

// Render Cart
function renderCart() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotal.textContent = '0.00';
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)} x ${item.quantity}</div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">&times;</button>
        `;
        cartItems.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    cartTotal.textContent = total.toFixed(2);
}

// Update Cart Count
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = count;
    if (count > 0) {
        cartCount.style.display = 'flex';
    } else {
        cartCount.style.display = 'none';
    }
}

// Animate Cart Button
function animateCartButton() {
    cartBtn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartBtn.style.transform = 'scale(1)';
    }, 200);
}

// Save Cart to LocalStorage
function saveCart() {
    localStorage.setItem('nexshop_cart', JSON.stringify(cart));
}

// Load Cart from LocalStorage
function loadCart() {
    const savedCart = localStorage.getItem('nexshop_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Checkout (placeholder)
document.querySelector('.checkout-btn')?.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert(`Thank you for your purchase! Total: $${cartTotal.textContent}`);
    cart = [];
    saveCart();
    updateCartCount();
    renderCart();
    cartModal.classList.remove('active');
});

