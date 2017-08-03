var router = require('koa-router')();
var BleScan_controller = require('../../app/controllers/BleScan_controller');

router.post('/ble_scan_query', BleScan_controller.ble_scan_query);
router.post('/ble_scan_export', BleScan_controller.ble_scan_export);
router.post('/ble_scan_result', BleScan_controller.ble_scan_result);
router.post('/ble_scan_result_export', BleScan_controller.ble_scan_result_export);
router.post('/ble_scan_queryonce', BleScan_controller.ble_scan_queryonce);

module.exports = router;