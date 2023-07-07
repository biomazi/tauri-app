import { Box } from "@mui/material";
import CartContentHeader from "./CartContentHeader";
import CartContentMain from "./CartContentMain";
import CartContentPayment from "./CartContentPayment";

const CartContent = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "8px",
        flex: "1",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <CartContentHeader />
      <CartContentMain />
      <CartContentPayment />
    </Box>
  );
};

export default CartContent;
