const {products, Users, category, productCategory} = require("../../models")


exports.getProduct = async (req, res) => {

     
        try {
            const data = await products.findAll({
                include: [
                {
                    model: Users,
                    as: "Users",
                    attributes: {
                        exclude: ["createdAt", "updatedAt","password"]
                    }
                },
                {
                    model: category,
                    as: "categories",
                    through: {
                        model: productCategory,
                        as: "bridge",
                        attributes: {
                            exclude: ["createdAt", "updatedAt"]
                        }
                    },
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                }
            ],
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

exports.showProduct = async (req,res) => {
    try {
        
        const {id} = req.params

        const showSomeProduct = await products.findAll({
            where: {id}
        })

        res.send ({
            status: "Success",
            message: `Showing Product Detail with id : ${id}`,
            data: {
                product: showSomeProduct
            }
        })

    } catch (error) {
        
        console.log(error);
        res.send({
            status: "Failed!",
            message: `Server Error, Failed to show product with id : ${id}`
        })

    }
}

exports.updateProduct = async (req,res) => {
    try {
        
        const {id} = req.params

        await products.update(req.body, {
            where: {id}
        })

        res.send ({
            status: "Success",
            message: `Updating product with id : ${id}`
        })

    } catch (error) {
        
        console.log(error);
        res.send({
            status: "Failed!",
            message: `Server Error, Failed to update product with id : ${id}`
        })

    }
}

exports.deleteProduct = async (req,res) => {
    try {
        
        const {id} = req.params

        await products.destroy({
            where: {id}
        })

        res.status(200).send ({
            status: "Success",
            message: `Product with id : ${id} had been Deleted`
        })

    } catch (error) {
        
        console.log(error);
        res.status(400).send({
            status: "Failed!",
            message: `Server Error, Failed to delete product with id : ${id}`
        })

    }
}