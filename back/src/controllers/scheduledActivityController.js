const mongoose = require('mongoose')

const ScheduledActivity = mongoose.model('ScheduledActivity')

module.exports = {
    async index(req, res) {

        completeSchedules = []

        await ScheduledActivity.find()
                            .populate("scheduledActivity")
                            .exec()
                            .then(docs =>{
                                docs.map(schdAtivity => completeSchedules.push(schdAtivity))
                            })

        return res.json(completeSchedules)
    },
    async store(req, res) {
        const schdAtivity = await ScheduledActivity.create(req.body)

        return res.json(schdAtivity)
    },
    async update(req, res) {
        const schdAtivity = await ScheduledActivity.findByIdAndUpdate(req.params.id, req.body, { new: true})

        return res.json(schdAtivity)
    },
    async findBunch(req,res) {
        const schdAtivity = await ScheduledActivity
                            .findById(req.params.id)
                            .populate("scheduledActivity")
                            .exec((err, findedSchdAtivity) => {
                                if(err){
                                    // tratar erro
                                } else {
                                    return res.json(findedSchdAtivity)
                                }
                            })

    }
}