const express = require('express')
const {
    getEmail
} = require('../controllers/emailController')

const router = express.Router()

router.get('/:address', getEmail); //get an email loan

module.exports = router;