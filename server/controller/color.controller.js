const colorServices = require('../services/color.service');

class ColorController {
  async createColor(req, res) {
    const { name } = req.body;
    const newColor = await colorServices.createColor(name);
    res.json(newColor, 201);
  }
  async getAllColors(req, res) {
    const countries = await colorServices.getAllColors();
    res.json(countries);
  }
  async deleteColor(req, res) {
    const { id } = req.body;
    res.json(await colorServices.deleteColor(id));
  }
}

module.exports = new ColorController();
