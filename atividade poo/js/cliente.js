class Cliente {

    constructor(nome, endereco) {
        this.nome = nome
        this.endereco = endereco
        this.conta = []
    }

    getNome() {
        return this.nome
    }
    
    setNome(nome) {
        this.nome = nome
    }

    getEndereco() {
        return this.endereco
    }
    
    setEndereco(endereco) {
        this.endereco = endereco
    }

    getConta() {
        return this.conta
    }
    
    adicionarConta(conta) {
        this.conta.push(conta)
    }
}