const mongoose = require('mongoose')

const Activity = mongoose.model('Activity')
const ActivityBunch = mongoose.model('ActivityBunch')


module.exports = {
    async index(req, res) {
        const activities = await Activity.find({ _bunchId: req.params.bunchId })

        return res.json(activities)
    },
    async show(req, res) {
        const activity = await Activity.find({ _bunchId: req.params.bunchId, _id: req.params.activityId })

        return res.json(activity)
    },
    async store(req, res) {
        
        const activity = new Activity (req.body)    
        activity._bunchId = req.params.bunchId
        activity.save(function (err) {
            if (err) return handleError(err);
        }) 
        
        return res.json(activity)
    },
    async update(req, res) {
        const activity = await Activity.findOneAndUpdate({ _bunchId: req.params.bunchId, _id: req.params.activityId }, req.body, { new : true })

        return res.json(activity)
    },
    async destroy(req, res) {
        await Activity.findAndRemove({ _bunchId: req.params.bunchId, _id: req.params.activityId })

        return res.send()
    }

}