import mongoose from "mongoose";
import fs from "fs";
import Post from "./models/post.js";

const MONGO_URI = "mongodb://mongo:27017/wanderlust";

const seedData = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    const rawData = JSON.parse(
      fs.readFileSync("./data/sample_posts.json", "utf-8")
    );

    const data = rawData.map((item) => {
      delete item._id; // 👈 IMPORTANT FIX
      return {
        ...item,
        timeOfPost: item.timeOfPost?.$date || new Date(),
      };
    });

    await Post.deleteMany();
    await Post.insertMany(data);

    console.log("Data seeded successfully ✅");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedData();