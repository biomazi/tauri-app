import { Box, Divider } from "@mui/material";
import cartSrc from "../assets/empty-cart-icon.png";
import CLSImage from "./CLSImage";
import CartProduct from "./CartProduct";
import CartPrice from "./CartPrice";
import { useAtomValue } from "jotai";
import { cartAtoms } from "../state/cart-atoms";
import { Fragment, forwardRef } from "react";

export const CartContentMainEmpty = forwardRef((props, ref) => {
  return (
    <Box
      {...props}
      ref={ref}
      sx={{
        alignSelf: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CLSImage
        src={cartSrc}
        width={230}
        height={269}
        maxWidth={230}
        maxHeight={269}
        duration={0}
      />
    </Box>
  );
});

export const CartContentMainBarcode = () => {
  return <Box>CartContentMainComponents</Box>;
};

export const CartContentMainProducts = forwardRef((props, ref) => {
  const cartProducts = useAtomValue(cartAtoms);

  return (
    <Box
      ref={ref}
      {...props}
      sx={{ padding: "8px", display: "flex", flexDirection: "column" }}
    >
      {cartProducts.map((p, i) => (
        <Fragment key={`p.id-${i}`}>
          <CartProduct product={p} index={i} />
          <Divider sx={{ marginTop: "8px", marginBottom: "8px" }} />
        </Fragment>
      ))}

      <CartPrice />
    </Box>
  );
});
