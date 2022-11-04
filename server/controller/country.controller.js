const countryServices = require('../services/country.services');

class CountryController {
  async createCountry(req, res) {
    const { name } = req.body;
    const newCountry = await countryServices.createCountry(name);
    res.json(newCountry, 201);
  }
  async getAllCountries(req, res) {
    const countries = await countryServices.getAllCountries();
    res.json(countries);
  }
  async deleteCountry(req, res) {
    const { id } = req.body;
    res.json(await countryServices.deleteCountry(id));
  }
}

module.exports = new CountryController();
