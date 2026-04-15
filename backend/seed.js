import mongoose from "mongoose";
import fs from "fs";
import Post from "./models/post.js"; // 👈 apne file name ke hisab se

const MONGO_URI = "mongodb://172.31.64.139:27017/wanderlust";

const seedData = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    const rawData = JSON.parse(
      fs.readFileSync("./data/sample_posts.json", "utf-8")
    );

    const data = rawData.map((item) => ({
      ...item,
      _id: item._id?.$oid || undefined,
      timeOfPost: item.timeOfPost?.$date || new Date(),
    }));

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