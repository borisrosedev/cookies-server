const express = require('express')
const cookiesController = require('../controllers/cookies')
const router = express.Router()


router.get('/cookies', cookiesController.get)
router.post('/cookies', cookiesController.post)


module.exports = router

