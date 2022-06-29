const Contract = require('@models/contract.model')

exports.create = async (req, res) => {
    try {
        const content = req.body

        if (content) {
            const contract = new Contract(content).sava()

            if (contract) {
                res.send(201).json(contract)
            } else {
                res.sendStatus(500)
            }
        } else {
            res.sendStatus(400)
        }

    } catch (error) {
        res.sendStatus(500)
    }
};

exports.all = async (req, res) => {
    try {
        const contract = await Contract.find()

        if (contract) {
            res.send(200).json(contract)
        } else {
            res.sendStatus(400)
        }

    } catch (error) {
        res.sendStatus(500)
    }
};

exports.one = async (req, res) => {
    try {
        const id = req.params.id

        if (id) {
            const contract = await Contract.findById(id)

            if (contract) {
                res.send(200).json(contract)
            } else {
                req.sendStatus(404)
            }

        } else {
            req.sendStatus(400)
        }

    } catch (error) {
        res.sendStatus(500)
    }
};

exports.update = async (req, res) => {
    try {
        const id = req.params.id
        const changes = req.body

        if (changes && id) {

            let contract = await Contract.findById(id)

            if (contract) {

                contract = await Contract.findByIdAndUpdate(id, {
                    $set: changes
                }, { new: true })

                res.send(200).json(contract)

            } else {
                req.sendStatus(404)
            }

        } else {
            res.sendStatus(400)
        }

    } catch (error) {
        res.sendStatus(500)
    }
};

exports.delete = async (req, res) => {
    try {
        const id = req.params.id

        if (id) {

            Contract.findByIdAndDelete(id).then(() => {
                res.sendStatus(200)
            }).catch(() => {
                res.sendStatus(404)
            })

        } else {
            res.sendStatus(400)
        }

    } catch (error) {
        res.sendStatus(500)
    }
};