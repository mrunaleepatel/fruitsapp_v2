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

router.post('/', async (req, res) => {

    console.log(req.body)
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    }else {
        req.body.readyToEat = false;
    }
    
    // works the same as the conditionals above
    // req.body.readyToEat = req.body.readyToEat === 'on' ? true : false

    // req.body object will look like:
    // {
    //     name: 'mango',
    //     color: 'green',
    //     readyToEat: 'on'
    // }
    await Fruit.create(req.body);
    res.redirect('/fruit')
})


module.exports = router;