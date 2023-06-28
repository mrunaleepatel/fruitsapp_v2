require('dotenv').config();
const express = require('express');
const app = express();
const Fruit = require('./models/fruit');


app.get('/fruit', async(req, res) => {
    const allFruits = await Fruit.find({})

    res.render(
        'fruits/index.ejs',
        { fruits: allFruits }

        // the above the same thing as 
        // {
        //     fruits: [{ name: 'banana' }, { name: 'apple' }] 
        // }
        // or 
        // is the same thing as 
        // {
        //     fruits: fruits 
        // }
    )
});

app.get('/fruit/new', (req, res) => {
    res.render('./fruits/new.ejs')
})

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`listening on port ${PORT}`))