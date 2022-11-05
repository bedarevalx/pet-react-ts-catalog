const db = require('../db');

class MaterialBottomServices {
  async createMaterialBottom(name) {
    const newMaterialBottom = await db.query(
      'INSERT INTO material_bottom (name) values ($1) RETURNING *',
      [name],
    );
    return newMaterialBottom.rows[0];
  }
  async getAllMaterialsBottom() {
    const allMaterials = await db.query('SELECT * FROM material_bottom');
    return allMaterials.rows;
  }
  async deleteMaterial(id) {
    try {
      await db.query('DELETE FROM material_bottom WHERE id = $1', [id]);
      return 'Success deleted';
    } catch (err) {
      return err;
    }
  }
}

module.exports = new MaterialBottomServices();
