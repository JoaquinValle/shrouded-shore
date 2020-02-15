const router = require("express").Router();
const userRoutes = require("./user");

// Routes
router.use("/user", userRoutes);
// router.use("/review", reviewRoutes);

module.exports = router;
