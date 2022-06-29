const ServiceLevel = require('@models/service_level.model')

exports.create = async (req, res) => {
    try {
        const content = req.body

        if (content) {
            const sla = new ServiceLevel(content).sava()

            if (sla) {
                res.send(201).json(sla)
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
        const sla = await ServiceLevel.find()

        if (sla) {
            res.send(200).json(sla)
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
            const sla = await ServiceLevel.findById(id)

            if (sla) {
                res.send(200).json(sla)
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

            let sla = await ServiceLevel.findById(id)

            if (sla) {

                sla = await ServiceLevel.findByIdAndUpdate(id, {
                    $set: changes
                }, { new: true })

                res.send(200).json(sla)

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

            ServiceLevel.findByIdAndDelete(id).then(() => {
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