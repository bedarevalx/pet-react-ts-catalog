const db = require('../db');

class TentServices {
  async createTent(
    article,
    manufacturer,
    name,
    price,
    idDescription,
    waterproofAwn,
    waterproofBot,
    idGarantee,
    idPlacecount,
    idCountry,
    idMaterialBottom,
    idMaterialArc,
    idSeason,
  ) {
    const newTent = await db.query(
      'INSERT INTO tent (waterproof_bot, waterproof_awn,id_garantee, id_placecount, id_country,id_material_bottom, id_material_arc, id_description, id_season, article, manufacturer, name, price,) values ($1, $2, $3, $4, $5, $6, $7,$8,$9, $10, $11, $12, $13) RETURNING *',
      [
        waterproofBot,
        waterproofAwn,
        idGarantee,
        idPlacecount,
        idCountry,
        idMaterialBottom,
        idMaterialArc,
        idDescription,
        idSeason,
        article,
        manufacturer,
        name,
        price,
      ],
    );
    return newTent.rows[0];
  }
  async getlAllTents() {
    const allTents = await db.query('SELECT * FROM tent');
    return allTents.rows;
  }
  async deleteTent(id) {
    try {
      await db.query('DELETE FROM tent WHERE id = $1', [id]);
      return 'Success deleted';
    } catch (err) {
      return err;
    }
  }
}

module.ezxports = new TentServices();
