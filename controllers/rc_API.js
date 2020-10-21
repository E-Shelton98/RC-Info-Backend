const { Router } = require('express');
const { findById } = require('../models/rcCompany');
const router = Router();
const rc_Company = require('../models/rcCompany');
const rc_Vehicle = require('../models/rcVehicle');
const mongoose = require('mongoose');
const RC_Vehicle = require('../models/rcVehicle');

//CREATE A COMPANY
router.post('/newCompany', async (req, res) => {
	res.json(await rc_Company.create(req.body));
});

//CREATE A VEHICLE
router.post('/vehicles/:companyid', async (req, res) => {
	const vehicle = await rc_Vehicle.create(req.body);
	const company = await rc_Company.findById(req.params.companyid);
	vehicle.company = company._id;
	vehicle.save();
	company.rcVehicles.push(vehicle._id);
	company.save();
	res.json(vehicle);
});

//Get Companies
router.get('/', async (req, res) => {
	res.json(await rc_Company.find({}).populate('rc_Vehicles'));
});

//Get Vehicles
router.get('/vehicles', async (req, res) => {
	res.json(await rc_Vehicle.find({}));
});

//Get a Company
router.get('/:id', async (req, res) => {
    res.json(await rc_Company.findById(req.params.id))
})

//Get a Vehicle
router.get('/vehicles/:id', async (req, res) => {
    res.json(await rc_Vehicle.findById(req.params.id))
})

//Delete Vehicle
router.delete('/vehicles/:id', async (req, res) => {
	res.json(await rc_Vehicle.findByIdAndDelete(req.params.id));
});

//Delete Company
router.delete('/:id', async (req, res) => {
    res.json(await rc_Company.findByIdAndDelete(req.params.id))
})

//Remove a Vehicle from a Company
router.delete('/vehicles/:companyid/vehicleid', async (req, res) => {
    const vehicle = await rc_Vehicle.findById(req.params.vehicleid);
		const company = await rc_Company.findById(req.params.companyid);
		company.rcVehicles.pop(vehicle._id);
		company.save();
		res.json(company);
})

//Update A Vehicle
router.put('/vehicles/:id', async (req, res) => {
    res.json(await RC_Vehicle.findByIdAndUpdate(req.params.id, req.body, {new: true}))
})

module.exports = router;
