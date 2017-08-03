var router = require('koa-router')();
var BleDeviceInfo_controller = require('../../app/controllers/BleDeviceInfo_controller');

router.post('/ble_device_query', BleDeviceInfo_controller.ble_device_query);
router.post('/ble_name_query', BleDeviceInfo_controller.ble_name_query);
router.post('/ble_mac_query', BleDeviceInfo_controller.ble_mac_query);
router.post('/ble_env_query', BleDeviceInfo_controller.ble_env_query);
module.exports = router;