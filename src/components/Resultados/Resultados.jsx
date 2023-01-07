import "./Resultados.css";

const ResultadosTotal = (props) => {
  return (
    <p className="resultados">
      Está viendo {Math.min(10, props.NoticiasTotal)} noticias de{" "}
      {props.NoticiasTotal}{" "}
    </p>
  );
};

export default ResultadosTotal;
