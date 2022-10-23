const Router = require('express');
const router = new Router();
const garanteeController = require('../controller/garantee.controller');

router.post('/garantee', garanteeController.createGarantee);
router.get('/garantee', garanteeController.getlAllGaranties);
router.delete('/garantee', garanteeController.deleteGarantee);

module.exports = router;
