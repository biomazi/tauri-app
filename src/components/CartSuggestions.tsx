import { Box, Typography } from "@mui/material";
import SuggestionCard from "./SuggestionCard";
import { generateCards } from "../data/generateCards";

const CartSuggestions = () => {
  return (
    <Box
      sx={{
        border: "2px solid rgba(50, 130, 253, 0.4)",
        borderRadius: "12px",
        padding: "8px",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontSize: "12px",
          lineHeight: "15.6px",
          fontWeight: "600",
          color: "#1E2129",
        }}
      >
        You may also like:
      </Typography>
      <Box sx={{ display: "flex", gap: "8px" }}>
        <SuggestionCard card={generateCards(1)[0]} />
        <SuggestionCard card={generateCards(1)[0]} />
      </Box>
    </Box>
  );
};

export default CartSuggestions;
