const mongoose = require('mongoose')

const ScheduledBunch = mongoose.model('ScheduledBunch')

module.exports = {
    async index(req, res) {

        completeSchedules = []

        await ScheduledBunch.find()
                            .populate("ScheduledBunch")
                            .exec()
                            .then(docs =>{
                                docs.map(schdBunch => completeSchedules.push(schdBunch))
                            })

        return res.json(completeSchedules)
    },
    async store(req, res) {
        const schdBunch = await ScheduledBunch.create(req.body)

        return res.json(schdBunch)
    },
    async update(req, res) {
        const schdBunch = await ScheduledBunch.findByIdAndUpdate(req.params.id, req.body, { new: true})

        return res.json(schdBunch)
    },
    async findBunch(req,res) {
        const schdBunch = await ScheduledBunch
                            .findById(req.params.id)
                            .populate("ScheduledBunch")
                            .exec((err, findedSchdBunch) => {
                                if(err){
                                    // tratar erro
                                } else {
                                    return res.json(findedSchdBunch)
                                }
                            })

    }
}