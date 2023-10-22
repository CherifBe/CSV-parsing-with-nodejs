const csv = require('csv-parser');
const fs = require('fs');
const util = require('util');

const readCSVFile = async (filename) => {
  const filePath = `./data/${filename}.csv`;
  fs.access(filePath, fs.constants.F_OK, (err) => { // VERIFIE QUE FILENAME EXISTE
    if (err) {
      return [];
    }
  });
  let data = [];
  await new Promise((resolve, reject) => {
    const res = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        res.push(row);
      })
      .on('end', () => {
        console.log('Lecture du fichier CSV terminée.');
        resolve(res);
      });
  })
    .then((res) => {
      data = res;
    }).catch((err) => console.log(err));

  return data;
};

module.exports.readCSVFile = readCSVFile;
