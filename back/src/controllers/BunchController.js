const mongoose = require('mongoose')

const ActivityBunch = mongoose.model('ActivityBunch')

module.exports = {
    async index(req, res) {

        completeBunches = []

        await ActivityBunch.find()
                            .populate("activityBunch")
                            .exec()
                            .then(docs =>{
                                docs.map(bunch => completeBunches.push(bunch))
                            })

        return res.json(completeBunches)
    },
    async store(req, res) {
        const bunch = await ActivityBunch.create(req.body)

        return res.json(bunch)
    },
    async update(req, res) {
        const bunch = await ActivityBunch.findByIdAndUpdate(req.params.id, req.body, { new: true})

        return res.json(bunch)
    },
    async findBunch(req,res) {
        const bunch = await ActivityBunch
                            .findById(req.params.id)
                            .populate("activityBunch")
                            .exec((err, findedBunch) => {
                                if(err){
                                    // tratar erro
                                } else {
                                    return res.json(findedBunch)
                                }
                            })

    }
}