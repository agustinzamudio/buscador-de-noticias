import { Pagination } from "@mui/material";
import Box from "@mui/material/Box";

const Paginador = ({ cantidadPaginas, onChange }) => {
  const cambiaPagina = (_evento, pagina) => {
    onChange(pagina);
  };

  return (
    <Box
      sx={{
        margin: "auto",
        width: "fit-content",
        alignItems: "center",
      }}
    >
      <a href="#noticias" style={{ textDecoration: "none" }}>
        <Pagination
          count={cantidadPaginas}
          color="success"
          shape="rounded"
          size="large"
          siblingCount={1}
          boundaryCount={0}
          onChange={cambiaPagina}
        />
      </a>
    </Box>
  );
};

export default Paginador;
