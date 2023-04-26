const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")


const middleware=require("../middleware/auth")


router.post("/register", userController.createUser)

router.post("/login",userController.login)

router.post("/logout",userController.logoutUser)






module.exports = router;