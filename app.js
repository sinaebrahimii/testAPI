const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: {
      isHasanSexy: true,
      meow: "meowwwwwww",
      bestSize: 75,
    },
  });
});
app.get("/meow", (req, res) => {
  res.status(200).json({
    message: "asal mani ishalla qorboonet beram mashala",
  });
});
app.post("/", (req, res) => {
  const data = req.body;
  console.log(data);
  res.status(201).json(data);
});

const port = 3000;
app.listen(port, () => console.log(`app is up and running on port ${port}`));
