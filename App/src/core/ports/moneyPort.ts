import User from "../classes/user";
// moneyPort.clear.add(user, amount) - add amount to user's clear money
const moneyPort = {
    clear: {
        add: (user: User, amount: number) => user.addMoney.clear(amount),
        remove: (user: User, amount: number) => user.removeMoney.clear(amount),
        get: (user: User) => user.getMoney.clear()
    },
    dirty: {
        add: (user: User, amount: number) => user.addMoney.dirty(amount),
        remove: (user: User, amount: number) => user.removeMoney.dirty(amount),
        get: (user: User) => user.getMoney.dirty(),
    },
    actions: {
        clean: (user: User, amount: number) => user.cleanMoney(amount),
    }
};

export default moneyPort;