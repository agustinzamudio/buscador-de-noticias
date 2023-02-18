const API_KEY = "893c8489adf8429ebb345478f1b78dd4";
const NEWS_API = "https://newsapi.org/v2/everything";
const LANGUAGE = "es";
const PAGE_SIZE = 10;

export const getListadoNoticias = async (criterioBusqueda, paginaActual) => {
  const respuesta = await fetch(
    `${NEWS_API}?apikey=${API_KEY}&q=${criterioBusqueda}&language=${LANGUAGE}&&pageSize=${PAGE_SIZE}&page=${paginaActual}&sortBy=publishedAt`
  );
  const noticias = await respuesta.json();
  return noticias;
};
