const Database = require('../utils/database');

class Pao {
    #id;
    #pao_descricao;

    get id() { return this.#id; }
    set id(value) { this.#id = value; }

    get pao_descricao() { return this.#pao_descricao; }
    set pao_descricao(value) { this.#pao_descricao = value; }

    constructor(id, pao_descricao) {
        this.#id = id;
        this.#pao_descricao = pao_descricao;
    }

    async listar() {
        const db = new Database();
        const sql = 'SELECT * FROM tb_pao';
        const resultado = await db.ExecutaComando(sql, []);
        return resultado;
    }
}

module.exports = Pao;