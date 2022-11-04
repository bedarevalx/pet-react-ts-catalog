const materialArcServices = require('../services/materialArc.services');

class MaterialArcController {
  async createMaterialArc(req, res) {
    const { name } = req.body;
    const newMaterialArc = await materialArcServices.createMaterialArc(name);
    console.log(newMaterialArc);
    res.json(newMaterialArc, 201);
  }
  async getAllMaterialsArc(req, res) {
    const allMaterials = await materialArcServices.getAllMaterialsArc();
    res.json(allMaterials);
  }
  async deleteMaterial(req, res) {
    const { id } = req.body;
    res.json(await materialArcServices.deleteMaterial(id));
  }
}

module.exports = new MaterialArcController();
