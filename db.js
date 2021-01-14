const mongoose = require('mongoose')
const uri = "mongodb+srv://dbAdmin:PQh6XXXQdWtQIYv8@cluster0.zbpes.mongodb.net/Ecommerce?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongodb connected successfully...')
    })
    .catch((err) => {
        console.log('Mongo connected failed !!!');
        console.log(err);
    })

mongoose.set('useFindAndModify', false);