import mongoose from "mongoose";
import products from "./data.js";
import Product from "../models/product.js";

const seedProducts = async () => {
    const DB_USER = "leandradevieira38";
    const DB_PASSWORD = encodeURIComponent("AdvJ85h06va2VcFo");
    const DB_CLUSTER = "cluster0.jyaqf.mongodb.net";
    const DB_PARAMS = "retryWrites=true&w=majority&appName=Cluster0";
  
    const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}/?${DB_PARAMS}`;
    try {
      await mongoose.connect(DB_URL);

    await Product.deleteMany();
    console.log("Products are deleted");

    await Product.insertMany(products);
    console.log("Products are added");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
