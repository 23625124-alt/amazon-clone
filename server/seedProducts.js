import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "./models/Product.js";

dotenv.config();

const products = [
  {
    name: "iPhone 16 Pro",
    price: 119999,
    category: "Mobiles",
    image: "/images/phone.png",
    description: "Latest Apple iPhone with powerful performance.",
    rating: 4.8,
    stock: 20,
  },
  {
    name: "MacBook Air",
    price: 99999,
    category: "Laptops",
    image: "/images/laptop.png",
    description: "Lightweight and powerful Apple MacBook Air.",
    rating: 4.7,
    stock: 15,
  },
  {
    name: "Apple Watch",
    price: 44999,
    category: "Smart Watches",
    image: "/images/watch.png",
    description: "Smart watch with fitness and health features.",
    rating: 4.6,
    stock: 25,
  },
  {
    name: "Sony Headphones",
    price: 14999,
    category: "Headphones",
    image: "/images/headphone.png",
    description: "Wireless headphones with immersive sound.",
    rating: 4.5,
    stock: 30,
  },
  {
    name: "Logitech Mouse",
    price: 2999,
    category: "Computer Accessories",
    image: "/images/mouse.png",
    description: "Comfortable and responsive wireless mouse.",
    rating: 4.4,
    stock: 40,
  },
  {
    name: "Mechanical Keyboard",
    price: 4999,
    category: "Keyboards",
    image: "/images/keyboard.png",
    description: "Mechanical keyboard designed for gaming and work.",
    rating: 4.5,
    stock: 35,
  },
  {
    name: "Samsung Smart TV",
    price: 54999,
    category: "Televisions",
    image: "/images/tv.png",
    description: "4K smart television with amazing picture quality.",
    rating: 4.6,
    stock: 10,
  },
  {
    name: "Nike Shoes",
    price: 7999,
    category: "Shoes",
    image: "/images/shoes.png",
    description: "Comfortable and stylish Nike sports shoes.",
    rating: 4.5,
    stock: 50,
  },
  {
    name: "American Tourister Backpack",
    price: 3999,
    category: "Bags",
    image: "/images/bag.png",
    description: "Durable backpack suitable for travel and college.",
    rating: 4.4,
    stock: 30,
  },
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected for seeding...");

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("✅ 9 products inserted successfully!");

    await mongoose.connection.close();

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding products:", error.message);

    process.exit(1);
  }
};

seedProducts();