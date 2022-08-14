const jwt = require("jsonwebtoken");

// verification
function tokenVerification(req, res, next) {
  //recuperation du token dans le header
  const headerToken = req.headers.authorization;

  if (headerToken) {
    // verification que le token est valide
    const token = headerToken.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) res.status(400).json("Ce token est invalide");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("Vous n'etes pas authentifier!");
  }
}

const verifyTokenAndAdmin = (req, res, next) => {
  tokenVerification(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Pas la permission de faire ca");
    }
  });
};

module.exports = {
  verifyTokenAndAdmin,
};
