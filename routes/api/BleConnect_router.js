var router = require('koa-router')();
var BleConnect_controller = require('../../app/controllers/BleConnect_controller');

router.post('/query', BleConnect_controller.query);
router.post('/query_export', BleConnect_controller.query_export);
router.post('/result', BleConnect_controller.result);
router.post('/result_export', BleConnect_controller.result_export);
router.post('/result_list', BleConnect_controller.result_list);
router.post('/result_list_export', BleConnect_controller.result_list_export);


module.exports = router;