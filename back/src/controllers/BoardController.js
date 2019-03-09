const mongoose = require('mongoose')

const ActivityBunch = mongoose.model('ActivityBunch')

model.exports = {
    async index(req, res) {
        const activities = await ActivityBunch.find()

        return res.json(activities)
    },
    async store(req, res) {
        const activity = await ActivityBunch.create(req.body)

        return res.json(activity)
    }
}