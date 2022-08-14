const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("../backend/routes/user");
const authRoute = require("../backend/routes/auth");
const productRoute = require("../backend/routes/product");

const stripeRoute = require("../backend/routes/stripe");
const OrderRoute = require("../backend/routes/order");
const bodyParser = require("body-parser");
const cors = require("cors");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Db connection success");
  })
  .catch((err) => {
    console.log(err);
  });

//app can consume json data
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", OrderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT, () => {
  console.log("backend server run on port " + process.env.PORT);
});
