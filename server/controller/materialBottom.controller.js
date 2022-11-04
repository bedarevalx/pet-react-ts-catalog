const materialBottomServices = require('../services/materialBottom.services');

class MaterialBottomController {
  async createMaterialBottom(req, res) {
    const { name } = req.body;
    const newMaterialBottom = await materialBottomServices.createMaterialBottom(
      name,
    );
    console.log(newMaterialBottom);
    res.json(newMaterialBottom, 201);
  }
  async getAllMaterialsBottom(req, res) {
    const allMaterials = await materialBottomServices.getAllMaterialsBottom();
    res.json(allMaterials);
  }
  async deleteMaterial(req, res) {
    const { id } = req.body;
    res.json(await materialBottomServices.deleteMaterial(id));
  }
}

module.exports = new MaterialBottomController();
