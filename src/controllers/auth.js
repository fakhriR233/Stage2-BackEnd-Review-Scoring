const { Users } = require("../../models")

const Joi = require("joi")

exports.register = async (req, res) => {

    try {
        
        const schema = Joi.object({
            name: Joi.string().min(3).required(),
            email: Joi.string().email().min(5).required(),
            password: Joi.string().min(6).required()
        })
    
        const {error} = schema.validate(req.body)
        //console.log(error)

        if(error){
            return res.status(400).send({
                error: {
                    message: error.details[0].message
                }
            })
        }

        const checkUser = await Users.findOne({
            where: {
                email: req.body.email
            }
        })

        if(checkUser){
            return res.status(400).send({
                status: "Failed",
                message: "Email is already registered!"
            })
        }

        await Users.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            status: "user"
        })

        res.status(201).send({
            status: "Success",
            message:"Register successful"
        })
        
        
    } catch (error) {
        console.log(error);
        res.status(400).send({
            status:"Failed",
            message: "Server Error"
        })
        
    }

}

exports.login = async (req, res) => {

    
    try {

        const schema = Joi.object({
            email: Joi.string().email().min(5).required(),
            password: Joi.string().min(6).required()
        })
    
        const {error} = schema.validate(req.body)
    
        if(error){
            return res.status(400).send({
                error: {
                    message: error.details[0].message
                }
            })
        }
        
        const checkUser = await Users.findOne({
            where: {
                email: req.body.email
            }
        })

        if(!checkUser){
            return res.status(400).send({
                status: "Failed",
                message: "Email is not registered!"
            })
        }

        if(checkUser.password !== req.body.password){
            return res.status(400).send({
                status: "Failed",
                message: "Wrong Password"
            })
        }

        res.status(200).send({
            status: "Success",
            message: "Logged in successfully",
            data: {
                user: {
                    name: checkUser.name,
                    email: checkUser.email
                }
            }
        })

    } catch (error) {

        console.log(error);
        res.status(400).send({
            status:"Failed",
            message: "Server Error"
        })
        
    }

}