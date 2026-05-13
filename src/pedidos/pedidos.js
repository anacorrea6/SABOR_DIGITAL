const pool = require('../controllers/produtoController')

class pedido{
    async listarPedido() {
        const [resultado] = await pool.query('SELECT * FROM pedidos')

        return resultado
    }
   async buscarPedidoPorId(id) {
        const [resultado] = await pool.query(
            'SELECT * FROM pedidos WHERE id = ?',
            [id]
        )

        return resultado
    }

    async cadastrarPedido(dados) {
        const [resultado] = await pool.query(
            'INSERT INTO pedidos SET ?',
            [dados]
        )

        return {
            sucesso: true,
            mensagem: "Pedido cadastrado com sucesso",
            id: resultado.insertId
        }
    } 
     

    async atualizarPedido(id, dados) {
        const [resultado] = await pool.query(
            'UPDATE pedidos SET ? WHERE id = ?',
            [dados, id]
        )

        return {
            sucesso: true,
            mensagem: "Pedido atualizado com sucesso"
        }
    }

    async deletarPedido(id) {
        const [resultado] = await pool.query(
            'DELETE FROM pedidos WHERE id = ?',
            [id]
        )

        return {
            sucesso: true,
            mensagem: "Pedido deletado com sucesso"
        }
    }
}

module.exports = new pedido()