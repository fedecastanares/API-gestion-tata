const userModel = require('../../models/user')

module.exports = async (request, response) => {
    try { 
        const qty = await userModel.countDocuments();
        let users = {};
        if (isAdmin(request)) { 
            users = await userModel.find({_id: {$ne : request.user.id}}, '-password -role -__v');
        } else {
            const userData = await userModel.findOne({_id: request.user.id});
            users = await userModel.find({_id: {$ne : request.user.id}, business: userData.business}, '-_id -password -role -__v');
        }
        response.json({
            users,
            employeesQty: qty
        });
    } catch (error) {
        console.error(error);
    }

    function isAdmin(request) {
        return request.user.role === 'ADMIN';
    }
}