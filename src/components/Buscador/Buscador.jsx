import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Buscador = ({ onBuscar }) => {
  const [criterioBusqueda, setCriterioBusqueda] = useState("");
  const [botonActivado, setBotonActivado] = useState(false);

  return (
    <Paper
      component="div"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        maxWidth: "100%",
        marginTop: 10,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscar Noticia"
        inputProps={{ "aria-label": "search google maps" }}
        value={criterioBusqueda}
        role="searchbox"
        onChange={(e) => {
          setCriterioBusqueda(e.target.value);

          if (e.target.value.length > 2) {
            setBotonActivado(true);
          } else {
            setBotonActivado(false);
          }
        }}
        onKeyDown={(e) => {
          if (criterioBusqueda.length > 2 && e.code === "Enter") {
            onBuscar(criterioBusqueda);
          }
        }}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        disabled={!botonActivado}
        onClick={() => {
          onBuscar(criterioBusqueda);
        }}
        role="button"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Buscador;
