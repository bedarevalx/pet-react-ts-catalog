const db = require('../db');
const paragraphServices = require('./paragraph.service');
const validateService = require('../services/validation.service');
const photoService = require('./photo.service');

class TentServices {
  async createTent(tent) {
    validateService.validateTent(tent);
    const {
      article,
      manufacturer,
      name,
      price,
      description,
      waterproofAwn,
      waterproofBot,
      idGarantee,
      idPlacecount,
      idCountry,
      idMaterialBottom,
      idMaterialArc,
      idSeason,
      idColor,
    } = tent;
    const newTent = await db.query(
      'INSERT INTO tent (waterproof_bot, waterproof_awn, id_garantee, id_placecount, id_country, id_material_bottom, id_material_arc, description, id_season, article, manufacturer, name, price, id_color) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *',
      [
        waterproofBot,
        waterproofAwn,
        idGarantee,
        idPlacecount,
        idCountry,
        idMaterialBottom,
        idMaterialArc,
        description,
        idSeason,
        article,
        manufacturer,
        name,
        price,
        idColor,
      ],
    );
    return newTent.rows[0];
  }
  async getlAllTents() {
    const allTents = await db.query('SELECT * FROM tent');
    return allTents.rows;
  }

  async getCards(step, page, name) {
    console.log(name);
    const containQuery = name ? `where name ilike '%${name}%'` : '';
    console.log(containQuery);
    const cards = await db.query(
      `SELECT id, name, price FROM tent ${containQuery} OFFSET $1 LIMIT $2`,
      [step * (page - 1), step],
    );
    const photoUrls = await Promise.all(
      cards.rows.map(async (tent) => await photoService.getPhotoUrls(tent.id)),
    );
    cards.rows.map((card, index) => {
      card.imagePath = photoUrls[index][0];
    });
    return cards.rows;
  }

  async getTent(id) {
    const tents = await db.query(
      'select tents.id, article, name, manufacturer, price, waterproof_awn as "waterproofAwn", waterproof_bot as "waterproofBot",  id_garantee as "idGarantee", id_placecount as "idPlacecount", id_country as "idCountry", id_material_bottom as "idMaterialBottom", id_material_arc as "idMaterialArc", id_season as "idSeason", description, id_color as "idColor" from tent as tents where tents.id = $1',
      [id],
    );
    const paragraphs = await paragraphServices.getParagraphsById(id);
    const photoUrls = await photoService.getPhotoUrls(id);
    tents.rows[0].paragraphs = paragraphs;
    tents.rows[0].photoUrls = photoUrls;
    return tents.rows[0];
  }
  async deleteTent(id) {
    try {
      await db.query('DELETE FROM tent WHERE id = $1', [id]);
      await photoService.deletePhotos(id);
      return 'Success deleted';
    } catch (err) {
      return err;
    }
  }
  async editTent(id, tent) {
    // console.log(tent);
    validateService.validateTent(tent);
    const paragraphs = await paragraphServices.updateParagraphsById(
      id,
      tent.paragraphs,
    );
    const updatedTent = await db.query(
      'update tent set name = $1, description = $2, manufacturer = $3, article= $4, id_season = $5, id_material_arc = $6, id_material_bottom = $7, id_country = $8, id_placecount = $9, id_garantee=$10, price = $11, id_color= $12 where id = $13 returning *',
      [
        tent.name,
        tent.description,
        tent.manufacturer,
        tent.article,
        tent.idSeason,
        tent.idMaterialArc,
        tent.idMaterialBottom,
        tent.idCountry,
        tent.idPlacecount,
        tent.idGarantee,
        tent.price,
        tent.idColor,
        id,
      ],
    );
    photoService.savePhotos(id, tent.photoUrls);
    updatedTent.rows[0].paragraphs = paragraphs;
    return updatedTent.rows[0];
  }
  async getTotalPages(step, name) {
    const containQuery = name ? `where name ilike '%${name}%'` : '';
    const totalCount = await db.query(
      `SELECT count(*) FROM tent ${containQuery}`,
    );
    const totalPages = Math.ceil(totalCount.rows[0].count / step);
    return totalPages;
  }
}

module.exports = new TentServices();
