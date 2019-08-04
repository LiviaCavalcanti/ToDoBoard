const express = require("express");
const routes = express.Router()

const BunchController = require('./controllers/BunchController')
const ActivityController = require('./controllers/ActivityController')
const scheduledBunchController = require('./controllers/scheduledBunchController')

// routes.get("/bunch/:id", BunchController.findBunch)
routes.get("/bunch/:id", BunchController.show)
routes.get('/bunch', BunchController.index)
routes.post('/bunch', BunchController.store)
routes.put('/bunch/:id', BunchController.update)

routes.put('/activity/:id', ActivityController.update)
routes.get('/activity/:id', ActivityController.show)
routes.post('/activity/:bunchid', ActivityController.store)
routes.delete('/activity/:id', ActivityController.destroy)

routes.put('/scheduledBunch/:id', scheduledBunchController.update)
routes.get('/scheduledBunch', scheduledBunchController.index)
routes.post('/scheduledBunch/', scheduledBunchController.store)
// routes.delete('/scheduledBunch/:id', scheduledBunchController.destroy)

module.exports = routes