class Poupanca extends Conta {
    constructor(numero, agencia) {
        super(numero, agencia)
        this.tipo = "poupança"
        this.taxa = 5
    }

    getTipo() {
        return this.tipo
    }

    calcularTaxa() {
        return this.saldo - this.taxa
    }
}