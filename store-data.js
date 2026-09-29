// Just One Layer - Store Database & Configuration
const STORE_CONFIG = {
    businessName: "Just One Layer",
    supportEmail: "just1lay2026@gmail.com",
    baseLocation: "Walker, LA",
    freeShippingThreshold: 30.00,
    localRadiusMiles: 50,
    contacts: {
        joshua: "(225) 364-6231",
        elise: "(225) 955-9585"
    }
};

const CATEGORIES = [
    { id: "decals", name: "Decals & Stickers", description: "Custom vinyl decals up to 2 ft long & 1 ft wide." },
    { id: "apparel", name: "Apparel & Gym Rat", description: "Shirts, pants, bundles, and accessories." },
    { id: "drinkware", name: "Drinkware", description: "Tumblers, glass cups, and water bottles." },
    { id: "accessories", name: "Accessories & Keychains", description: "Customizable vintage-style hotel keychains." },
    { id: "soap", name: "Handmade Goods", description: "Nourishing artisanal donkey milk soaps." },
    { id: "coming-soon", name: "Coming Soon", description: "Upcoming products currently in development." }
];

const PRODUCTS = [
    {
        id: "decal-custom",
        category: "decals",
        name: "Custom Vinyl Decal",
        description: "High-grade outdoor vinyl decal. Max dimensions: 2 feet long by 1 foot wide. Price varies by size.",
        basePrice: 5.00,
        image: "decal.jpg",
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
    {
        id: "shirt-custom",
        category: "apparel",
        name: "Custom Graphic Tee / Shirt",
        description: "Comfortable apparel featuring custom prints up to 8.5 x 11 inches. Price varies by garment size.",
        basePrice: 18.00,
        image: "shirt.jpg",
        inStock: true,
        options: {
            sizes: [
                { name: "Small - XL", priceModifier: 0.00 },
                { name: "2XL - 3XL", priceModifier: 4.00 }
            ],
            colors: ["Black", "White", "Red", "Grey"]
        }
    },
    {
        id: "pants-custom",
        category: "apparel",
        name: "Custom Lounge / Sweatpants",
        description: "Cozy pants with custom branding/prints up to 8.5 x 11 inches. Price varies by size.",
        basePrice: 25.00,
        image: "sweatpants.jpg",
        inStock: true,
        options: {
            sizes: [
                { name: "Small - XL", priceModifier: 0.00 },
                { name: "2XL - 3XL", priceModifier: 5.00 }
            ],
            colors: ["Black", "Red", "Grey"]
        }
    },
    {
        id: "gym-rat-package",
        category: "apparel",
        name: "Gym Rat Package",
        description: "The ultimate workout bundle: includes 1x Custom Sweatshirt, 1x Custom Sweatpants, and 1x Custom Water Bottle. Max print size 8.5x11.",
        basePrice: 55.00,
        image: "gym-rat-bundle.jpg",
        inStock: true,
        options: {
            sizes: [
                { name: "Standard Bundle (S-XL)", priceModifier: 0.00 },
                { name: "Extended Bundle (2XL-3XL)", priceModifier: 8.00 }
            ],
            colors: ["Black", "Red", "Grey"]
        }
    },
    {
        id: "keychain-hotel-rhombus",
        category: "accessories",
        name: "Vintage Style Hotel Rhombus Keychain",
        description: "Classic retro rhombus hotel keychain. Put your own custom words, numbers, or design on it!",
        basePrice: 10.00,
        image: "hotel-keychain.jpg",
        inStock: true,
        options: {
            colors: ["Classic Black", "Retro White", "Vibrant Red"]
        }
    },
    {
        id: "mug-coffee",
        category: "drinkware",
        name: "Classic Coffee Mug",
        description: "Ceramic coffee mugs.",
        basePrice: 12.00,
        image: "coffee-mug.jpg",
        inStock: false,
        badge: "Sold Out"
    },
    {
        id: "tumbler-insulated",
        category: "drinkware",
        name: "Stainless Steel Tumbler",
        description: "Double-wall vacuum insulated tumbler to keep drinks ice cold or piping hot. Price varies by capacity.",
        basePrice: 22.00,
        image: "tumbler.jpg",
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
        image: "glass-cup.jpg",
        inStock: true,
        options: {
            styles: ["Clear Glass", "Frosted Glass"]
        }
    },
    {
        id: "soap-donkey-milk",
        category: "soap",
        name: "Handmade Donkey Milk Soap",
        description: "Deeply moisturizing artisanal soap crafted with rich donkey milk for sensitive skin.",
        basePrice: 8.00,
        image: "soap.jpg",
        inStock: true,
        options: {
            scents: ["Unscented Gentle", "Lavender Vanilla", "Oatmeal Honey"]
        }
    },
    {
        id: "air-freshener-custom",
        category: "coming-soon",
        name: "Custom Car Air Freshener",
        description: "Personalized hanging air fresheners for your vehicle. Coming soon!",
        basePrice: 6.00,
        image: "air-freshener.jpg",
        inStock: false,
        badge: "Coming Soon"
    }
];
