const seasonServices = require('../services/season.service');

class SeasonController {
  async createSeason(req, res) {
    try {
      const { year } = req.body;
      const newSeason = await seasonServices.createSeason(year);
      res.json(newSeason, 201);
    } catch (error) {
      console.log(error);
      res.status(422).json('Validation Error!');
    }
  }
  async getlAllSeasons(req, res) {
    try {
      const allSeason = await seasonServices.getlAllSeasons();
      res.json(allSeason);
    } catch (error) {
      console.log(error);
    }
  }
  async deleteSeason(req, res) {
    try {
      const { id } = req.body;
      res.json(await seasonServices.deleteSeason(id));
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new SeasonController();
