const router = require("express").Router();
const { verifyTokenAndAdmin } = require("../middleware/verificationToken");
const Order = require("../models/Order");

//Create
router.post("/", async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const savedOrder = await newOrder.save();
    res.status(200).send(savedOrder);
  } catch (err) {
    console.log(err);
  }
});

//Recuperation de toutes les commandes
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const order = await Order.find();
    res.status(200).json(order);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
