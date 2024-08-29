const express = require('express');
const router = express.Router();

const ip = require('./ip.js')
const auth = require('./auth.js')
const chart = require('./chart.js')

router.use("/ip",ip)
router.use("/auth",auth)
router.use('/chart',chart)


module.exports = router;
