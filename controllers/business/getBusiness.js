const businessModel = require('../../models/business')

module.exports = async (request, response) => {
    try { 
        const business = await businessModel.find();
        response.json({business});

    } catch (error) {
        console.error(error);
    }
}