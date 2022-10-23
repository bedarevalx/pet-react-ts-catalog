const Router = require('express');
const router = new Router();
const countryController = require('../controller/country.controller');

router.post('/country', countryController.createCountry);
router.get('/country', countryController.getAllCountries);
router.delete('/country', countryController.deleteCountry);

module.exports = router;
