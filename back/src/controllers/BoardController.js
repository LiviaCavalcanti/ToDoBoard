const mongoose = require('mongoose')

const Activity = mongoose.model('Activity')

model.exports = {
    async index(req, res) {
        const activities = await Activity.find()

        return res.json(activities)
    },
    async store(req, res) {
        const activity = await Activity.create(req.body)

        return res.json(activity)
    }
}