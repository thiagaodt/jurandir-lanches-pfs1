const express = require('express');
const PedidoController = require('../controllers/pedidoController');

const router = express.Router();

let ctrl = new PedidoController();
router.get('/', ctrl.listagemView);
router.post('/deletar/:id', ctrl.excluir)

module.exports = router;