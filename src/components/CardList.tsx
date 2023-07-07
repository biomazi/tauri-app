import { Box, ImageList } from "@mui/material";
import { FC } from "react";
import { ICard } from "../data/generateCards";
import CardComponent from "./CardComponent";
import img from "../assets/bottle.png";

const CardList: FC<{ cards: ICard[] }> = ({ cards }) => {
  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "auto",
        flexWrap: "nowrap",
        paddingBottom: "8px",
        "& > :first-child,& > :last-child": {
          margin: 0,
          padding: "16px",
        },
      }}
    >
      <ImageList gap={8} cols={cards.length}>
        {cards.map((card) => (
          <CardComponent key={card.id} card={card} />
        ))}
      </ImageList>
    </Box>
  );
};

export default CardList;
