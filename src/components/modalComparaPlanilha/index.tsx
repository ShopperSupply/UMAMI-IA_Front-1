const ModalComparaPlanilha = () => {
  return (
    <div className="z-30">
      <form>
        <label>
          Planilha de Controle
          <input type="file" />
        </label>
        <label>
          Planilha do Curador
          <input type="file" />
        </label>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default ModalComparaPlanilha;
