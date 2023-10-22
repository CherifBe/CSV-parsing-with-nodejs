const router = require('express').Router();
const sensorsController = require('../controllers/sensors.controller');
const authorization = require('../middlewares/authorization.mid');

router.get('/room', authorization, async (req, res, next) => {
  try {
    await sensorsController.getSensorsData(req, res, next);
  } catch (error) {
    next(error);
  }
});

router.get('/rooms', async (req, res, next) => {
  try {
    await sensorsController.getRooms(req, res, next);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
