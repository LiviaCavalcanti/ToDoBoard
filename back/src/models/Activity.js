const mongoose = require('mongoose')

const ActivitySchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    bunchid:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "ActivityBunch"
    }
})

mongoose.model('Activity', ActivitySchema)