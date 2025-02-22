import { LanguageProvider } from "./contexts/langContext";
import { ReactNode } from "react";
import RouterComponent from "./routes";

// esse provider é o que vai conter todos os outros providers de uso geral
const GeneralProvider = ({ children }: { children: ReactNode }) => {
    return (
        <LanguageProvider>
            {children}
        </LanguageProvider>
    );
}


const RouterContextualized = () => {
    return (
        <GeneralProvider>
            <RouterComponent />
        </GeneralProvider>
    );
}

export { RouterContextualized }
