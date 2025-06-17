const Database = require('../utils/database');

class Queijo {
    #id;
    #descricao;

    get id() { return this.#id; }
    set id(value) { this.#id = value; }

    get descricao() { return this.#descricao; }
    set descricao(value) { this.#descricao = value; }

    constructor(id, descricao) {
        this.#id = id;
        this.#descricao = descricao;
    }

    async listar() {
        const db = new Database();
        const sql = 'SELECT * FROM tb_queijo';
        const resultado = await db.ExecutaComando(sql, []);
        return resultado;
    }
}

module.exports = Queijo;