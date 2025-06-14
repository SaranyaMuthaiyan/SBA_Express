function log(req, res, next) {
     console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
}

// function auth(req, res, next) {
//     if (req.headers["authorization"] == "secret-token") {
//         next();
//     } else {
//         res.status(403).send("Unauthorized");
//     }
// }

function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong" });
}

module.exports = { log,  errorHandler };