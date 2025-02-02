import { Money } from "../types/user";

class User {
    public name: string;
    private money: Money = { clear: 0, dirty: 0 };

    constructor(name: string = '') {
        this.name = name;
    }

    public getName = () => this.name;

    // Getters organizados como objeto
    public getMoney = {
        clear: () => this.money.clear,
        dirty: () => this.money.dirty
    };

    // Setters organizados como objeto
    public setMoney = {
        clear: (amount: number) => { this.money.clear = amount; },
        dirty: (amount: number) => { this.money.dirty = amount; }
    };

    // Métodos para adicionar dinheiro
    public addMoney = {
        clear: (amount: number) => { this.money.clear += amount; },
        dirty: (amount: number) => { this.money.dirty += amount; }
    };

    // Métodos para remover dinheiro (sem deixar negativo)
    public removeMoney = {
        clear: (amount: number) => { this.money.clear = Math.max(0, this.money.clear - amount); },
        dirty: (amount: number) => { this.money.dirty = Math.max(0, this.money.dirty - amount); }
    };

    // Lavagem de dinheiro
    public cleanMoney = (amount: number) => {
        const toClean = Math.min(this.money.dirty, amount);
        this.money.clear += toClean;
        this.money.dirty -= toClean;
    };
}

export default User;
