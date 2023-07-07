import imgSrc from "../assets/cart-promo-img.png";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { ICard } from "../data/generateCards";
import { FC } from "react";

const CartHeader: FC<{ card: ICard }> = ({ card }) => {
  return (
    <Card
      onClick={() => console.log("Card clicked: ", card.id)}
      raised
      sx={{
        maxWidth: 266,
        borderRadius: 0,
        position: "relative",
        flex: "0 0 auto",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="229"
          image={imgSrc}
          alt="Water Bottle"
        />
        <CardContent
          sx={{
            height: "37px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "rgba(30, 33, 41, 0.8)",
            padding: "0 8px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: "14px",
              lineHeight: "18.2px",
              fontWeight: "500",
              color: "#ADB2C2",
            }}
          >
            {card.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "16px",
              lineHeight: "20.8px",
              fontWeight: "700",
              color: "white",
            }}
          >
            {card.price},00 RSD
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{ position: "absolute", top: "8px", right: "8px", padding: 0 }}
      >
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            console.log("Card info clicked", card.id);
          }}
          sx={{ padding: 0, boxShadow: "none" }}
          aria-label="settings"
        >
          <InfoIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CartHeader;
