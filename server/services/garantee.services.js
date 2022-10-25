const db = require('../db');

class GaranteeServices {
  async createGarantee(time) {
    const newContry = await db.query(
      'INSERT INTO garantee (time) values ($1) RETURNING *',
      [time],
    );
    return newContry.rows[0];
  }
  async getAllGaranties() {
    const garanties = await db.query('SELECT * FROM garantee');
    return garanties.rows;
  }
  async deleteGarantee(id) {
    try {
      await db.query('DELETE FROM garantee WHERE id = $1', [id]);
      return 'Success deleted';
    } catch (err) {
      return err;
    }
  }
}

module.exports = new GaranteeServices();
