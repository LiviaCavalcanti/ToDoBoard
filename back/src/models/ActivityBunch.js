const mongoose = require('mongoose')

const ActivityBunchSchema = new mongoose.Schema({
    title:{
        type: String
    },
    description:{
        type: String
    }
})

mongoose.model('ActivityBunch', ActivityBunchSchema)