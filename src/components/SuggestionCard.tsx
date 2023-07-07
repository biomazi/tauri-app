import { Box, Typography } from "@mui/material";
import imgSrc from "../assets/suggestion.png";
import CLSImage from "./CLSImage";
import { ICard } from "../data/generateCards";
import { FC } from "react";

const SuggestionCard: FC<{ card: ICard }> = ({ card }) => {
  return (
    <Box sx={{ display: "flex", gap: "4px" }}>
      <CLSImage
        src={imgSrc}
        width={48}
        height={48}
        duration={0}
        maxWidth={48}
      />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <Typography
          variant="body2"
          sx={{
            fontSize: "10px",
            lineHeight: "12px",
            fontWeight: "400",
            color: "#5E657E",
          }}
        >
          {card.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            lineHeight: "19.2px",
            fontWeight: "700",
            color: "#1E2129",
          }}
        >
          {card.price}€
        </Typography>
      </Box>
    </Box>
  );
};

export default SuggestionCard;
