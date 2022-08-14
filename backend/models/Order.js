const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: Object,
    },
    products: {
      type: Array,
    },
    amount: {
      type: Number,
      required: true,
    },
    address: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
      default: "En attente de livraison",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
