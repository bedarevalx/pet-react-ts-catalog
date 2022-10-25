const db = require('../db');

class SeasonServices {
  async createSeason(year) {
    const newSeason = await db.query(
      'INSERT INTO season (year) values ($1) RETURNING *',
      [year],
    );
    return newSeason.rows[0];
  }
  async getlAllSeasons() {
    const allSeasons = await db.query('SELECT * FROM season');
    return allSeasons.rows;
  }
  async deleteSeason(id) {
    try {
      await db.query('DELETE FROM season WHERE id = $1', [id]);
      return 'Success deleted';
    } catch (err) {
      return err;
    }
  }
}

module.exports = new SeasonServices();
