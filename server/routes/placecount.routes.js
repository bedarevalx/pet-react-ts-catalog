const Router = require('express');
const router = new Router();
const placecountController = require('../controller/placecount.controller');

router.post('/placecount', placecountController.createPlacecount);
router.get('/placecount', placecountController.getlAllPlacecounts);
router.delete('/placecount', placecountController.deletePlacecount);

module.exports = router;
