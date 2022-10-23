const Router = require('express');
const router = new Router();
const materialBottomController = require('../controller/materialBottom.controller');

router.post('/material-bottom', materialBottomController.createMaterialBottom);
router.get('/material-bottom', materialBottomController.getAllMaterialsBottom);
router.delete('/material-bottom', materialBottomController.deleteMaterial);

module.exports = router;
