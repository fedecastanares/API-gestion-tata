const userModel = require('../../models/user')

module.exports = async (request, response) => {
    try { 
        const user = await userModel.findOne({_id: request.params.id}, '-password -__v');
        response.json({user});
    } catch (error) {
        console.error(error);
    }
}