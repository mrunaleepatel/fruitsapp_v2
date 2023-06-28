require('dotenv').config();
const express = require('express');
const app = express();
const fruitRouter = require('./controllers/fruit');

// middleware
app.use(express.static("public"))
app.use("/fruit", fruitRouter)

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`listening on port ${PORT}`))