var jwt = require('jsonwebtoken');
var secret = process.env.SECRET;

class Authentication{
    generateToken(data){
        return new Promise((resolve, reject) => {
            jwt.sign(data, secret, { expiresIn: '24hr' }, function(err, token) {
                if (err) {
                    reject(err);
                } else {
                    resolve(token);
                }
            });
        });
    }

    verifyToken(token){
        return new Promise((resolve, reject) => {
            jwt.verify(token.replace("Bearer ", ""), secret, function(err, decodedToken) {
                if (err) {
                    reject(err);
                } else {
                    resolve(decodedToken);
                }
            });
        });
    }
}

module.exports = new Authentication();