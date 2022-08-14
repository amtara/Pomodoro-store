const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51HLvgbEVFMEdPHEvX24N7qnQpZk5fDbPHGfKkNVRfNGcUWtTjs76uERWprQ1NZSDcut9Rqu05VI6lmhhukiSfjCD00nyGfYqvD"
);
module.exports = router;

router.post("/payement", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "chf",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});
