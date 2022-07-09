const express = require ("express")
const { registerUser, showAllUsers, showUser, updateUser } = require("../controllers/user")

const router = express.Router()

router.get("/users", showAllUsers)
router.get("/user/:id", showUser)

router.post("/register", registerUser)
router.patch("/user/:id", updateUser)

module.exports = router