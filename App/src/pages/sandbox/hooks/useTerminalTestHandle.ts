const useTerminalTestHandle = (testPort: any) => {
    const handleTest = () => {
        testPort.test();
    };

    return handleTest;
}

export default useTerminalTestHandle;