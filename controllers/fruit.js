const express = require('express');
const Fruit = require('../models/fruit');

const router = express.Router();

// routes
router.get('/', async(req, res) => {
    const allFruits = await Fruit.find({})

    res.render(
        'fruits/index.ejs',
        { fruits: allFruits }
    )
});

router.get('/new', (req, res) => {
    res.render('./fruits/new.ejs')
})

module.exports = router;