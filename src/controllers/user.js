const db = require('../database/connection')
const { QueryTypes } = require ("sequelize")

exports.addUser = async (req, res) => {
    try {
        
        const {name, email, password, status} = req.body

        const query = `INSERT INTO Users (name, email, password, status)
        VALUES ('${name}', '${email}', '${password}', '${status}')`

        await db.sequelize.query(query)

        res.send({
            status: "Success",
            message: "Register Success"
        })

    } catch (error) {
        console.log(error);
        res.send({
            status: "Failed",
            message: "Register Failed, Server Error"
        })
    }
}

exports.showUsers = async (req, res) => {
    try {
        

        const query = `SELECT * FROM Users`

        const allUser = await db.sequelize.query(query, {type: QueryTypes.SELECT})

        res.send({
            status: "Success",
            allUser
        })

    } catch (error) {
        console.log(error);
        res.send({
            status: "Failed",
            message: "Register Failed, Server Error"
        })
    }
}