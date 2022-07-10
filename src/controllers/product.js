const {products, Users} = require("../../models")


exports.getProduct = async (req, res) => {

     
        try {
            const data = await products.findAll({
                include: {
                    model: Users,
                    as: "Users",
                    attributes: {
                        exclude: ["createdAt", "updatedAt","password"]
                    }
                },
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                }
            })

            res.status(200).send({
                status: "Success",
                message: "Showing all Products",
                data: {
                    product:data
                }
            })
        } catch (error) {
            console.log(error);
            res.status(400).send({
                status: "Failed",
                message: "Server error, can't show all Products"
            })
        }
    
}

exports.addProduct = async (req, res) => {
    try {
        await products.create(req.body)

        res.status(200).send({
            status: "Success",
            message: "Products successfully Added!",
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            status: "Failed",
            message: "Server error, can't show all Products"
        })
    }
}