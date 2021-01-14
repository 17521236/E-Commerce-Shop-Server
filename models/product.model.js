const db = require('mongoose');
const productSchemal = db.Schema({
    title: {
        type: String,
        minlength: 1,
        required: true,
        trim: true
    },
    cat_id: {
        type: db.Types.ObjectId,
        required: true
    },
    image: {
        type: String,
        trim: true
    },
    images: Array,
    description: String,
    price: Number,
    quantity: Number
})

module.exports = db.model('Product', productSchemal);