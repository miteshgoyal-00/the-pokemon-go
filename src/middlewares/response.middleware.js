const response_success = (req, res, next) => {
    res.success = (status, message, data = {}) => {
        res.status(status).json({
            response: status,
            success: true,
            message: message,
            ...data,
        });
    };
    next();
};

const response_failure = (req, res, next) => {
    res.failure = (status, message, data = {}) => {
        res.status(status).json({
            response: status,
            success: false,
            message: message,
            ...data,
        });
    };
    next();
};

export default { response_success, response_failure };
