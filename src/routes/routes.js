const express = require ("express")
const { registerUser, showAllUsers, showUser } = require("../controllers/user")

const router = express.Router()

router.get("/users", showAllUsers)
router.get("/user/:id", showUser)

router.post("/register", registerUser)

module.exports = router