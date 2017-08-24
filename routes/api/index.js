var router = require('koa-router')();
var user_router = require('./userinfo_router');
var BleConnect_router = require('./BleConnect_router');
var BtConnect_router = require('./BtConnect_router');
var BleScan_router = require('./BleScan_router');
var BaseConfig_router = require('./BaseConfig_router');
var DistanceInfo_router = require('./DistanceInfo_router');
var BleMobileInterval_router = require('./BleMobileInterval_router');
var DeviceInfo_router = require('./DeviceInfo_router');

router.use('/users', user_router.routes(), user_router.allowedMethods());
router.use('/ble_connect', BleConnect_router.routes(), BleConnect_router.allowedMethods());
router.use('/bt_connect', BtConnect_router.routes(), BtConnect_router.allowedMethods());
router.use('/ble_scan', BleScan_router.routes(), BleScan_router.allowedMethods());
router.use('/config', BaseConfig_router.routes(), BaseConfig_router.allowedMethods());
router.use('/config', DistanceInfo_router.routes(), DistanceInfo_router.allowedMethods());
router.use('/config', BleMobileInterval_router.routes(), BleMobileInterval_router.allowedMethods());
router.use('/config', DeviceInfo_router.routes(), DeviceInfo_router.allowedMethods());

module.exports = router;