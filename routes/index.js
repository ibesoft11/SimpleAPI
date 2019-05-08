var express = require('express');
var router = express.Router();
var loginController = require('../controllers/login');
var patchController = require('../controllers/patch');
var thumbnailController = require('../controllers/thumbnail');
var auth = require('../middlewares/auth');


router.post('/login', loginController.login);
router.patch('/patch', auth.authenticate, patchController.patchDoc);
router.get('/thumbnail', auth.authenticate, thumbnailController.generateThumbnail);

module.exports = router;