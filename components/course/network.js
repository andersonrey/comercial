const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hi here is GET course');
});

router.post('/', (req, res) => {
    res.send('Hi here is POST course');
});


module.exports = router;