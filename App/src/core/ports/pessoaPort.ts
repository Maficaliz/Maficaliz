import Pessoa from "../classes/pessoa";

const pessoaPort = {
    criar: (nome: string, idade: number) => new Pessoa(nome, idade),
    exibir: (pessoa: Pessoa) => pessoa.exibir(),
    depositar: (pessoa: Pessoa, valor: number) => pessoa.depositar(valor),
    sacar: (pessoa: Pessoa, valor: number) => pessoa.sacar(valor),
    saldo: (pessoa: Pessoa) => pessoa.saldo()
};

export default pessoaPort;