//Import RC_Vehicle Model
const RC_Vehicle = require('../models/rcVehicle')
//Import Express Router
const { Router } = require('express')
//Set router to Router()
const router = Router()

//index route
router.get('/', async (req, res) => {
    res.json(await RC_Vehicle.find({}))
})

//create route
router.post('/', async (req, res) => {
    res.json(await RC_Vehicle.create(req.body))
})

//update route
router.put('/name', async (req, res) => {
    res.json(await RC_Vehicle.findOneAndUpdate(req.params.id, req.body))
})

//delete route
router.delete("/:name", async (req, res) => {
    res.json(await RC_Vehicle.findOneAndRemove(req.params.id))
})

//EXPORT ROUTER
module.exports = router