const { Users } = require("../../models")


exports.registerUser = async (req,res) => {
    try {
        
        await Users.create(req.body)

        res.send ({
            status: "Success",
            message: "Register User Successfully"
        })

    } catch (error) {
        
        console.log(error);
        res.send({
            status: "Failed!",
            message: "Server Error, Register Failed"
        })

    }
}

exports.showAllUsers = async (req,res) => {
    try {
        
        const allUsers = await Users.findAll()

        res.send ({
            status: "Success",
            message: "Showing all Users",
            data: {
                user: allUsers
            }
        })

    } catch (error) {
        
        console.log(error);
        res.send({
            status: "Failed!",
            message: "Server Error, Failed to show All Users"
        })

    }
}

exports.showUser = async (req,res) => {
    try {
        
        const {id} = req.params

        const allUsers = await Users.findAll({
            where: {id}
        })

        res.send ({
            status: "Success",
            message: `Showing user with id : ${id}`,
            data: {
                user: allUsers
            }
        })

    } catch (error) {
        
        console.log(error);
        res.send({
            status: "Failed!",
            message: `Server Error, Failed to show user with id : ${id}`
        })

    }
}