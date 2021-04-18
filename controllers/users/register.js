const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Joi = require('@hapi/joi')
const userModel = require('../../models/user')

module.exports = (request, response) => {
    const schema = Joi.object({
        name: Joi.string()
            .required(),

        surname: Joi.string()
            .required(),

        departament: Joi.string()
            .required(), 
                
        business: Joi.string()
            .required(),   

        telephone: Joi.string()
            .required(),  

        email: Joi.string()
            .email()
            .required(),

        role: Joi.string()
            .required(),
    })
    const validationResult = schema.validate(request.body);

    if (!validationResult.error) {
        const passwordHash = bcrypt.hashSync(request.body.telephone, 2)

        userModel.create({
            name: request.body.name,
            surname: request.body.surname,
            departament: request.body.departament,
            business: request.body.business,
            telephone: request.body.telephone,
            email: request.body.email,
            password: passwordHash,
            role: request.body.role,

        }, (error, user) => {
            if (error) {
                response.status(500).json({
                    message: 'No se pudo registrar el usuario',
                    error: error
                })
            } else {
                const userWithoutPassword = user.toObject()

                delete userWithoutPassword.password
                delete userWithoutPassword.email
                delete userWithoutPassword.role
                delete userWithoutPassword._id
                delete userWithoutPassword.__v

                userWithoutPassword.token = jwt.sign({
                    id: user._id,
                    role: user.role
                    }, process.env.JWT_KEY, { expiresIn: '2h' })
                
                response.json({
                    user: userWithoutPassword
                 })    
            }
        })
    } else {
        response.status(400).json({
            message: validationResult.error,
            body: request.body
        })
    }
}
