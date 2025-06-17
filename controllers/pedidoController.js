const PedidoModel = require('../models/pedidoModel');
const PaoModel = require('../models/paoModel');
const QueijoModel = require('../models/queijoModel');
const HamburguerModel = require('../models/hamburguerModel');
const AcompanhamentoModel = require('../models/acompanhamentoModel');

class PedidoController {

    async listagemView(req, res) {
        const pedidoModel = new PedidoModel();
        let pedidos = await pedidoModel.listar();
        res.render('Pedido/listagem', { pedidos })
    }

    async excluir(req, res) {
        console.log('id entrando exclusao: ', req.params.id);
        const id = req.params.id;
        let msg = '';
        const pedidoModel = new PedidoModel();
        let resultado = await pedidoModel.excluir(id);
        if (resultado) {
            msg = 'Pedido excluído com sucesso'
        }
        else {
            msg = 'Erro ao excluir'
        }
        res.send({ok: resultado, msg: msg})
    }

}

module.exports = PedidoController;