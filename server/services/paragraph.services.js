const db = require('../db');

class ParagraphServices {
  async createParagraphs(descriptionId, paragraphs) {
    const newParagraphs = [];
    paragraphs.map(async (paragraph) => {
      newParagraphs.push(
        await db.query(
          'INSERT INTO paragraph (id_description, content, title) values ($1,$2, $3) RETURNING *',
          [descriptionId, paragraph.content, paragraph.title],
        ).rows[0],
      );
    });
    return newParagraphs;
  }
}

module.exports = ParagraphServices;
