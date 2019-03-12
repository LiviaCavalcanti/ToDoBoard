const mongoose = require('mongoose')

const ActivityBunch = mongoose.model('ActivityBunch')

module.exports = {
    async index(req, res) {
        const bunches = await ActivityBunch.find()

        return res.json(bunches)
    },
    async store(req, res) {
        const bunch = await ActivityBunch.create(req.body)

        return res.json(bunch)
    },
    async update(req, res) {
        const bunch = await ActivityBunch.findByIdAndUpdate(req.params.id, req.body, { new: true})

        return res.json(bunch)
    }
}