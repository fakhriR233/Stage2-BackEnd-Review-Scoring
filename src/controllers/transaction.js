const {transactions, products, Users} = require("../../models");

exports.getTransactions = async (req,res) => {
    
    try {
        const dataTransaction = await transactions.findAll({
            include: [
                {
                    model: products,
                    as: "products",
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                },
                {
                    model: Users,
                    as: "buyer",
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "password"]
                    }
                },
                {
                    model: Users,
                    as: "seller",
                    attributes: {
                        exclude: ["createdAt", "updatedAt", 
                        "password"]
                    }
                }
            ],
            attributes: {
                exclude: ["createdAt", "updatedAt", 
                "idBuyer", "idSeller", "idProduct"]
            }
        })

        res.status(200).send({
            status: "Success",
            message: "Showing all Transactions",
            data: {
                transaction:dataTransaction
            }
        })

    } catch (error) {
        console.log(error);
        res.status(400).send({
            status: "Failed",
            message: "Server Error, failed to show all Transactions"
        })
    }

}

exports.addTransactions = async (req,res) => {
    try {
        await transactions.create(req.body)

        res.status(200).send({
            status: "Success",
            message: "A new Transaction Added!",
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            status: "Failed",
            message: "Server error, failed to add new Transaction"
        })
    }
}