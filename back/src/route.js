const express = require("express");
const routes = express.Router()

const BoardController = require('./controllers/BunchController')
const ActivityController = require('./controllers/ActivityController')

routes.get('/bunch', BoardController.index)
routes.post('/bunch', BoardController.store)
routes.put('/bunch/:id', BoardController.update)
routes.get("/bunch/:id", BoardController.findBunch)

routes.put('/activity/:id', ActivityController.update)
routes.get('/activity/:id', ActivityController.show)
routes.post('/activity/:bunchid', ActivityController.store)
routes.delete('/activity/:id', ActivityController.destroy)

module.exports = routes