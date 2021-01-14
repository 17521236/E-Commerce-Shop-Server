const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('./db')

// body parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// allow cors
const cors = require('cors')
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept'
}))


// import route
const productRoute = require('./routes/product.route')

// use route here
app.use('/api/products', productRoute);





// connection
app.get('/', (req, res) => {
    res.send('server OK');
})

app.listen(port, () => {
    console.log(`Port ${port} is running ...`)
})