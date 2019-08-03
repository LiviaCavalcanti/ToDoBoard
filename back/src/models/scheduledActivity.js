const mongoose = require('mongoose')

const ScheduledActivitySchema = new mongoose.Schema({
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
    bunchid:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "ActivityBunch"
    }
})

mongoose.model('ScheduledActivity', ScheduledActivitySchema)