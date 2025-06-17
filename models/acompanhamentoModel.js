const Database = require('../utils/database');

class Acompanhamento {
    #id;
    #descricao;

    constructor(id, descricao) {
        this.#id = id;
        this.#descricao = descricao;
    }

    get id() { return this.#id; }
    set id(value) { this.#id = value; }

    get descricao() { return this.#descricao; }
    set descricao(value) { this.#descricao = value; }

    async listar() {
        const db = new Database();
        const sql = 'SELECT * FROM tb_acompanhamento';
        const resultado = await db.ExecutaComando(sql, []);
        return resultado;
    }
}

module.exports = Acompanhamento;