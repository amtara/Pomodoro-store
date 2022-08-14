const User = require("../models/User");
const { verifyTokenAndAdmin } = require("../middleware/verificationToken");
const router = require("express").Router();

//recuperation des utilisateurs user
router.get("/", async (req, res) => {
  try {
    const user = await User.find();

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
