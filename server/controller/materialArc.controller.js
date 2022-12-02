const materialArcServices = require('../services/materialArc.service');

class MaterialArcController {
  async createMaterialArc(req, res) {
    try {
      const { name } = req.body;
      const newMaterialArc = await materialArcServices.createMaterialArc(name);
      res.json(newMaterialArc, 201);
    } catch (error) {
      console.log(error);
      res.status(422).json('Validation Error!');
    }
  }
  async getAllMaterialsArc(req, res) {
    try {
      const allMaterials = await materialArcServices.getAllMaterialsArc();
      res.json(allMaterials);
    } catch (error) {
      console.log(error);
    }
  }
  async deleteMaterial(req, res) {
    try {
      const { id } = req.body;
      res.json(await materialArcServices.deleteMaterial(id));
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new MaterialArcController();
