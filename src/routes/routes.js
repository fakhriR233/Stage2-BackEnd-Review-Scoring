const express = require ("express")
const { getDummies, addDummy, getDummy, updateDummy, deleteDummy } = require("../controllers/controllers")
const { addUser, showUsers } = require("../controllers/user")

const router = express.Router()

router.get("/dummies", getDummies)
router.get("/dummy/:id", getDummy)

router.post("/dummy", addDummy)
router.patch("/dummy/:id", updateDummy)
router.delete("/dummy/:id", deleteDummy)


router.post("/register", addUser)
router.get("/users", showUsers)

module.exports = router