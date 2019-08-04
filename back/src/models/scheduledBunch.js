const mongoose = require('mongoose')

const ScheduledBunchSchema = new mongoose.Schema({
    startTime:{
        type: String,
        required: true
    },
    endTime:{
        type: String,
        required: true
    },
    day:{
        type: String,
        required: true
    },
    bunchId:{
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        ref: "ActivityBunch"
    }
})

mongoose.model('ScheduledBunch', ScheduledBunchSchema)