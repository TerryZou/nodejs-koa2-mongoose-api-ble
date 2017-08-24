var router = require('koa-router')();
var BtConnect_controller = require('../../app/controllers/BtConnect_controller');

router.post('/query', BtConnect_controller.query);
router.post('/query_export', BtConnect_controller.query_export);
router.post('/query_list', BtConnect_controller.query_list);
router.post('/query_list_export', BtConnect_controller.query_list_export);
router.post('/result', BtConnect_controller.result);
router.post('/result_export', BtConnect_controller.result_export);
router.post('/result_list', BtConnect_controller.result_list);
router.post('/result_list_export', BtConnect_controller.result_list_export);


module.exports = router;