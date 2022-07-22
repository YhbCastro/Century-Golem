const service = require('./games.service')
const asyncErrorBoundary = require('../errors/asyncErrorBoundary')

async function create(req, res) {
    const data = await service.create(req.body.data);
    res.status(201).json({ data });
}

async function list(req, res) {
    const allReservations = await service.list();
    res.json({ allReservations });
}