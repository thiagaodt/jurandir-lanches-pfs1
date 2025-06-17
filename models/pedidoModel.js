const Database = require('../utils/database');

class Pedido {

    #id
    #nome
    #endereco
    #pao_id
    #que_id
    #ham_id
    #aco_id

    get id() { return this.#id } set id (id) { this.#id = id } 
    get nome() { return this.#nome } set nome (nome) { this.#nome = nome }
    get endereco() { return this.#endereco } set endereco (endereco) { this.#endereco = endereco }
    get pao_id() { return this.#pao_id } set pao_id (pao_id) { this.#pao_id = pao_id }
    get que_id() { return this.#que_id } set que_id (que_id) { this.#que_id = que_id }
    get ham_id() { return this.#ham_id } set ham_id (ham_id) { this.#ham_id = ham_id }
    get aco_id() { return this.#aco_id } set aco_id (aco_id) { this.#aco_id = aco_id }

    constructor (id, nome, endereco, pao_id, que_id, ham_id, aco_id) {
        this.#id = id;
        this.#nome = nome;
        this.#endereco = endereco;
        this.#pao_id = pao_id;  
        this.#que_id = que_id;
        this.#ham_id = ham_id;
        this.#aco_id = aco_id;
    }

    async listar() {
        const db = new Database();
        const sql = `
            SELECT
                p.ped_id AS id, 
                p.ped_nome AS nome,
                p.ped_endereco AS endereco,
                pao.pao_descricao AS pao,
                queijo.que_descricao AS queijo,
                hamburguer.ham_descricao AS hamburguer,
                acompanhamento.aco_descricao AS acompanhamento
            FROM tb_pedido p
            JOIN tb_pao pao ON p.pao_id = pao.pao_id
            JOIN tb_queijo queijo ON p.que_id = queijo.que_id
            JOIN tb_hamburguer hamburguer ON p.ham_id = hamburguer.ham_id
            JOIN tb_acompanhamento acompanhamento ON p.aco_id = acompanhamento.aco_id
        `;
        const resultado = await db.ExecutaComando(sql, []);
        return resultado;
    }

    async cadastrar() {
        const db = new Database();
        const sql = `
            INSERT INTO tb_pedido (ped_nome, ped_endereco, pao_id, que_id, ham_id, aco_id)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const parametros = [this.#nome, this.#endereco, this.#pao_id, this.#que_id, this.#ham_id, this.#aco_id];
        const resultado = await db.ExecutaComando(sql, parametros);
        return resultado;
    }

    
    async excluir(id) {
        const db = new Database();
        const sql = `DELETE FROM tb_pedido WHERE ped_id = ?`
        let resultado = await db.ExecutaComandoNonQuery(sql, [id]);
        return resultado.affectedRows > 0;
    }

}

module.exports = Pedido