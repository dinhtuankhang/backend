const express = require('express')
const router = express.Router()

router.get('/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User details for user with ID: ${userId}`);
});

module.exports = router
