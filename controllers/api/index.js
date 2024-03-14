const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const commentRoutes = require('./comroutes');


router.use("/users", userRoutes);
router.use("/posts", projectRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
