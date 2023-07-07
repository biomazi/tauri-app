import { Box, Typography } from "@mui/material";
import { useAtomValue } from "jotai";
import { cartPriceAtom } from "../state/cart-atoms";

const CartPrice = () => {
  const price = useAtomValue(cartPriceAtom);

  return (
    <Box
      sx={{
        borderTop: "2px #1E2129 solid",
        marginTop: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        paddingTop: "8px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "24px",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            lineHeight: "19.2px",
            fontWeight: "700",
            color: "#1E2129",
          }}
        >
          Total price:
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "20px",
            lineHeight: "14px",
            fontWeight: "700",
            color: "#1E2129",
          }}
        >
          {price} RSD
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "18px",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: "12px",
            lineHeight: "15.6px",
            fontWeight: "400",
            color: "#5E657E",
          }}
        >
          credit*
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "14px",
            lineHeight: "18.2px",
            fontWeight: "700",
            color: "#5E657E",
          }}
        >
          0,00€
        </Typography>
      </Box>
      <Box sx={{}}>
        <Typography
          variant="body2"
          align="right"
          sx={{
            fontSize: "12px",
            lineHeight: "15.6px",
            fontWeight: "500",
            color: "#B32B23",
          }}
        >
          · No change given
        </Typography>
        <Typography
          variant="body2"
          align="right"
          sx={{
            fontSize: "12px",
            lineHeight: "15.6px",
            fontWeight: "500",
            color: "#B32B23",
          }}
        >
          · Cash only
        </Typography>
      </Box>
    </Box>
  );
};

export default CartPrice;
