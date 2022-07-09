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