var router = require('koa-router')();
var BleConnect_controller = require('../../app/controllers/BleConnect_controller');

router.post('/ble_connect_query', BleConnect_controller.ble_connect_query);
router.post('/ble_connect_export', BleConnect_controller.ble_connect_export);
router.post('/ble_connect_result', BleConnect_controller.ble_connect_result);
router.post('/ble_connect_result_export', BleConnect_controller.ble_connect_result_export);

module.exports = router;