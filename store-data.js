// Just One Layer - Store Database & Configuration
const STORE_CONFIG = {
    businessName: "Just One Layer",
    supportEmail: "just1lay2026@gmail.com",
    contacts: {
        joshua: "(225) 364-6231",
        elise: "(225) 955-9585"
    }
};

const CATEGORIES = [
    { id: "decals", name: "Decals & Stickers", description: "Custom vinyl decals up to 2 ft long & 1 ft wide." },
    { id: "apparel", name: "Apparel & Gym Rat", description: "Shirts, pants, and bundles with max 8.5x11 in prints." },
    { id: "drinkware", name: "Drinkware", description: "Tumblers and glass cups (Coffee mugs sold out)." },
    { id: "soap", name: "Handmade Goods", description: "Nourishing artisanal donkey milk soaps." },
    { id: "coming-soon", name: "Coming Soon", description: "Upcoming products currently in development." }
];

const PRODUCTS = [
    // --- DECALS & STICKERS ---
    {
        id: "decal-custom",
        category: "decals",
        name: "Custom Vinyl Decal",
        description: "High-grade outdoor vinyl decal. Max dimensions: 2 feet long by 1 foot wide. Price varies by size.",
        basePrice: 5.00,
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
        inStock: true,
        options: {
            sizes: [
                { name: 'Small (up to 6" x 3")', priceModifier: 0.00 },
                { name: 'Medium (up to 12" x 6")', priceModifier: 7.00 },
                { name: 'Large (up to 24" x 12" - Max Size)', priceModifier: 18.00 }
            ],
            finishes: ["Glossy", "Matte"]
        }
    },

    // --- APPAREL ---
    {
        id: "shirt-custom",
        category: "apparel",
        name: "Custom Graphic Tee / Shirt",
        description: "Comfortable apparel featuring custom prints up to 8.5 x 11 inches. Price varies by garment size.",
        basePrice: 18.00,
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=600",
        inStock: true,
        options: {
            sizes: [
                { name: "Small - XL", priceModifier: 0.00 },
                { name: "2XL - 3XL", priceModifier: 4.00 }
            ],
            colors: ["Black", "White", "Navy", "Heather Grey"]
        }
    },
    {
        id: "pants-custom",
        category: "apparel",
        name: "Custom Lounge / Sweatpants",
        description: "Cozy pants with custom branding/prints up to 8.5 x 11 inches. Price varies by size.",
        basePrice: 25.00,
        image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&q=80&w=600",
        inStock: true,
        options: {
            sizes: [
                { name: "Small - XL", priceModifier: 0.00 },
                { name: "2XL - 3XL", priceModifier: 5.00 }
            ],
            colors: ["Black", "Grey", "Navy"]
        }
    },
    {
        id: "gym-rat-package",
        category: "apparel",
        name: "Gym Rat Package",
        description: "The ultimate workout bundle: includes custom apparel (max 8.5x11 print) and a motivational decal set. Price scales with apparel sizing.",
        basePrice: 35.00,
        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600",
        inStock: true,
        options: {
            sizes: [
                { name: "Standard Bundle (S-XL)", priceModifier: 0.00 },
                { name: "Extended Bundle (2XL-3XL)", priceModifier: 5.00 }
            ]
        }
    },

    // --- DRINKWARE ---
    {
        id: "mug-coffee",
        category: "drinkware",
        name: "Classic Coffee Mug",
        description: "Ceramic coffee mugs.",
        basePrice: 12.00,
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600",
        inStock: false,
        badge: "Sold Out"
    },
    {
        id: "tumbler-insulated",
        category: "drinkware",
        name: "Stainless Steel Tumbler",
        description: "Double-wall vacuum insulated tumbler to keep drinks ice cold or piping hot. Price varies by capacity.",
        basePrice: 22.00,
        image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=600",
        inStock: true,
        options: {
            sizes: [
                { name: "20 oz Tumbler", priceModifier: 0.00 },
                { name: "30 oz Tumbler", priceModifier: 6.00 }
            ]
        }
    },
    {
        id: "glass-cup",
        category: "drinkware",
        name: "Glass Can Tumbler",
        description: "Trendy 16oz glass cup with bamboo lid and glass straw option.",
        basePrice: 15.00,
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=600",
        inStock: true,
        options: {
            styles: ["Clear Glass", "Frosted Glass"]
        }
    },

    // --- HANDMADE GOODS ---
    {
        id: "soap-donkey-milk",
        category: "soap",
        name: "Handmade Donkey Milk Soap",
        description: "Deeply moisturizing artisanal soap crafted with rich donkey milk for sensitive skin.",
        basePrice: 8.00,
        image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&q=80&w=600",
        inStock: true,
        options: {
            scents: ["Unscented Gentle", "Lavender Vanilla", "Oatmeal Honey"]
        }
    },

    // --- COMING SOON ---
    {
        id: "air-freshener-custom",
        category: "coming-soon",
        name: "Custom Car Air Freshener",
        description: "Personalized hanging air fresheners for your vehicle. Coming soon!",
        basePrice: 6.00,
        image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=600",
        inStock: false,
        badge: "Coming Soon"
    },
    {
        id: "car-magnet-custom",
        category: "coming-soon",
        name: "Custom Car Magnet",
        description: "Durable, weather-resistant magnetic signs for vehicles. Coming soon!",
        basePrice: 14.00,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600",
        inStock: false,
        badge: "Coming Soon"
    }
];
