const { model, Schema } = require('mongoose')

module.exports = model('business', new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
}))