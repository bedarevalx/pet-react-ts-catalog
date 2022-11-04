const seasonServices = require('../services/season.service');

class SeasonController {
  async createSeason(req, res) {
    const { year } = req.body;
    const newSeason = await seasonServices.createSeason(year);
    res.json(newSeason, 201);
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
