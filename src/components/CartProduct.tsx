import { Box, IconButton, Typography } from "@mui/material";
import { FC } from "react";
import CLSImage from "./CLSImage";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSetAtom } from "jotai";
import { ICart, cartAtoms } from "../state/cart-atoms";

const CartProduct: FC<{ product: ICart; index: number }> = ({
  product,
  index,
}) => {
  const setCartProducts = useSetAtom(cartAtoms);
  const handleDeleteClick = (c: ICart) => () => {
    setCartProducts((prev) => prev.filter((p) => p.cartId !== c.cartId));
  };

  return (
    <Box
      sx={{
        height: "48px",
        display: "flex",
        alignItems: "center",
        // margin: "8px",
        gap: "8px",
      }}
    >
      <CLSImage
        src={product.img}
        width={48}
        height={48}
        maxHeight={48}
        maxWidth={48}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          justifyContent: "space-between",
          width: "150px",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: "14px",
            lineHeight: "16.8px",
            fontWeight: "500",
            color: "#5E657E",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {product.id}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            lineHeight: "19.2px",
            fontWeight: "700",
            color: "#1E2129",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {product.price}€
        </Typography>
      </Box>
      <IconButton
        onClick={handleDeleteClick(product)}
        sx={{ boxShadow: "none", padding: 0 }}
        size="medium"
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default CartProduct;
