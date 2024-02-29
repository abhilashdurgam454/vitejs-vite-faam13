const mongoose = require("mongoose");

const mongodbURL =
  "mongodb+srv://durgamabhilash44:5JTbLtFzGbuPRnSY@cluster0.0ppuyvw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongodbURL);

const db = mongoose.connection;

db.on("error", (err) => {
  console.log("Error connecting to MongoDB", err);
});

db.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});
db.on("connected", () => {
  console.log("Connected to MongoDB");
});

module.exports = db;
