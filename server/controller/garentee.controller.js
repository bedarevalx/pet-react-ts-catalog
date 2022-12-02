const garanteeServices = require('../services/garantee.service');

class GaranteeController {
  async createGarantee(req, res) {
    try {
      const { time } = req.body;
      const newGarantee = await garanteeServices.createGarantee(time);
      res.json(newGarantee, 201);
    } catch (error) {
      console.log(error);
      res.status(422).json('Validation Error!');
    }
  }
  async getAllGaranties(req, res) {
    try {
      const allGaranties = await garanteeServices.getAllGaranties();
      res.json(allGaranties);
    } catch (error) {
      console.log(error);
    }
  }
  async deleteGarantee(req, res) {
    try {
      const { id } = req.body;
      res.json(await garanteeServices.deleteGarantee(id));
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new GaranteeController();
