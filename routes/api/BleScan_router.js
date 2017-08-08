var router = require('koa-router')();
var BleScan_controller = require('../../app/controllers/BleScan_controller');

router.post('/query', BleScan_controller.query);
router.post('/query_export', BleScan_controller.query_export);
router.post('/result', BleScan_controller.result);
router.post('/result_export', BleScan_controller.result_export);
router.post('/query_once', BleScan_controller.query_once);

module.exports = router;