const router = require('express').Router();
const dataController = require('../controller/data.controller');

router.get('/', dataController.get);
router.post('/', dataController.add);

module.exports = router