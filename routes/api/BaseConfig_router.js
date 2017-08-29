var router = require('koa-router')();
var BaseConfig_controller = require('../../app/controllers/BaseConfig_controller');

router.post('/get_url', BaseConfig_controller.get_url);
router.post('/set_url', BaseConfig_controller.set_url);
router.post('/add_url', BaseConfig_controller.add_url);
router.post('/del_url', BaseConfig_controller.del_url);

module.exports = router;