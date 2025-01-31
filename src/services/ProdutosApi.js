import { HTTPClient } from "./client";



const ProdutosApi = {

    async obterProdutoAsync(produtoId) {
        try {
            const response = await HTTPClient.get(`/Produto/Obter/${produtoId}?ativo=true`);
            
            return response.data;
            
        } catch (error) {
            console.error("Erro ao obter usuário:", error);
            throw error;
        }
    },
    async listarProdutosAsync(ativos) {
      
        const response = await HTTPClient.get(`/Produto/Listar?ativos=${ativos}`);
        
        return response.data;

    },
    async criarProdutoAsync(nome, preco, descricao) {
        try {

            const produtoCriar = {

                Nome: nome,
                preco: preco,
                descricao: descricao
            };
            const response = await HTTPClient.post(`/Produto/Criar`, produtoCriar);
            return response.data;
        } catch (error) {
            console.error("Erro ao criar um produto:", error);
            throw error;
        }
    },
    async atualizarProdutoAsync(id, nome, preco, descricao) {
        try {

            const ProdutoAtualizar = {
                Id: id,
                Nome: nome,
                preco: preco,
                descricao: descricao

            };
            console.log();
            const response = await HTTPClient.put(`/Produto/Atualizar`, ProdutoAtualizar);
            return response.data;
        } catch (error) {
            console.error("Erro ao atualizar produto:", error);
            throw error;
        }
    },
    async deletarProdutoAsync(produtoId) {
        try {
            const response = await HTTPClient.delete(`/Produto/Deletar/${produtoId}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao deletar produto:", error);
            throw error;
        }
    },

    async restaurarProdutoAsync(produtoId) {
        try {
            const response = await HTTPClient.put(`/Produto/Restaurar/${produtoId}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao restaurar usuário:", error);
            throw error;
        }
    },



}

export default ProdutosApi;