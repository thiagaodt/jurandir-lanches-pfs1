const PedidoModel = require('../models/pedidoModel');
const PaoModel = require('../models/paoModel');
const QueijoModel = require('../models/queijoModel');
const HamburguerModel = require('../models/hamburguerModel');
const AcompanhamentoModel = require('../models/acompanhamentoModel');

class HomeController {

    async homeView (req, res) {
        const paoModel = new PaoModel();
        let paos = await paoModel.listar();
        const queijoModel = new QueijoModel();
        let queijos = await queijoModel.listar();
        console.log('queijos entrando cadastro: ', queijos);
        const hamburguerModel = new HamburguerModel();
        let hamburguers = await hamburguerModel.listar();
        const acompanhamentoModel = new AcompanhamentoModel();
        let acompanhamentos = await acompanhamentoModel.listar()
        res.render('home/index', { layout: false, paos, queijos, hamburguers, acompanhamentos });
    }

    async cadastrar(req, res) {
        const { nome, endereco, pao_id, que_id, ham_id, aco_id } = req.body;
        console.log('pedido entrando cadastro: ', req.body)
        try {
            const pedidoModel = new PedidoModel(nome, endereco, pao_id, que_id, ham_id, aco_id);
            await pedidoModel.cadastrar();
            res.status(201).json({ message: 'Pedido cadastrado com sucesso!' });
        } catch (error) {
            console.error('Erro ao cadastrar pedido:', error);
            res.status(500).json({ message: 'Erro ao cadastrar pedido.' });
        }
    }

}


module.exports = HomeController;