var router = require('koa-router')();
var user_controller = require('../../app/controllers/userinfo_controller');

router.post('/login', user_controller.login);
router.post('/register', user_controller.register);

module.exports = router;