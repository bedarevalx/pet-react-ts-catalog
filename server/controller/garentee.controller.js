const garanteeServices = require('../services/garantee.services');

class GaranteeController {
  async createGarantee(req, res) {
    const { time } = req.body;
    const newGarantee = await garanteeServices.createGarantee(time);
    res.json(newGarantee);
  }
  async getAllGaranties(req, res) {
    const allGaranties = await garanteeServices.getAllGaranties();
    res.json(allGaranties);
  }
  async deleteGarantee(req, res) {
    const { id } = req.body;
    res.json(await garanteeServices.deleteGarantee(id));
  }
}

module.exports = new GaranteeController();
