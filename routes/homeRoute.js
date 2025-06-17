const express = require('express');
const HomeController = require('../controllers/homeController');

const router = express.Router();

let ctrl = new HomeController();
router.get('/', ctrl.homeView);
router.post('/cadastrar', ctrl.cadastrar);

module.exports = router;