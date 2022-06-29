const Service = require('@models/service.model')

exports.create = async (req, res) => {
    try {
        const content = req.body

        if (content) {
            const service = new Service(content).sava()

            if (service) {
                res.send(201).json(service)
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
        const service = await Service.find()

        if (service) {
            res.send(200).json(service)
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
            const service = await Service.findById(id)

            if (service) {
                res.send(200).json(service)
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

            let service = await Service.findById(id)

            if (service) {

                service = await Service.findByIdAndUpdate(id, {
                    $set: changes
                }, { new: true })

                res.send(200).json(service)

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

            Service.findByIdAndDelete(id).then(() => {
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