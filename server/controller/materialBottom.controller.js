const materialBottomServices = require('../services/materialBottom.service');

class MaterialBottomController {
  async createMaterialBottom(req, res) {
    try {
      const { name } = req.body;
      const newMaterialBottom =
        await materialBottomServices.createMaterialBottom(name);
      res.json(newMaterialBottom, 201);
    } catch (error) {
      console.log(error);
      res.status(422).json('Validation Error!');
    }
  }
  async getAllMaterialsBottom(req, res) {
    try {
      const allMaterials = await materialBottomServices.getAllMaterialsBottom();
      res.json(allMaterials);
    } catch (error) {
      console.log(error);
    }
  }
  async deleteMaterial(req, res) {
    try {
      const { id } = req.body;
      res.json(await materialBottomServices.deleteMaterial(id));
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new MaterialBottomController();
