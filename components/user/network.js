const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hi here is GET user');
});

router.post('/', (req, res) => {
    res.send('Hi here is POST user');
});


module.exports = router;