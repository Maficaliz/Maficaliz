import moneyPort from "../core/ports/moneyPort";

class MoneyMiddleware {
  private user;

  constructor(user) {
    this.user = user;
  }

  getBalance(type: "clear" | "dirty"): number {
    return moneyPort[type].get(this.user);
  }

  addMoney(type: "clear" | "dirty", amount: number): void {
    moneyPort[type].add(this.user, amount);
  }

  removeMoney(type: "clear" | "dirty", amount: number): void {
    moneyPort[type].remove(this.user, amount);
  }

  cleanMoney(amount: number): void {
    moneyPort.actions.clean(this.user, amount);
  }
}

export default MoneyMiddleware;
