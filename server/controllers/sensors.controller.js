const readFileServices = require('../services/readFile');
const readFolderServices = require('../services/readFolder');
require('dotenv').config();

const getSensorsData = async (req, res) => {
  const data = await readFileServices.readCSVFile(
    process.env.FILE_ID + req.room.roomId,
  );
  res.status(200).json(data);
};

const getRooms = async (req, res) => {
  const rooms = await readFolderServices.getRooms();
  res.status(200).json({ rooms });
};

module.exports.getSensorsData = getSensorsData;
module.exports.getRooms = getRooms;
