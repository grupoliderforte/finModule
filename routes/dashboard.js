var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.render('dashboard', { title: 'Dashboard GLF' })
})

module.exports = router;