const db = require('../db');

class DescriptionServices {
  async createDescription(content) {
    const newDescription = await db.query(
      'INSERT INTO description (content) values ($1) RETURNING *',
      [content],
    );
    return newDescription.rows[0];
  }
}

module.exports = new DescriptionServices();
