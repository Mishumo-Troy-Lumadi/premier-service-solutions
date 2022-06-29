const Client = require('@models/client.model')

exports.create = async (req, res) => {
    try {
        const content = req.body

        if (content) {
            const client = new Client(content).sava()

            if (client) {
                res.send(201).json(client)
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
        const clients = await Client.find()

        if (clients) {
            res.send(200).json(clients)
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
            const client = await Client.findById(id)

            if (client) {
                res.send(200).json(client)
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

            let client = await Client.findById(id)

            if (client) {

                client = await Client.findByIdAndUpdate(id, {
                    $set: changes
                }, { new: true })

                res.send(200).json(client)

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

            Client.findByIdAndDelete(id).then(() => {
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