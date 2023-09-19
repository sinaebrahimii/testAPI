const mongoose = require("mongoose");
const app = require("./app");
const DB_LOCAL = "mongodb://localhost:27017";
const DB =
  "mongodb://root:4GSs6i7JYNHi3h4eHyDrE4HY@luca.iran.liara.ir:32810/my-app?authSource=admin";
mongoose
  .connect(DB)
  .then(() => console.log("DB connection successful!"))
  .catch((err) => {
    console.log(err);
  });

const port = 8000;
app.listen(port, () => console.log(`app is up and running on port ${port}`));
