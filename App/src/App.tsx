// App.tsx
import React from "react";
import useUser from "./middleware/user";
import useMoney from "./middleware/money";


const App: React.FC = () => {
    const user = useUser("Lunna");
    const { money } = useMoney({ user });

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>💸 Gerenciamento de Dinheiro de {user.getName()}</h1>
            
            <div style={{ marginBottom: "20px" }}>
                <h2>Dinheiro Sujo (Dirty)</h2>
                <p>Quantidade: {money.dirty.get()}</p>
                <button onClick={() => money.dirty.add(10)}>Adicionar 10</button>
                <button onClick={() => money.dirty.remove(5)}>Remover 5</button>
                <button onClick={() => money.dirty.clean(5)}>Limpar 5 para Limpo</button>
            </div>

            <div>
                <h2>Dinheiro Limpo (Clear)</h2>
                <p>Quantidade: {money.clear.get()}</p>
                <button onClick={() => money.clear.add(10)}>Adicionar 10</button>
                <button onClick={() => money.clear.remove(5)}>Remover 5</button>
            </div>
        </div>
    );
}

export default App;
