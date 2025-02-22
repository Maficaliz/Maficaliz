import { useState } from "react";
import MoneyMiddleware from "../../middleware/money";
import UserMiddleware from "../../middleware/user";

// Instanciando os middlewares
const userMiddleware = new UserMiddleware();
const moneyMiddleware = new MoneyMiddleware(userMiddleware.createUser("Lunna"));

const MoneyPage = () => {
  const [balanceClear, setBalanceClear] = useState(moneyMiddleware.getBalance("clear"));
  const [balanceDirty, setBalanceDirty] = useState(moneyMiddleware.getBalance("dirty"));

  const handleAddMoney = (type: "clear" | "dirty", amount: number) => {
    moneyMiddleware.addMoney(type, amount);
    if (type === "clear") {
      setBalanceClear(moneyMiddleware.getBalance("clear"));
    } else {
      setBalanceDirty(moneyMiddleware.getBalance("dirty"));
    }
  };

  const handleRemoveMoney = (type: "clear" | "dirty", amount: number) => {
    moneyMiddleware.removeMoney(type, amount);
    if (type === "clear") {
      setBalanceClear(moneyMiddleware.getBalance("clear"));
    } else {
      setBalanceDirty(moneyMiddleware.getBalance("dirty"));
    }
  };

  const handleCleanMoney = (amount: number) => {
    moneyMiddleware.cleanMoney(amount);
    setBalanceClear(moneyMiddleware.getBalance("clear"));
    setBalanceDirty(moneyMiddleware.getBalance("dirty"));
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>💸 Gerenciamento de Dinheiro de {/*moneyMiddleware.user.getName() || */ "sem acesso ao nome"}</h1>

      <div style={{ marginBottom: "20px" }}>
        <h2>Dinheiro Sujo (Dirty)</h2>
        <p>Quantidade: {balanceDirty}</p>
        <button onClick={() => handleAddMoney("dirty", 10)}>Adicionar 10</button>
        <button onClick={() => handleRemoveMoney("dirty", 5)}>Remover 5</button>
        <button onClick={() => handleCleanMoney(5)}>Limpar 5 para Limpo</button>
      </div>

      <div>
        <h2>Dinheiro Limpo (Clear)</h2>
        <p>Quantidade: {balanceClear}</p>
        <button onClick={() => handleAddMoney("clear", 10)}>Adicionar 10</button>
        <button onClick={() => handleRemoveMoney("clear", 5)}>Remover 5</button>
      </div>
    </div>
  );
};

export default MoneyPage;
