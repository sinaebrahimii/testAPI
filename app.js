const express = require("express");
const cors = require("cors");
const Micro = require("./micro");
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", async (req, res) => {
  try {
    const data = await Micro.findById("64cd3901145c625a7b252a6d");
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
});
app.put("/", async (req, res) => {
  try {
    const data = await Micro.findByIdAndUpdate(
      "64cd3901145c625a7b252a6d",
      req.body,
      {
        new: true,
      }
    );
    res.status(201).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
});
module.exports = app;
