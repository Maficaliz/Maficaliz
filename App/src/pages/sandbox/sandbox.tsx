// importações referente ao ambiente sandbox.
import MainPage from "./components/mainPage"; // protetor de tela
import SandboxFrame from "./components/sandboxFrame"; // frame do sandbox
import useHandleZone from "./hooks/useHandleZone"; // hook para alternar entre as zonas
import * as Core from "../../middleware/sandbox"; // importações para o SandboxTerminal
import useTerminalTestHandle from "./hooks/useTerminalTestHandle";


// importações para o SandboxZone
import { useEffect } from "react";

const SandboxZone = () => {
    useEffect(() => {
        console.group("Sandbox Console");
        console.log("teste de comportamento do sandbox console");
        const pessoa = Core.pessoaPort.criar("João", 25);
        Core.pessoaPort.exibir(pessoa);
        Core.pessoaPort.depositar(pessoa, 100);
        Core.pessoaPort.sacar(pessoa, 40);
        Core.pessoaPort.saldo(pessoa);
        console.groupEnd();
    }
    , []);

    const handleTest = useTerminalTestHandle(Core.testPort);
    let pessoa = Core.pessoaPort.criar("João", 25);
    const handleAddPessoa = () => {
        pessoa = Core.pessoaPort.criar("João", 25);
        Core.pessoaPort.exibir(pessoa);
    }

    return (
        <>
            <h1>SandboxZone</h1>
            <div>
                <p>teste de comportamento</p>
            </div>

            <button>butão de mudar a cor</button>
            <button onClick={handleTest}>Testar Terminal via botão</button>
            <button onClick={handleAddPessoa}>Adicionar pessoa</button>

          
          
            
            
        </>
    );
}




const Sandbox = () => {

    const [zone, handleZone] = useHandleZone();

    return (
        <SandboxFrame handleZone={handleZone}>
            {zone === "MainPage" ? <MainPage /> : <SandboxZone />}
        </SandboxFrame>

    );
}

export default Sandbox;