import { Box, Drawer } from "@mui/material";

import React from "react";
import CartHeader from "./CartHeader";
import CartContent from "./CartContent";
import CartFooter from "./CartFooter";
import { generateCards } from "../data/generateCards";
import CartButton from "./CartButton";

export type DrawerEvent = React.KeyboardEvent | React.MouseEvent;

const [card] = generateCards(1);

const Cart = () => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (state: boolean) => (e: DrawerEvent) => setOpen(state);

  return (
    <>
      <CartButton onClick={toggleDrawer} open={open} />
      <Drawer
        anchor="right"
        variant="persistent"
        open={open}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: "266px",
            height: "1248px",
            borderLeft: "none",
            bottom: 0,
            top: "unset",
          },
        }}
        sx={{
          width: "266px",
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CartHeader card={card} />
          <CartContent />
          <CartFooter />
        </Box>
      </Drawer>
    </>
  );
};

export default Cart;
