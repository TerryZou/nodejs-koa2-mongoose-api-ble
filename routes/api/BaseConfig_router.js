var router = require('koa-router')();
var BaseConfig_controller = require('../../app/controllers/BaseConfig_controller');

router.post('/get_url', BaseConfig_controller.get_url);
router.post('/set_url', BaseConfig_controller.set_url);

module.exports = router;