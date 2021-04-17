const { model, Schema } = require('mongoose')

module.exports = model('users', new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    surname: {
        type: String,
        required: true,
        trim: true
    },
    departament: {
        type: String,
        required: true,
        trim: true
    },
    business: {
        type: String,
        required: true,
        trim: true
    },
    telephone: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        trim: true
    }
}))