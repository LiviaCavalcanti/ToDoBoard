const mongoose = require('mongoose')

const Activity = mongoose.model('Activity')
const ActivityBunch = mongoose.model("ActivityBunch")

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
        // Faltando fazer verificacoes (EXISTE ESSA BUNCH, ETC..)
        bunch = await ActivityBunch.findById(req.params.bunchid)

        const newActivity = req.body
        console.log(newActivity)
        newActivity.bunchid = req.params.bunchid

        const activity = await Activity.create(newActivity)

        bunch.activityBunch.push(activity)

        bunch.save()
        return res.json(activity)
    },
    async update(req, res) {
        console.log(req.params)
        const activity = await Activity.findByIdAndUpdate(req.params.id, req.body, { new : true })

        return res.json(activity)
    },
    async destroy(req, res) {
        await Activity.findByIdAndRemove(req.params.id)

        return res.send()
    }

}