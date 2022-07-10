require("dotenv").config()

const express = require("express")
const app = express()

const port = 5000

app.use(express.json())


const router = require("./src/routes/routes")

app.use("/api/v1/", router)

app.listen(port, () => console.log(`Server running on port: ${port}`))