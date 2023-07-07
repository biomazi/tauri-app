import { IconButton } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { FC } from "react";
import { DrawerEvent } from "./Cart";

type DrawerClick = (state: boolean) => (e: DrawerEvent) => void;

const CartButton: FC<{ onClick: DrawerClick; open: boolean }> = ({
  onClick,
  open,
}) => {
  return (
    <IconButton
      disabled={false}
      onClick={onClick(!open)}
      aria-label="shopping-cart"
      size="large"
      sx={(theme) => ({
        top: "50%",
        transition: theme.transitions.create("right", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        right: 0,
        ...(open && {
          transition: theme.transitions.create("right", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          right: "266px",
        }),
        position: "fixed",
        zIndex: 5000,
        backgroundColor: "black",
        color: "white",
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        width: "82px",
        height: "70px",
        "&:hover": {
          backgroundColor: "black",
        },
      })}
    >
      <ShoppingCartCheckoutIcon fontSize="large" sx={{ rotate: "y 180deg" }} />
    </IconButton>
  );
};

export default CartButton;
