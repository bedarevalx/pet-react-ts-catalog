const db = require('../db');

class CountryServices {
  async createCountry(name) {
    if (!name || name.search(/\d/) !== -1) {
      throw new Error('Validation Error');
    }
    const newContry = await db.query(
      'INSERT INTO country (name) values ($1) RETURNING *',
      [name],
    );
    return newContry.rows[0];
  }
  async getAllCountries() {
    const countries = await db.query('SELECT * FROM country');
    return countries.rows;
  }
  async deleteCountry(id) {
    try {
      await db.query('DELETE FROM country where id = $1', [id]);
      return 'Success deleted';
    } catch (err) {
      return err;
    }
  }
}

module.exports = new CountryServices();
