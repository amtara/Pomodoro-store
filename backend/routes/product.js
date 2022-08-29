const router = require("express").Router();
const { verifyTokenAndAdmin } = require("../middleware/verificationToken");
const Product = require("../models/Product");

// Creation d'un nouveau produit
router.post("/", async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).send(savedProduct);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;
    const option = { new: true };

    const result = await Product.findByIdAndUpdate(id, update, option);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete avec  l'id du produit

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("product as been delete");
  } catch (err) {
    res.status(500).json(err);
  }
});

//Recuperation des produits a partir de l'id
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  // creation d'une categorie(parametre d'url)
  const cat = req.query.category;
  try {
    let products;

    // on va rechercher si il ya un element correspondant à la categorie dans le tableau de categorie et l'afficher
    if (cat) {
      products = await Product.find({
        categories: {
          $in: [cat],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
