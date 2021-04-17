const departamentsModel = require('../../models/departaments')

module.exports = async (request, response) => {
    try { 
        const departaments = await departamentsModel.find({}, '-_id');
        response.json({departaments});

    } catch (error) {
        console.error(error);
    }
}