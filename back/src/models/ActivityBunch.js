const mongoose = require('mongoose')

const ActivityBunchSchema = new mongoose.Schema({
    title:{
        type: String
    },
    description:{
        type: String
    },
    activity: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Activity' }]
})

mongoose.model('ActivityBunch', ActivityBunchSchema)