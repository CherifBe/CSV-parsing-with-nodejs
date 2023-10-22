const fs = require('fs');

const getRooms = async () => {
  const directoryPath = './data';
  const files = fs.readdirSync(directoryPath);
  const CSVFiles = files.filter((f) => f.includes('.csv') && f.length > 2);
  const rooms = CSVFiles.map((fileName) => {
    const fileNameWithoutExtension = fileName.replace('.csv', '');
    return fileNameWithoutExtension.slice(-3);
  });
  return rooms;
};

module.exports.getRooms = getRooms;
