import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Container } from "@mui/material";

import Buscador from "../components/Buscador/Buscador";
import Loading from "../components/Loading/Loading";
import Paginador from "../components/Paginador/Paginador";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { ListaNoticias } from "../components/Noticias/Noticias";
import { getListadoNoticias } from "../api/noticias";
import NoResultados from "../components/Errores/NoResultados";
import ResultadosTotal from "../components/Resultados/Resultados";

const PaginaBuscador = () => {
  const [noticias, setNoticias] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [cantidadPaginas, setCantidadPaginas] = useState(1);
  const [totalNoticias, setTotalNoticias] = useState(0);
  const [pagina, setPagina] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("query")) {
      buscarNoticia(pagina);
    }
  }, [searchParams, pagina]);

  const buscarNoticia = async () => {
    setIsLoading(true);
    const { articles: articulos, totalResults } = await getListadoNoticias(
      searchParams.get("query"),
      pagina
    );
    setNoticias(articulos);
    setCantidadPaginas(Math.ceil(parseInt(totalResults) / 10));
    setTotalNoticias(totalResults);
    setIsLoading(false);
  };

  const onBuscar = (criterioBusqueda) => {
    setSearchParams({ query: criterioBusqueda });
  };

  const onCambioPagina = (pagina) => {
    setPagina(pagina);
  };

  return (
    <main>
      <Header />
      <Container maxWidth="md" sx={{ mb: 5 }}>
        <Buscador onBuscar={onBuscar} /> {isLoading && <Loading />}
        {noticias && noticias.length !== 0 && (
          <ResultadosTotal NoticiasTotal={totalNoticias} />
        )}
        {noticias && noticias.length === 0 && <NoResultados />}
        {noticias && <ListaNoticias noticias={noticias} />}
        {noticias && (
          <Paginador
            cantidadPaginas={cantidadPaginas}
            onChange={onCambioPagina}
          />
        )}
      </Container>
      <Footer />
    </main>
  );
};

export default PaginaBuscador;
