import { useState } from "react";
import styled from "styled-components";

// Container do frame, que recebe o tema
const SandboxFrameContainer = styled.div<{ theme: string }>`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    font-family: Arial, sans-serif;
    background-color: ${({ theme }) => (theme === "dark" ? "#222" : "#fff")};
    color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
`;

// Estilo do header
const Header = styled.header`
    background-color: #6a4c8c; /* Cor roxa */
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
`;

const Button = styled.button`
    background-color: transparent;
    color: white;
    border: 2px solid white;
    padding: 8px 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    border-radius: 5px;
    font-size: 16px;

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

// Estilo do conteúdo principal
const MainContent = styled.main`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const Canvas = styled.div<{ theme: string }>`
    width: 80%;
    max-width: 1200px;
    height: 80%;
    border: 2px solid #6a4c8c;
    border-radius: 10px;
    padding: 20px;
    background-color: ${({ theme }) => (theme === "dark" ? "#222" : "#f4f4f4")};
    color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;



// Tipagem para o SandboxFrame
interface SandboxFrameProps {
    children: React.ReactNode;
    handleZone: () => void;
}

const SandboxFrame = ({ children, handleZone }: SandboxFrameProps) => {
    const [theme, setTheme] = useState("dark"); // Estado para controlar o tema (escuro ou claro)

    // Função para alternar entre os temas
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return (
        <SandboxFrameContainer theme={theme}>
            <Header>
                <Title>Sandbox</Title>
                <Button onClick={handleZone}>Change DevZone</Button>
                <Button onClick={toggleTheme}>
                    {theme === "dark" ? "Modo Claro" : "Modo Escuro"}
                </Button>
            </Header>

            <MainContent>
                {/* O Canva que vai carregar os filhos */}
                <Canvas>{children}</Canvas>
            </MainContent>
        </SandboxFrameContainer>
    );
};

export default SandboxFrame;
