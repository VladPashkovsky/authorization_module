const express = require('express')
const router = express.Router()
const { auth } = require('../middleware/auth')
const { getAllWaters, addWater, remove, editWater, getWaterById } = require('../controllers/waters')

router.get('/', auth, getAllWaters)
router.get('/:id', auth, getWaterById)
router.post('/add', auth, addWater  )
router.put('/edit/:id', auth, editWater)
router.delete('/remove/:id', auth, remove)

module.exports = router