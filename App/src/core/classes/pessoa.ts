// apenas para fins didaticos do ambiente sandbox

class Pessoa {
    nome: string;
    idade: number;
    dinheiro: number;
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
        this.dinheiro = 0;
    }
    exibir(): void {
        console.log(`Nome: ${this.nome} - Idade: ${this.idade}`);
    }
    saldo(): void {
        console.log(`Saldo: ${this.dinheiro}`);
    }
    depositar(valor: number): void {
        this.dinheiro += valor;
        this.saldo();
    }
    sacar(valor: number): void {
        if (this.dinheiro >= valor) {
            this.dinheiro -= valor;
            this.saldo();
        }
        else {
            console.log("Saldo insuficiente");
        }
    }
}

export default Pessoa;