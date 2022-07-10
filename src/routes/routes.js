const express = require ("express")
const { addProduct, getProduct } = require("../controllers/product")
const { getTransactions, addTransactions } = require("../controllers/transaction")
const { registerUser, showAllUsers, showUser, updateUser, deleteUser } = require("../controllers/user")

const router = express.Router()

router.get("/users", showAllUsers)
router.get("/user/:id", showUser)

router.post("/register", registerUser)
router.patch("/user/:id", updateUser)
router.delete("/user/:id", deleteUser)

//products
router.get("/products", getProduct)
router.post("/products", addProduct)

//transactions
router.get("/transaction", getTransactions)
router.post("/transaction", addTransactions)

module.exports = router