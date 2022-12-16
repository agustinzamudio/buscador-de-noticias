import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { DateTime } from "luxon";

function ponerFecha(from, format) {
  return DateTime.fromISO(from).toLocaleString(format);
}

const Noticia = ({ noticia, onChange }) => {
  const onCardClick = () => {
    onChange && onChange(noticia);
  };

  return (
    <Card
      sx={{
        width: "100%",
        marginBottom: 10,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardActionArea onClick={onCardClick}>
        <CardMedia
          component="img"
          height="200"
          width={350}
          image={noticia.urlToImage}
          alt={noticia.Title}
        />
        <CardContent>
          <Typography variant="body3" color="text.secondary">
            De: {noticia.source.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div" my={2}>
            {noticia.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={5}>
            {noticia.description}
          </Typography>
          <Typography variant="body3" color="text.primary">
            Publicado el: {ponerFecha(noticia.publishedAt, {})} a las{" "}
            {ponerFecha(noticia.publishedAt, {
              hour: "2-digit",
              minute: "2-digit",
              hourCycle: "h23",
            })}{" "}
            hs.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export const ListaNoticias = ({ noticias }) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "");
  };
  const onNoticiaClick = ({ url }) => {
    openInNewTab(url);
  };
  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "20px",
      }}
    >
      {noticias.map((noticia, i) => {
        return (
          <Noticia
            key={i + "-" + noticia.publishedAt}
            noticia={noticia}
            onChange={onNoticiaClick}
          />
        );
      })}
    </section>
  );
};

export default Noticia;
