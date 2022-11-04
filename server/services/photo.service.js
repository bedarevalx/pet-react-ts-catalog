const db = require('../db');
const fs = require('fs');
const { readdir } = require('node:fs/promises');

class PhotoService {
  async getPhotoUrls(tentId) {
    const imagesUrls = [];
    const files = await readdir('static/' + tentId);
    for (const file of files) imagesUrls.push(`picture/${tentId}/${file}`);
    return imagesUrls;
  }
  async savePhotos(tentId, photos) {
    console.log(photos);
    if (!fs.existsSync('static/' + tentId)) {
      fs.mkdirSync('static/' + tentId);
    } else {
      fs.readdirSync('static/' + tentId).forEach((f) =>
        fs.rmSync(`${'static/' + tentId}/${f}`),
      );
    }
    const responses = photos.map(async (photo, index) => {
      fs.writeFileSync(
        `static/${tentId}/${index}.jpeg`,
        photo.replace(/^data:image\/jpeg;base64,/, ''),
        'base64',
        function (err) {},
      );
    });
  }
  async deletePhotos(tentId) {
    fs.rmSync('static/' + tentId, { recursive: true });
    // fs.rm('static/' + tentId, { recursive: true }, () => console.log('done'));
  }
}

module.exports = new PhotoService();
