const express = require ("express")
const { registerUser, showAllUsers, showUser, updateUser, deleteUser } = require("../controllers/user")

const router = express.Router()

router.get("/users", showAllUsers)
router.get("/user/:id", showUser)

router.post("/register", registerUser)
router.patch("/user/:id", updateUser)
router.delete("/user/:id", deleteUser)

module.exports = router