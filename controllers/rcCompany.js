//Import RC_Company Model
const RC_Company = require('../models/rcCompany');
//Import Express Router
const { Router } = require('express');
//Set router to Router()
const router = Router();

//index route
router.get('/', async (req, res) => {
	res.json(await RC_Company.find({}));
});

//create route
router.post('/', async (req, res) => {
	res.json(await RC_Company.create(req.body));
});

//update route
router.put('/name', async (req, res) => {
	res.json(await RC_Company.findOneAndUpdate(req.params.id, req.body));
});

//delete route
router.delete('/:name', async (req, res) => {
	res.json(await RC_Company.findOneAndRemove(req.params.id));
});

//EXPORT ROUTER
module.exports = router;
