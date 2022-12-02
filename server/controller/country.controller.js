const countryServices = require('../services/country.service');

class CountryController {
  async createCountry(req, res) {
    try {
      const { name } = req.body;
      const newCountry = await countryServices.createCountry(name);
      res.json(newCountry, 201);
    } catch (error) {
      console.log(error);
      res.status(422).json('Validation Error!');
    }
  }
  async getAllCountries(req, res) {
    try {
      const countries = await countryServices.getAllCountries();
      res.json(countries);
    } catch (error) {
      console.log(error);
    }
  }
  async deleteCountry(req, res) {
    try {
      const { id } = req.body;
      res.json(await countryServices.deleteCountry(id));
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new CountryController();
