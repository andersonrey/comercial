const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hi here is GET customer');
});

router.post('/', (req, res) => {
    res.send('Hi here is POST customer');
});


module.exports = router;