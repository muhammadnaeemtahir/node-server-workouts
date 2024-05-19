const express = require('express')
const router = express.Router()

// get all workouts
router.get('/', (req, res) => {
    res.status(200).json({ mssg: "Get all workouts" })
})

// get single workout
router.get('/:id', (req, res) => {
    const { id } = req.params
    res.status(200).json({ mssg: "Get single workout", id })
})

// update workout
router.patch('/:id', (req, res) => {
    const { id } = req.params
    res.status(200).json({ mssg: "Update single workout", id })
})

// delete workout
router.post('/:id', (req, res) => {
    const { id } = req.params
    res.status(200).json({ mssg: "Delete single workout", id })
})

module.exports = router