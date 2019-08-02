const express = require("express");
const routes = express.Router()

const BoardController = require('./controllers/BunchController')
const ActivityController = require('./controllers/ActivityController')
const scheduledActivityController = require('./controllers/scheduledActivityController')

routes.get('/bunch', BoardController.index)
routes.post('/bunch', BoardController.store)
routes.put('/bunch/:id', BoardController.update)
routes.get("/bunch/:id", BoardController.findBunch)

routes.put('/activity/:id', ActivityController.update)
routes.get('/activity/:id', ActivityController.show)
routes.post('/activity/:bunchid', ActivityController.store)
routes.delete('/activity/:id', ActivityController.destroy)

routes.put('/scheduledActivity/:id', scheduledActivityController.update)
routes.get('/scheduledActivity', scheduledActivityController.index)
routes.post('/scheduledActivity/:bunchid', scheduledActivityController.store)
// routes.delete('/scheduledActivity/:id', scheduledActivityController.destroy)

module.exports = routes