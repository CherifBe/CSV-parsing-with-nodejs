const readFolderServices = require('../services/readFolder');

const authorization = async (req, res, next) => {
  try {
    const rooms = await readFolderServices.getRooms();
    if (!rooms.includes(req.query.room)) { // CHECK SI ROOMID DE LA REQUETE CORRESPOND A UN NOM DE FICHIER
      return res.status(400).json({ message: 'Room not found' });
    }
    req.room = {
      roomId: req.query.room,
    };

    next();
  } catch (error) {
    next('=> request not valid');
  }
};

module.exports = authorization;
