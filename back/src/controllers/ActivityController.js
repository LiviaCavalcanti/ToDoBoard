const mongoose = require('mongoose')

const Activity = mongoose.model('Activity')

module.exports = {
    async index(req, res) {
        const activities = await Activity.find()

        return res.json(activities)
    },
    async show(req, res) {
        const activity = await Activity.findById(req.params.id)

        return res.json(activity)
    },
    async store(req, res) {
        const activity = await Activity.create(req.body)

        return res.json(activity)
    },
    async update(req, res) {
        const activity = await Activity.findById(req.params.id, req.body, { new : true })

        return res.json(activity)
    },
    async destroy(req, res) {
        await Activity.findByIdAndRemove(req.params.id)

        return res.send()
    }

}