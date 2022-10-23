const Router = require('express');
const router = new Router();
const materialArcController = require('../controller/materialArc.controller');

router.post('/material-arc', materialArcController.createMaterialArc);
router.get('/material-arc', materialArcController.getAllMaterialsArc);
router.delete('/material-arc', materialArcController.deleteMaterial);

module.exports = router;
