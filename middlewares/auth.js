var authService = require('../services/authentication');

class Auth{
    authenticate(req, res, next) {
        var token = req.body.token || req.query.token || req.headers['x-access-token'];
        if (token){
            authService.verifyToken(token).then(decoded =>{
                next();
            }).catch(err=>{
                next(err);
            });
        } else{
            res.status(401).send({ err: "No token provided" });
        }
    }
}

module.exports = new Auth();