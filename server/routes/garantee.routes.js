const Router = require('express');
const router = new Router();
const garanteeController = require('../controller/garentee.controller');

router.post('/garantee', garanteeController.createGarantee);
router.get('/garantee', garanteeController.getAllGaranties);
router.delete('/garantee', garanteeController.deleteGarantee);

module.exports = router;
