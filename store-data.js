// Product Database including all requested items & bundles
const products = [
    { id: 1, name: "Sticker Packs (Mystery / Themed)", category: "accessories", price: 8.00, image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&auto=format&fit=crop&q=60" },
    { id: 2, name: "Individual Custom Decal", category: "auto", price: 5.00, image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=500&auto=format&fit=crop&q=60" },
    { id: 3, name: "Custom Car Magnets", category: "auto", price: 10.00, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60" },
    { id: 4, name: "Custom Air Fresheners", category: "auto", price: 6.00, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&auto=format&fit=crop&q=60" },
    { id: 5, name: "Single-Layer Hoodie", category: "apparel", price: 42.00, image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop&q=60" },
    { id: 6, name: "Single-Layer Sweatpants", category: "apparel", price: 32.00, image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=500&auto=format&fit=crop&q=60" },
    { id: 7, name: "Single-Layer Shirt", category: "apparel", price: 22.00, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=60" },
    { id: 8, name: "Custom Decal Cup / Tumbler", category: "auto", price: 18.00, image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=60" },
    { id: 9, name: "Donkey Milk Soap Bar", category: "selfcare", price: 8.50, image: "https://images.unsplash.com/photo-1607006344380-b772462e834e?w=500&auto=format&fit=crop&q=60" },
    { id: 10, name: "Decal Keychain", category: "accessories", price: 7.00, image: "https://images.unsplash.com/photo-1629814493638-95568a356396?w=500&auto=format&fit=crop&q=60" },
    { id: 11, name: "Custom Bookmark", category: "accessories", price: 6.00, image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=60" }
];

const bundles = [
    { id: 'b1', name: "New Car Bundle", price: 20.00, desc: "1 Rear Window Decal + 2 Side Decals + 1 Matching Keychain", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60" },
    { id: 'b2', name: "Cozy & Clean Package", price: 45.00, desc: "1 Premium Hoodie + 1 Bar of Donkey Milk Soap", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop&q=60" },
    { id: 'b3', name: "Reader's Pack", price: 22.00, desc: "1 Custom Bookmark + 1 Custom Coffee Mug / Cup", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=60" },
    { id: 'b4', name: "Workout Package", price: 70.00, desc: "1 Hoodie + 1 Sweatpants + 1 Custom Water Bottle", image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=500&auto=format&fit=crop&q=60" }
];

// Cart State Management
let cart = JSON.parse(localStorage.getItem('just_one_layer_cart')) || [];

function saveCart() {
    localStorage.setItem('just_one_layer_cart', JSON.stringify(cart));
    updateCartBadge();
    if (document.getElementById('cart-items')) renderCart();
}

function addToCart(name, price) {
    const existing = cart.find(item => item.name === name);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ name, price, qty: 1 });
    }
    saveCart();
    showToast(`Added ${name} to cart!`);
}

function updateQty(name, change) {
    const item = cart.find(i => i.name === name);
    if (item) {
        item.qty += change;
        if (item.qty <= 0) {
            cart = cart.filter(i => i.name !== name);
        }
    }
    saveCart();
}

function clearCart() {
    cart = [];
    saveCart();
}

function updateCartBadge() {
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    document.querySelectorAll('#cart-badge').forEach(badge => {
        badge.textContent = totalQty;
    });
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-5 right-5 z-50 glass bg-sky-500/90 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-2xl transition transform translate-y-0 opacity-100 flex items-center space-x-2';
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i><span>${message}</span>`;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// Render Shop Catalog (Only runs on shop.html)
function renderProducts(filter = 'all') {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    
    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
    
    grid.innerHTML = filtered.map(p => `
        <div class="glass rounded-2xl overflow-hidden border border-slate-700/60 hover:border-sky-500/50 transition duration-300 flex flex-col group">
            <div class="h-56 overflow-hidden relative">
                <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                <span class="absolute top-3 right-3 bg-slate-900/80 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-sky-400 uppercase tracking-wider">${p.category}</span>
            </div>
            <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-lg font-bold text-white mb-2">${p.name}</h3>
                <div class="mt-auto flex items-center justify-between pt-4 border-t border-slate-800">
                    <span class="text-xl font-extrabold text-sky-400">$${p.price.toFixed(2)}</span>
                    <button onclick="addToCart('${p.name.replace(/'/g, "\\'")}', ${p.price})" class="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition shadow">
                        <i class="fa-solid fa-plus mr-1"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderBundles() {
    const grid = document.getElementById('bundle-grid');
    if (!grid) return;
    
    grid.innerHTML = bundles.map(b => `
        <div class="glass rounded-2xl overflow-hidden border border-sky-500/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
            <img src="${b.image}" alt="${b.name}" class="w-full sm:w-40 h-40 object-cover rounded-xl border border-slate-700">
            <div class="flex-grow text-center sm:text-left">
                <span class="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full">Curated Deal</span>
                <h3 class="text-xl font-bold text-white mt-2 mb-1">${b.name}</h3>
                <p class="text-slate-300 text-sm mb-4">${b.desc}</p>
                <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span class="text-2xl font-black text-sky-400">$${b.price.toFixed(2)}</span>
                    <button onclick="addToCart('${b.name.replace(/'/g, "\\'")}', ${b.price})" class="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-sm shadow hover:opacity-90 transition">
                        Get Bundle
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderCart() {
    const container = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `<p class="text-slate-400 text-center py-6">Your cart is currently empty.</p>`;
        totalEl.textContent = "$0.00";
        return;
    }

    let total = 0;
    container.innerHTML = cart.map(item => {
        const subtotal = item.price * item.qty;
        total += subtotal;
        return `
            <div class="py-4 flex items-center justify-between">
                <div>
                    <h4 class="font-bold text-white">${item.name}</h4>
                    <span class="text-xs text-slate-400">$${item.price.toFixed(2)} each</span>
                </div>
                <div class="flex items-center space-x-3">
                    <div class="flex items-center space-x-2 bg-slate-800 px-3 py-1 rounded-lg border border-slate-700">
                        <button onclick="updateQty('${item.name.replace(/'/g, "\\'")}', -1)" class="text-slate-400 hover:text-white">-</button>
                        <span class="text-sm font-bold text-white">${item.qty}</span>
                        <button onclick="updateQty('${item.name.replace(/'/g, "\\'")}', 1)" class="text-slate-400 hover:text-white">+</button>
                    </div>
                    <span class="font-bold text-sky-400 w-16 text-right">$${subtotal.toFixed(2)}</span>
                </div>
            </div>
        `;
    }).join('');

    totalEl.textContent = `$${total.toFixed(2)}`;
}

function filterProducts(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('bg-sky-500', 'text-slate-950');
        btn.classList.add('glass', 'text-slate-300');
    });
    event.target.classList.remove('glass', 'text-slate-300');
    event.target.classList.add('bg-sky-500', 'text-slate-950');
    renderProducts(category);
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    const modal = document.getElementById('checkout-modal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function closeCheckoutModal() {
    const modal = document.getElementById('checkout-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

function submitOrder(event) {
    event.preventDefault();
    
    const name = document.getElementById('cust-name').value;
    const email = document.getElementById('cust-email').value;
    const address = document.getElementById('cust-address').value;

    let total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const storeEmail = "joshua@justonelayer.com"; // Change to your business email
    const subject = encodeURIComponent(`New Order from ${name} - Just One Layer`);
    const body = encodeURIComponent(
        `New Order Details:\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Shipping Address / Notes:\n${address}\n\n` +
        `Items:\n` + cart.map(item => `${item.qty}x ${item.name} ($${(item.price * item.qty).toFixed(2)})`).join('\n') + `\n\n` +
        `Total: $${total.toFixed(2)}`
    );

    window.location.href = `mailto:${storeEmail}?subject=${subject}&body=${body}`;

    clearCart();
    closeCheckoutModal();
    alert("Thank you! Your order summary has been prepared in your email client. Send the email to complete your order placement!");
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    if (document.getElementById('product-grid')) {
        renderProducts('all');
        renderBundles();
    }
    if (document.getElementById('cart-items')) {
        renderCart();
    }
});
