const db = require('../db');

class ParagraphServices {
  async createParagraphs(descriptionId, paragraphs) {
    const newParagraphs = [];
    paragraphs.map(async (paragraph) => {
      newParagraphs.push(
        await db.query(
          'INSERT INTO paragraph (id_description, content) values ($1,$2) RETURNING *',
          [descriptionId, paragraph.id],
        ).rows[0],
      );
    });
    return newParagraphs;
  }
}

module.exports = ParagraphServices;
