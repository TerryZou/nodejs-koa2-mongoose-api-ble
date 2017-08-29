var router = require('koa-router')();
var BleMobileInterval_controller = require('../../app/controllers/BleMobileInterval_controller');

router.post('/ble_add_mobile', BleMobileInterval_controller.ble_add_mobile);
router.post('/ble_del_mobile', BleMobileInterval_controller.ble_del_mobile);
router.post('/ble_get_scan', BleMobileInterval_controller.ble_get_scan);
router.post('/ble_get_scan_mobile', BleMobileInterval_controller.ble_get_scan_mobile);
router.post('/ble_get_connect', BleMobileInterval_controller.ble_get_connect);
router.post('/ble_get_connect_mobile', BleMobileInterval_controller.ble_get_connect_mobile);
module.exports = router;