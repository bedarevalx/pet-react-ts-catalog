const placecountServices = require('../services/placecount.service');

class PlacecountController {
  async createPlacecount(req, res) {
    try {
      const { count } = req.body;
      const newPlacecount = await placecountServices.createPlacecount(count);
      res.json(newPlacecount, 201);
    } catch (error) {
      console.log(error);
      res.status(422).json('Validation Error!');
    }
  }
  async getlAllPlacecounts(req, res) {
    try {
      const allPlacecount = await placecountServices.getlAllPlacecounts();
      res.json(allPlacecount);
    } catch (error) {
      console.log(error);
    }
  }
  async deletePlacecount(req, res) {
    try {
      const { id } = req.body;
      res.json(await placecountServices.deletePlacecount(id));
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new PlacecountController();
