import { Box, Button, Typography } from "@mui/material";
import CartSuggestions from "./CartSuggestions";
import CLSImage from "./CLSImage";
import mc1Src from "../assets/mastercard-1.png";
import mc2Src from "../assets/mastercard-2.png";
import vpaySrc from "../assets/v-pay.png";
import visaSrc from "../assets/visa.png";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { cartAtoms, purchaseCompletedAtom } from "../state/cart-atoms";
import { cartContentLengthAtom } from "../state/cart-atoms";
import { useEffect } from "react";

const CartContentPayment = () => {
  const setCartProducts = useSetAtom(cartAtoms);
  const [isPurchaseCompleted, setIsPurchaseCompleted] = useAtom(
    purchaseCompletedAtom
  );
  const isCartEmpty = useAtomValue(cartContentLengthAtom) === 0;

  const handlePay = () => {
    setCartProducts([]);
    setIsPurchaseCompleted(true);
  };

  useEffect(() => {
    if (isPurchaseCompleted) setIsPurchaseCompleted(false);
  }, [isPurchaseCompleted]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <CartSuggestions />
      <Button
        variant="contained"
        fullWidth
        onClick={handlePay}
        disabled={isCartEmpty}
      >
        Pay
      </Button>
      <Typography
        variant="body2"
        sx={{
          fontSize: "12px",
          lineHeight: "15.6px",
          fontWeight: "400",
          color: "#5E657E",
        }}
      >
        Acceptable payment options:
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <CLSImage
          src={mc1Src}
          width={30}
          height={24}
          maxWidth={30}
          maxHeight={24}
          duration={0}
        />
        <CLSImage
          src={mc2Src}
          width={30}
          height={24}
          maxWidth={30}
          maxHeight={24}
          duration={0}
        />
        <CLSImage
          src={vpaySrc}
          width={29}
          height={30}
          maxWidth={29}
          maxHeight={30}
          duration={0}
        />
        <CLSImage
          src={visaSrc}
          width={48}
          height={16}
          maxWidth={48}
          maxHeight={16}
          duration={0}
        />
      </Box>
    </Box>
  );
};

export default CartContentPayment;
