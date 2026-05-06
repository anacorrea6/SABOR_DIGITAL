const ProdutoService = require('../services/produtoService')

class produtoController{
    async listar(req,res){
        try{
            const resultado = await ProdutoService.listarProduto()
            res.json(resultado)

        }catch (erro){
            res.status(500).json({
                sucesso: false,
                mensagem: error.menssagem || "Erro interno no servidor",
                erro:erro
            })
        }
        
    }

    async buscarPorId(req,res) {
        try {
            const resultado = await ProdutoService.buscarProdutoPorId(req.params.id)
            
        } catch (erro) {

        }
    }


async cadastrar(req,res) {
    try{
        const resultado = await ProdutoService.cadastrarProduto(req.params.id,req.body)
        res.status(201).json(resultado)
    }catch (erro){
         res.status(500).json({
            sucesso: false,
            mensagem: error.menssagem || "Erro interno no servidor",
            erro:erro
         })
    }
}

    async atualizar (req,res){
        try{
            const resultado = await ProdutoService.atualizarProduto(req.params.id,req.body)
            res.status(200).json(resultado)
        }catch (erro){
            res.status(500).json({
            sucesso: false,
            mensagem: error.menssagem || "Erro interno no servidor",
            erro:erro
         })
        }
    }
    
        async deletar(req,res){
       try{
        const resultado = await ProdutoService.deletarProduto(req.params.id,req.body)
        res.status(200).json(resultado)
    }catch (erro){
       res.status(500).json({
            sucesso: false,
            mensagem: error.menssagem || "Erro interno no servidor",
            erro:erro 
    }) 
    }
}
}

modeule.exports = new produtoController()