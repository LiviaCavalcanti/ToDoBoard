const mongoose = require('mongoose')

const ScheduledActivitySchema = new mongoose.Schema({
    startTime:{
        type: String,
        required: true
    },
    endTime:{
        type: Date,
        required: true
    },
    day:{
        type: Date,
        required: true
    },
    bunchid:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "ActivityBunch"
    }
})

mongoose.model('ScheduledActivity', ScheduledActivitySchema)