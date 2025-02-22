import useLanguage from "../../contexts/langFacade";

const LangTest = () => {
  const { selectLanguage, translate } = useLanguage();

  return (
    <div>
      <h1>{translate("isso é um teste pedro")}</h1>
      <h1>{translate("isso aqui é só um teste")}</h1>
      <button onClick={() => selectLanguage("en")}>Inglês</button>
      <button onClick={() => selectLanguage("es")}>Espanhol</button>
      <button onClick={() => selectLanguage("pt-BR")}>Português</button>
    </div>
  );
};

export default LangTest;
