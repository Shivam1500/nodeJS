function checkage(req, res, next) {
    if (req.query.age > 18) {
        // res.send("Welcome to the  Red&Blue")
        next();
    } else (
        res.send("Age is not matched")
    )
}

module.exports = checkage;