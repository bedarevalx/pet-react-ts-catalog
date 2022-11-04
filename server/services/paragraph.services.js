const db = require('../db');

class ParagraphServices {
  async createParagraphs(tentId, paragraphs) {
    const responses = await Promise.all(
      paragraphs.map(
        async (paragraph) =>
          await db.query(
            'INSERT INTO paragraph (id_tent, content, header) values ($1,$2, $3) RETURNING *',
            [tentId, paragraph.content, paragraph.header],
          ),
      ),
    );
    return responses.map((response) => response.rows[0]);
  }

  async getParagraphsById(tentId) {
    const paragraphs = await db.query(
      'select paragr.content, paragr.header from paragraph as paragr where paragr.id_tent = $1 ',
      [tentId],
    );
    return paragraphs.rows;
  }

  async updateParagraphsById(tentId, paragraphs) {
    await db.query('delete from paragraph where id_tent = $1', [tentId]);
    const newParagraphs = this.createParagraphs(tentId, paragraphs);

    return newParagraphs;
  }
}

module.exports = new ParagraphServices();
