class ValidateService {
  validateStrings(...strings) {
    console.log(strings);
    for (let string of strings) {
      if (!string) {
        throw new Error('Validation Error');
      }
    }
  }
  validateTent(tent) {
    if (tent.photoUrls?.length === 0) {
      throw new Error('No photos');
    }
    this.validateStrings(
      tent.article,
      tent.description,
      tent.manufacturer,
      tent.name,
      tent.price,
    );
    this.validateNumbers(
      tent.idColor,
      tent.idCountry,
      tent.idGarantee,
      tent.idMaterialArc,
      tent.idMaterialBottom,
      tent.idPlacecount,
      tent.idSeason,
      tent.price,
      tent.waterproofAwn,
      tent.waterproofBot,
    );
    this.validateParagraphs(tent.paragraphs);
  }
  validateNumbers(...numbers) {
    for (let number of numbers) {
      if (!Number(number)) {
        throw new Error('Validation Error');
      }
    }
  }
  validateParagraphs(paragraphs) {
    console.log(paragraphs);
    for (let paragraph of paragraphs) {
      if (!paragraph.header || !paragraph.content) {
        throw new Error('Validation Error');
      }
    }
  }
}

module.exports = new ValidateService();
