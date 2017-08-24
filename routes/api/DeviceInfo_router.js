var router = require('koa-router')();
var DeviceInfo_controller = require('../../app/controllers/DeviceInfo_controller');

router.post('/device_query', DeviceInfo_controller.device_query);
router.post('/name_query', DeviceInfo_controller.name_query);
router.post('/mac_query', DeviceInfo_controller.mac_query);
router.post('/env_query', DeviceInfo_controller.env_query);
module.exports = router;