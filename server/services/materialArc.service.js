const db = require('../db');

class MaterialArcServices {
  async createMaterialArc(name) {
    if (!name || name.search(/\d/) !== -1) {
      throw new Error('Validation Error');
    }
    const newMaterialArc = await db.query(
      'INSERT INTO material_arc (name) values ($1) RETURNING *',
      [name],
    );
    return newMaterialArc.rows[0];
  }
  async getAllMaterialsArc() {
    const allMaterials = await db.query('SELECT * FROM material_arc');
    return allMaterials.rows;
  }
  async deleteMaterial(id) {
    try {
      await db.query('DELETE FROM material_arc WHERE id = $1', [id]);
      return 'Success deleted';
    } catch (err) {
      return err;
    }
  }
}

module.exports = new MaterialArcServices();
