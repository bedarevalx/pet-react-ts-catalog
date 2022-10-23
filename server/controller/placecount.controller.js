const placecountServices = require('../services/placecount.services');

class PlacecountController {
  async createPlacecount(req, res) {
    const { count } = req.body;
    const newPlacecount = await placecountServices.createPlacecount(count);
    res.json(newPlacecount);
  }
  async getlAllPlacecounts(req, res) {
    const allPlacecount = await placecountServices.getlAllPlacecounts();
    res.json(allPlacecount);
  }
  async deletePlacecount(req, res) {
    const { id } = req.body;
    res.json(await placecountServices.deletePlacecount(id));
  }
}

module.exports = new PlacecountController();
