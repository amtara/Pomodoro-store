const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51HLvgbEVFMEdPHEvX24N7qnQpZk5fDbPHGfKkNVRfNGcUWtTjs76uERWprQ1NZSDcut9Rqu05VI6lmhhukiSfjCD00nyGfYqvD"
);
module.exports = router;

console.log("API KEy", process.env.STRIPE_KEY);

router.post("/payement", (req, res) => {
  console.log(req.body);
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "chf",
      description:
        "My First Test Charge (created for API docs at https://www.stripe.com/docs/api)",
    },
    (stripeErr, stripeRes) => {
      console.log("stripeRes", stripeRes);
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});
