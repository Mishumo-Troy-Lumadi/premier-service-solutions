const Personnel = require('@models/personnel.model')

exports.create = async (req, res) => {
    try {
        const content = req.body

        if (content) {
            const personnel = new Personnel(content).sava()

            if (personnel) {
                res.send(201).json(personnel)
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
        const personnel = await Personnel.find()
        
        if (personnel) {
            res.status(200).json(personnel)
        } else {
            res.sendStatus(404)
        }

    } catch (error) {
        res.sendStatus(500)
    }

};

exports.one = async (req, res) => {
    
    try {
        const id = req.params.id

        if (id) {
            const personnel = await Personnel.findById(id)

            if (personnel) {
                res.status(200).json(personnel)
            } else {
                res.sendStatus(404)
            } 
        } else {
            res.sendStatus(400)
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

            let personnel = await Personnel.findById(id)

            if (personnel) {

                personnel = await Personnel.findByIdAndUpdate(id, {
                    $set: changes
                }, { new: true })

                res.send(200).json(personnel)

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

            Personnel.findByIdAndDelete(id).then(() => {
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
