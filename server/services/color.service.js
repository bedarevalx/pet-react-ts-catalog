const db = require('../db');

class ColorServices {
  async createColor(name) {
    if (!name || name.search(/\d/) !== -1) {
      throw new Error('Validation Error');
    }
    const newColor = await db.query(
      'INSERT INTO color (name) values ($1) RETURNING *',
      [name],
    );
    return newColor.rows[0];
  }
  async getAllColors() {
    const colors = await db.query('SELECT * FROM color');
    return colors.rows;
  }
  async deleteColor(id) {
    try {
      await db.query('DELETE FROM color where id = $1', [id]);
      return 'Success deleted';
    } catch (err) {
      return err;
    }
  }
}

module.exports = new ColorServices();
