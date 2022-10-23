const seasonServices = require('../services/season.services');

class SeasonController {
  async createSeason(req, res) {
    const { year } = req.body;
    const newSeason = await seasonServices.createSeason(year);
    res.json(newSeason);
  }
  async getlAllSeasons(req, res) {
    const allSeason = await seasonServices.getlAllSeasons();
    res.json(allSeason);
  }
  async deleteSeason(req, res) {
    const { id } = req.body;
    res.json(await seasonServices.deleteSeason(id));
  }
}

module.exports = new SeasonController();
