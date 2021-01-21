const express = require('express');
const { route } = require('.');
const router = express.Router()

router.get('/', (req, res, next) => {
    res.render('login', { mensagem: null });
});

module.exports = router