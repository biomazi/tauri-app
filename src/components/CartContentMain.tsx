import { Box } from "@mui/material";
import {
  CartContentMainEmpty,
  CartContentMainProducts,
} from "./CartContentMainComponents";
import { cartContentLengthAtom } from "../state/cart-atoms";
import { useAtomValue } from "jotai";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useRef } from "react";

const CartContentMain = () => {
  const isCartProducts = useAtomValue(cartContentLengthAtom) > 0;
  const isProductsRef = useRef<null | HTMLDivElement>(null);
  const noProductsRef = useRef<null | HTMLDivElement>(null);
  const nodeRef = isCartProducts ? isProductsRef : noProductsRef;
  return (
    <SwitchTransition>
      <CSSTransition
        key={isCartProducts ? "one" : "two"}
        nodeRef={nodeRef}
        addEndListener={(done: () => void) => {
          // TODO: check this types with Nemanja
          (nodeRef.current as HTMLDivElement).addEventListener(
            "transitionend",
            done,
            false
          );
        }}
        // timeout={500}
        classNames="fade"
      >
        <Box
          ref={nodeRef}
          sx={{
            backgroundColor: "#F0F1F4",
            borderRadius: "12px",
            flexGrow: "1",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {isCartProducts ? (
            <CartContentMainProducts />
          ) : (
            <CartContentMainEmpty />
          )}
        </Box>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default CartContentMain;
