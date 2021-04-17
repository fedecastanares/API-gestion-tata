const { model, Schema } = require('mongoose')

module.exports = model('departaments', new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
}))