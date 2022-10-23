const tentServices = require('../services/tent.services');
const descriptionServices = require('../services/description.services');
const paragraphServices = require('../services/paragraph.services');
class TentController {
  async createTent(req, res) {
    const {
      article,
      manufacturer,
      name,
      price,
      paragraphs,
      description,
      waterproofBot,
      waterproofAwn,
      idGarantee,
      idPlacecount,
      idCountry,
      idMaterialBottom,
      idMaterialArc,
      idSeason,
    } = req.body;
    const newDescription = await descriptionServices.createDescription(
      description,
    );
    const newParagraphs = await paragraphServices.createParagraphs(
      newDescription.id,
      paragraphs,
    );
    const newTent = await tentServices.createTent(
      article,
      manufacturer,
      name,
      price,
      newDescription.id,
      waterproofAwn,
      waterproofBot,
      idGarantee,
      idPlacecount,
      idCountry,
      idMaterialBottom,
      idMaterialArc,
      idSeason,
    );
    newTent.description = newDescription;
    newTent.paragraphs = newParagraphs;
    res.json(newTent);
  }
  async getlAllTents(req, res) {
    const allTents = await tentServices.getlAllTents();
    res.json(allTents);
  }
  async deleteTent(req, res) {
    const { id } = req.body;
    res.json(await tentServices.deleteTent(id));
  }
}

module.exports = new TentController();
