import { useState } from "react";

const useHandleZone = (): [string, () => void] => {
    const [zone, setZone] = useState<string>("MainPage");
    
    const handleZone = () => {
        setZone((prevZone : string) => (prevZone === "MainPage" ? "SandboxZone" : "MainPage"));
    };
    
    return [zone, handleZone];
};

export default useHandleZone;