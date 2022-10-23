const Router = require('express');
const router = new Router();
const seasonController = require('../controller/season.controller');

router.post('/season', seasonController.createSeason);
router.get('/season', seasonController.getlAllSeasons);
router.delete('/season', seasonController.deleteSeason);

module.exports = router;
