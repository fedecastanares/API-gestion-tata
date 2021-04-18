const userModel = require('../../models/user')

module.exports = async (request, response) => {
    try { 
        const user = await userModel.findOneAndUpdate({_id: request.params.id}, request.body);
        response.json({user});
    } catch (error) {
        console.error(error);
    }
}