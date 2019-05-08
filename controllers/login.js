var authService = require('../services/authentication');

class LoginController{
    login(req, res, next){
        var data = {
            username: req.body.username,
            password: req.body.password
        };
        authService.generateToken(data).then(token=>{
            res.json({user:data.username, token: token});
        }).catch(err=>{
            res.json(err);
        });
    }
}
module.exports = new LoginController();