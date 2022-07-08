let dummy = [
    {
        id: 1,
        title: "Cuci Tangan",
        isDone: true
    },

    {
        id: 2,
        title: "Jaga Jarak",
        isDone: false
    }
]

exports.getDummies = async (req, res) => {

    try {
        res.send({
            status: "success",
            data: {dummy}
        })

    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            messageg: "Server Error"
        })
    }
}

exports.getDummy = async (req, res) => {

    try {

        let {id} = req.params
        let index = id - 1

        res.send({
            status: "success",
            data: dummy[index]
        })

    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            messageg: "Server Error"
        })
    }
}

exports.addDummy = async (req, res) => {

    try {

        addDumb = [...dummy, req.body]

        res.send({
            status: "success",
            data: addDumb
        })

    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            messageg: "Server Error"
        })
    }
}

exports.updateDummy = async (req, res) => {

    try {
        let {id} = req.params
        let index = id - 1

        edit[index] = {...dummy[index], ...req.body}

        res.send({
            status: "success",
            data: dummy[index]
        })

    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            messageg: "Server Error"
        })
    }
}

exports.deleteDummy = async (req, res) => {

    try {
        let {id} = req.params

        deleteDummy = dummy.filter((dummy) => dummy.id != id)

        res.send({
            status: "success",
            data: dummy
        })

    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            messageg: "Server Error"
        })
    }
}