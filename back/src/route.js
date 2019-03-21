const express = require("express");
const routes = express.Router()

const BoardController = require('./controllers/BunchController')
const ActivityController = require('./controllers/ActivityController')

routes.put('/bunch/:bunchId/activity/:id', ActivityController.update)
//routes.get('/bunch/:bunchId/activity/:activityId', ActivityController.show)
routes.get('/bunch/:bunchId/activity', ActivityController.index)
routes.post('/bunch/:bunchId/activity', ActivityController.store)
routes.delete('/activity/:id', ActivityController.destroy)

routes.get('/bunch', BoardController.index)
routes.post('/bunch', BoardController.store)
routes.put('/bunch/:id', BoardController.update)



module.exports = routes