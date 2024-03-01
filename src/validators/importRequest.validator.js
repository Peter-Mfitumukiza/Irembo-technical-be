const Joi = require("joi");

const validateImportRequest = (req, res, next) => {
    const schema = Joi.object({
        ownerDetails: Joi.object({
            citizenship: Joi.string().required(),
            phoneNumber: Joi.number().required(),
            email: Joi.string().required(),
            address: Joi.string().required()
        }).required(),
        businessDetails: Joi.object({
            businessType: Joi.string().required(),
            companyName: Joi.string().required(),
            tinNumber: Joi.number().required(),
            registrationDate: Joi.string().required(),
            businessAddress: Joi.string().required(),
        }).required(),
        productDetails: Joi.object({
            importationPurpose: Joi.string().required(),
            productCategory: Joi.string().required(),
            weight: Joi.number().required(),
            measurementUnit: Joi.string().required(),
            productQuantity: Joi.number().required(),
            productDescription: Joi.string().required(),
        })
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res
            .status(400)
            .json({ success: false, message: error.details[0].message });
    }
    next();
};

module.exports = {
    validateImportRequest
};