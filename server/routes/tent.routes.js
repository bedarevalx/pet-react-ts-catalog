const Router = require('express');
const router = new Router();
const tentController = require('../controller/tent.controller');

router.post('/tent', tentController.createTent);
router.get('/tent', tentController.getlAllTents);
router.delete('/tent', tentController.deleteTent);

module.exports = router;
