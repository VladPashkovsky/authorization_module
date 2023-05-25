const express = require('express')
const router = express.Router()
const { auth } = require('../middleware/auth')
const { getAllWaters, addWater } = require('../controllers/waters')

router.get('/', auth, getAllWaters)
router.get('/:id', auth, () => console.log('get waters id'))
router.post('/add', auth, addWater  )
router.put('/edit/:id', auth, () => console.log('edit waters id'))
router.delete('/remove/:id', auth, () => console.log('remove water'))

module.exports = router