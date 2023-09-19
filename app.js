const express = require("express");
const cors = require("cors");
const Zone = require("./zone");
const app = express();
app.use(cors());
app.use(express.json());
app.post("/zone", async (req, res) => {
  try {
    const data = req.body;
    const zone = await Zone.create(data);
    res.status(201).json({ status: "success", zone });
  } catch (error) {
    res.status(400).json({ status: "failed", error });
  }
});

app.get("/zone/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Zone.findById(id);
    res.status(201).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
});
app.put("/zone/toggle/:id", async (req, res) => {
  const { id } = req.params;
  const { isOn } = req.body;
  try {
    const zone = await Zone.findByIdAndUpdate(
      id,
      { isOn },
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(201).json({ status: "success", zone });
  } catch (error) {
    res.status(404).json(error);
  }
});
app.put("/zone/:id", async (req, res) => {
  const { id } = req.params;
  const { temp } = req.body;
  try {
    const zone = await Zone.findByIdAndUpdate(
      id,
      { temp },
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(201).json({ status: "success", zone });
  } catch (error) {
    res.status(404).json(error);
  }
});
module.exports = app;
