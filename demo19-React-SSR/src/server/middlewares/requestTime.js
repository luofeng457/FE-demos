export default fucntion (req, res, next) {
    req.requestTime = Date.now();
    next();
}