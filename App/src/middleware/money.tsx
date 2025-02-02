import User from "../core/classes/user";
import { useState } from "react";

const useMoney = ({ user }: { user: User }) => {
    const [dirty, setDirty] = useState<number>(user.getMoney.dirty());
    const [clear, setClear] = useState<number>(user.getMoney.clear());

    const money = {
        clear: {
            get: () => clear,
            add: (amount: number) => {
                user.addMoney.clear(amount);  // Atualiza o dinheiro no User
                setClear(prev => prev + amount);  // Atualiza o estado local
            },
            remove: (amount: number) => {
                user.removeMoney.clear(amount);  // Atualiza o dinheiro no User
                setClear(prev => Math.max(0, prev - amount));  // Atualiza o estado local
            }
        },
        dirty: {
            get: () => dirty,
            add: (amount: number) => {
                user.addMoney.dirty(amount);  // Atualiza o dinheiro no User
                setDirty(prev => prev + amount);  // Atualiza o estado local
            },
            remove: (amount: number) => {
                user.removeMoney.dirty(amount);  // Atualiza o dinheiro no User
                setDirty(prev => Math.max(0, prev - amount));  // Atualiza o estado local
            },
            clean: (amount: number) => {
                const toClean = Math.min(dirty, amount);  // Valor a ser limpo
                setDirty(prevDirty => prevDirty - toClean);  // Atualiza o estado de sujo
                setClear(prevClear => prevClear + toClean);  // Atualiza o estado limpo
                user.cleanMoney(toClean);  // Atualiza o dinheiro no User
            }
        }
    };

    return { money };
};

export default useMoney;
