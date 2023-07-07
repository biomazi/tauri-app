import { Box, Button } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useAtomValue, useSetAtom } from "jotai";
import { cartAtoms, cartContentLengthAtom } from "../state/cart-atoms";

const CartContentHeader = () => {
  const setCartProducts = useSetAtom(cartAtoms);
  const isCartEmpty = useAtomValue(cartContentLengthAtom) === 0;
  const handleEmptyCart = () => setCartProducts([]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <ShoppingCartCheckoutIcon fontSize="large" sx={{ rotate: "y 180deg" }} />
      <Button
        disabled={isCartEmpty}
        color="info"
        variant="contained"
        onClick={handleEmptyCart}
      >
        Empty cart
      </Button>
    </Box>
  );
};

export default CartContentHeader;
