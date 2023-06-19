const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
app.use(cors());
mongoose.connect(
  "mongodb+srv://hamzaa:ludak567!@cluster0.5d2q2m7.mongodb.net/"
);
mongoose.connection.on("open", () => {
  console.log("connect");
});

const model = new mongoose.Schema({ niz: { type: Array } });

const itemModel = mongoose.model("things", model);

app.post("/add", async (req, res) => {
  const updated = await itemModel.findOneAndUpdate(
    { _id: "6490ae1c2f287f78bc571383" },
    { $push: { niz: null } },
    { returnOriginal: false }
  );
  res.json(updated);
});
app.get("/", (req, res) => {
  res.json({ hello: "heloo" });
});
app.get("/get", async (req, res) => {
  const allItems = await itemModel.find({});
  res.json(allItems);
});
app.delete("/delete", async (req, res) => {
  const updated = await itemModel.findOneAndUpdate(
    { _id: "6490ae1c2f287f78bc571383" },
    { $pull: { niz: null } },
    { returnOriginal: false }
  );
  updated;
  res.send(updated);
});
//const items = mongoose.connection.db.collection("items");
app.listen(4000);
