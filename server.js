const mongoose = require("mongoose");
const app = require("./app");
const DB =
  "mongodb://root:emP2QA81gmIKbHAEm17PrAEY@finn.iran.liara.ir:30769/my-app?authSource=admin";
mongoose
  .connect(DB)
  .then(() => console.log("DB connection successful!"))
  .catch((err) => {
    console.log(err);
  });
const port = 8000;
app.listen(port, () => console.log(`app is up and running on port ${port}`));
