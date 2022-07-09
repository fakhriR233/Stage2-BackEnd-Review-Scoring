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
        
        const allUsers = await Users.findAll({
            attributes: {
                exclude: ['password', 'createdAt', 'updatedAt']
            }
        })

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

        const showUser = await Users.findAll({
            where: {id}
        })

        res.send ({
            status: "Success",
            message: `Showing user with id : ${id}`,
            data: {
                user: showUser
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

exports.updateUser = async (req,res) => {
    try {
        
        const {id} = req.params

        await Users.update(req.body, {
            where: {id}
        })

        res.send ({
            status: "Success",
            message: `Updating user with id : ${id}`
            // data: {
            //     user: allUsers
            // }
        })

    } catch (error) {
        
        console.log(error);
        res.send({
            status: "Failed!",
            message: `Server Error, Failed to update user with id : ${id}`
        })

    }
}