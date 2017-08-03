var router = require('koa-router')();
var DistanceInfo_controller = require('../../app/controllers/DistanceInfo_controller');

router.post('/ble_get_distance', DistanceInfo_controller.ble_get_distance);
router.post('/ble_set_distance', DistanceInfo_controller.ble_set_distance);
router.post('/ble_del_distance', DistanceInfo_controller.ble_del_distance);

module.exports = router;