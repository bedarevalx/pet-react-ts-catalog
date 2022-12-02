const tentServices = require('../services/tent.service');
const paragraphServices = require('../services/paragraph.service');
const photoService = require('../services/photo.service');
class TentController {
  async createTent(req, res) {
    try {
      const { tent } = req.body;
      const newTent = await tentServices.createTent(tent);
      photoService.savePhotos(newTent.id, tent.photoUrls);
      const newParagraphs = await paragraphServices.createParagraphs(
        newTent.id,
        tent.paragraphs,
      );
      newTent.paragraphs = newParagraphs;

      res.json(newTent, 201);
    } catch (error) {
      console.log(error);
      res.status(422).json('Validation Error!');
    }
  }
  async getTent(req, res) {
    try {
      const { id } = req.params;
      const tent = await tentServices.getTent(id);
      res.json(tent);
    } catch (error) {
      console.log(error);
    }
  }
  async getlAllTents(req, res) {
    try {
      const allTents = await tentServices.getlAllTents();
      res.json(allTents);
    } catch (error) {
      console.log(error);
    }
  }
  async getlAllCards(req, res) {
    try {
      const { page } = req.query;
      const paginationStep = 8;
      const totalPages = await tentServices.getTotalPages(paginationStep);
      const allTents = await tentServices.getCards(paginationStep, page);

      res.json({ data: allTents, totalPages });
    } catch (error) {
      console.log(error);
      res.status(422).json('Validation Error!');
    }
  }
  async deleteTent(req, res) {
    try {
      const { id } = req.query;
      res.json(await tentServices.deleteTent(id, 204));
    } catch (error) {
      console.log(error);
      res.status(422).json('Validation Error!');
    }
  }

  async editTent(req, res) {
    try {
      const { id } = req.params;
      const { tent } = req.body;
      const updatedTent = await tentServices.editTent(id, tent);
      res.json(updatedTent, 200);
    } catch (error) {
      console.log(error);
      res.status(422).json('Validation Error!');
    }
  }
}

module.exports = new TentController();
