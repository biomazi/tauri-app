import CLSImage from "./CLSImage";
import imgSrc from "../assets/cart-footer-image.png";

const CartFooter = () => {
  return (
    <CLSImage
      src={imgSrc}
      width={266}
      height={266}
      maxWidth={266}
      maxHeight={266}
      duration={0}
    />
  );
};

export default CartFooter;
