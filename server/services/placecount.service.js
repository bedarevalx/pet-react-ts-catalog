const db = require('../db');

class PlacecountServices {
  async createPlacecount(count) {
    if (!count) {
      throw new Error('Validation Error');
    }
    const newPlacecount = await db.query(
      'INSERT INTO placecount (count) values ($1) RETURNING *',
      [count],
    );
    return newPlacecount.rows[0];
  }
  async getlAllPlacecounts() {
    const allPlacecount = await db.query('SELECT * FROM placecount');
    return allPlacecount.rows;
  }
  async deletePlacecount(id) {
    try {
      await db.query('DELETE FROM placecount WHERE id = $1', [id]);
      return 'Success deleted';
    } catch (err) {
      return err;
    }
  }
}

module.exports = new PlacecountServices();
