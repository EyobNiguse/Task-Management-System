const JOI = require("joi");
const { default: mongoose } = require("mongoose");
//  standard input formatter helper function for all end points
const sendResponse = (res, status, code, payload, message = '') => {
    if (status === 'success') {
        return res.status(200).json({
            status: 'success',
            data: payload,
            message: message
        });
    } else if (status === 'error') {
        // You can refine this further based on error type (client vs. server errors)
        return res.status(code).json({
            status: 'error',
            error: {
                code: code || 500,
                message: message || 'An unexpected error occurred'
            }
        });
    }
};
//    validation function for login
const loginValidator = function (input) {
    const login = JOI.object().keys({
        email: JOI.string().email().required(),
        password: JOI.string().required()

    });
    return login.validate(input);
}
const validateID = function(id){
    return mongoose.Types.ObjectId.isValid(id);
}
const validatePassUpdate =  function(input){
    const password = JOI.object().keys({
        currPassword: JOI.string().email().required(),
        newPassword: JOI.string().min(8).max(20).required(),
        confirmPassword:JOI.string().min(8).max(20).required()

    });
    return password.validate(input);
}
module.exports = { sendResponse, loginValidator,validateID}