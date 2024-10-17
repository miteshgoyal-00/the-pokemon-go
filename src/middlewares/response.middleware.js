// const response_success = (req, res, next) => {
//     res.success = (status, message, data = {}) => {
//         res.status(status).json({
//             response: status,
//             success: true,
//             message: message,
//             ...data,
//         });
//     };
//     next();
// };

// const response_failure = (req, res, next) => {
//     res.failure = (status, message, data = {}) => {
//         res.status(status).json({
//             response: status,
//             success: false,
//             message: message,
//             ...data,
//         });
//     };
//     next();
// };

const createResponse = (success) => (req, res, next) => {
    res[success ? "success" : "failure"] = (status, message, data = {}) => {
        res.status(status).json({
            response: status,
            success: success,
            message: message,
            ...data,
        });
    };
    next();
};

const response_success = createResponse(true);
const response_failure = createResponse(false);

export default { response_success, response_failure };
