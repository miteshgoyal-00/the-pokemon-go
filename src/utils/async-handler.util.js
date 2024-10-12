const async_handler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((err) => {
            console.log("New Error Caught: ", err.message);
            next(err);
        });
    };
};

export default async_handler;

// Another way to write definition of the function
// const async_handler = (fn) => {
//     return async (req, res, next) => {
//         try {
//             await fn(req, res, next);
//         } catch (err) {
//             console.log("New Error Caught: ", err.message);
//             next(err);
//         }
//     };
// };
