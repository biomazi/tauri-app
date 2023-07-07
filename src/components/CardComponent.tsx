import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Fade,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";

import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";
import imgSrc from "../assets/bottle.png";
import { ICard } from "../data/generateCards";
import { FC, MouseEvent, useEffect, useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { purchaseCompletedAtom, shoppingCartAtoms } from "../state/cart-atoms";
import { createRipple } from "./utils";
import CLSImage from "./CLSImage";

const CardComponent: FC<{ card: ICard }> = ({ card }) => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const setCartProduct = useSetAtom(shoppingCartAtoms);
  const isPurchaseCompleted = useAtomValue(purchaseCompletedAtom);

  const handleCardClick =
    (c: ICard) => (e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) => {
      createRipple(e);
      const cartItem = { ...c, cartId: uuidv4() };
      setCartProduct((prev) => [...prev, cartItem]);
    };

  const handleInfoClick =
    (bool: boolean) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setIsInfoVisible(bool);
    };

  useEffect(() => {
    setIsInfoVisible(false);
  }, [isPurchaseCompleted]);

  return (
    <ImageListItem
      key={card.id}
      sx={{
        overflow: "hidden",
        width: "220px",
        borderRadius: "12px",
        // border: "0.5px solid #C4CCE4;",
        transition: "background 400ms;",
        // background: "#fff",
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);",
      }}
      onClick={handleCardClick(card)}
    >
      <CLSImage width={220} height={220} src={imgSrc} duration={0} />
      <ImageListItemBar
        title={card.price + ",00 RSD"}
        position="below"
        actionPosition="right"
        sx={{
          height: "46px",
          alignItems: "center",
          "& .MuiImageListItemBar-titleWrap": {
            padding: "12px 16px",
          },
        }}
        actionIcon={
          <IconButton
            onClick={handleInfoClick(true)}
            sx={{ boxShadow: "none" }}
            aria-label={`click for info about ${card.name}`}
          >
            <InfoIcon />
          </IconButton>
        }
      />
      <Fade in={isInfoVisible} timeout={300}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            backgroundColor: "#fff",
            zIndex: 500,
            height: "100%",
            padding: "16px",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <IconButton
            onClick={handleInfoClick(false)}
            sx={{
              padding: 0,
              boxShadow: "none",
              position: "absolute",
              top: "8px",
              right: "8px",
            }}
            aria-label="settings"
          >
            <CloseIcon />
          </IconButton>
          <Typography
            sx={{
              fontSize: "20px",
              lineHeight: "27.24px",
              fontWeight: "800",
              textTransform: "uppercase",
            }}
            variant="h4"
            color="text.primary"
          >
            Coca Cola
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "16px",
              lineHeight: "20.8px",
              fontWeight: "600",
              color: "#5E657E",
            }}
          >
            Nutrition Facts:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "16px",
              lineHeight: "22.4px",
              fontWeight: "400",
              color: "#5E657E",
            }}
          >
            Serving size:{" "}
            <Typography
              component="span"
              sx={{
                fontSize: "16px",
                lineHeight: "22.4px",
                fontWeight: "700",
                color: "#5E657E",
              }}
            >
              1 can
            </Typography>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "16px",
              lineHeight: "22.4px",
              fontWeight: "400",
              color: "#5E657E",
            }}
          >
            Calories{" "}
            <Typography
              component="span"
              sx={{
                fontSize: "16px",
                lineHeight: "22.4px",
                fontWeight: "700",
                color: "#5E657E",
              }}
            >
              140
            </Typography>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "16px",
              lineHeight: "22.4px",
              fontWeight: "400",
              color: "#5E657E",
            }}
          >
            Total Fat:{" "}
            <Typography
              component="span"
              sx={{
                fontSize: "16px",
                lineHeight: "22.4px",
                fontWeight: "700",
                color: "#5E657E",
              }}
            >
              0g
            </Typography>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "16px",
              lineHeight: "22.4px",
              fontWeight: "400",
              color: "#5E657E",
            }}
          >
            Sodium:{" "}
            <Typography
              component="span"
              sx={{
                fontSize: "16px",
                lineHeight: "22.4px",
                fontWeight: "700",
                color: "#5E657E",
              }}
            >
              45g
            </Typography>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "16px",
              lineHeight: "22.4px",
              fontWeight: "400",
              color: "#5E657E",
            }}
          >
            Total Carbohydrates:{" "}
            <Typography
              component="span"
              sx={{
                fontSize: "16px",
                lineHeight: "22.4px",
                fontWeight: "700",
                color: "#5E657E",
              }}
            >
              39g
            </Typography>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "16px",
              lineHeight: "22.4px",
              fontWeight: "400",
              color: "#5E657E",
            }}
          >
            Sugard:{" "}
            <Typography
              component="span"
              sx={{
                fontSize: "16px",
                lineHeight: "22.4px",
                fontWeight: "700",
                color: "#5E657E",
              }}
            >
              39g
            </Typography>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "16px",
              lineHeight: "22.4px",
              fontWeight: "400",
              color: "#5E657E",
            }}
          >
            Protein:{" "}
            <Typography
              component="span"
              sx={{
                fontSize: "16px",
                lineHeight: "22.4px",
                fontWeight: "700",
                color: "#5E657E",
              }}
            >
              0g
            </Typography>
          </Typography>
        </Box>
      </Fade>
    </ImageListItem>
    // <Card
    //   onClick={handleCardClick(card)}
    //   raised
    //   sx={{
    //     maxWidth: 220,
    //     borderRadius: "12px",
    //     position: "relative",
    //     flex: "0 0 auto",
    //     margin: "0 8px",
    //   }}
    // >
    //   <CardActionArea>
    //     <CardMedia
    //       component="img"
    //       height="220"
    //       image={imgSrc}
    //       alt="Water Bottle"
    //     />
    //     <CardContent sx={{ height: "48px" }}>
    //       <Typography variant="body2" color="text.primary" align="center">
    //         {card.price},00 RSD
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions
    //     sx={{ position: "absolute", top: "8px", right: "8px", padding: 0 }}
    //   >
    //     <IconButton
    //       onClick={handleInfoClick(true)}
    //       sx={{ padding: 0, boxShadow: "none" }}
    //       aria-label="settings"
    //     >
    //       <InfoIcon />
    //     </IconButton>
    //   </CardActions>
    //   <Fade in={isInfoVisible}>
    //     <Box
    //       sx={{
    //         position: "absolute",
    //         top: 0,
    //         right: 0,
    //         backgroundColor: "#fff",
    //         zIndex: 500,
    //         height: "100%",
    //         padding: "16px",
    //       }}
    //       onClick={(e) => e.stopPropagation()}
    //     >
    //       <IconButton
    //         onClick={handleInfoClick(false)}
    //         sx={{
    //           padding: 0,
    //           boxShadow: "none",
    //           position: "absolute",
    //           top: "8px",
    //           right: "8px",
    //         }}
    //         aria-label="settings"
    //       >
    //         <CloseIcon />
    //       </IconButton>
    //       <Typography
    //         sx={{
    //           fontSize: "20px",
    //           lineHeight: "27.24px",
    //           fontWeight: "800",
    //           textTransform: "uppercase",
    //         }}
    //         variant="h4"
    //         color="text.primary"
    //       >
    //         Coca Cola
    //       </Typography>
    //       <Typography
    //         variant="body2"
    //         sx={{
    //           fontSize: "16px",
    //           lineHeight: "20.8px",
    //           fontWeight: "600",
    //           color: "#5E657E",
    //         }}
    //       >
    //         Nutrition Facts:
    //       </Typography>
    //       <Typography
    //         variant="body2"
    //         sx={{
    //           fontSize: "16px",
    //           lineHeight: "22.4px",
    //           fontWeight: "400",
    //           color: "#5E657E",
    //         }}
    //       >
    //         Serving size:{" "}
    //         <Typography
    //           component="span"
    //           sx={{
    //             fontSize: "16px",
    //             lineHeight: "22.4px",
    //             fontWeight: "700",
    //             color: "#5E657E",
    //           }}
    //         >
    //           1 can
    //         </Typography>
    //       </Typography>
    //       <Typography
    //         variant="body2"
    //         sx={{
    //           fontSize: "16px",
    //           lineHeight: "22.4px",
    //           fontWeight: "400",
    //           color: "#5E657E",
    //         }}
    //       >
    //         Calories{" "}
    //         <Typography
    //           component="span"
    //           sx={{
    //             fontSize: "16px",
    //             lineHeight: "22.4px",
    //             fontWeight: "700",
    //             color: "#5E657E",
    //           }}
    //         >
    //           140
    //         </Typography>
    //       </Typography>
    //       <Typography
    //         variant="body2"
    //         sx={{
    //           fontSize: "16px",
    //           lineHeight: "22.4px",
    //           fontWeight: "400",
    //           color: "#5E657E",
    //         }}
    //       >
    //         Total Fat:{" "}
    //         <Typography
    //           component="span"
    //           sx={{
    //             fontSize: "16px",
    //             lineHeight: "22.4px",
    //             fontWeight: "700",
    //             color: "#5E657E",
    //           }}
    //         >
    //           0g
    //         </Typography>
    //       </Typography>
    //       <Typography
    //         variant="body2"
    //         sx={{
    //           fontSize: "16px",
    //           lineHeight: "22.4px",
    //           fontWeight: "400",
    //           color: "#5E657E",
    //         }}
    //       >
    //         Sodium:{" "}
    //         <Typography
    //           component="span"
    //           sx={{
    //             fontSize: "16px",
    //             lineHeight: "22.4px",
    //             fontWeight: "700",
    //             color: "#5E657E",
    //           }}
    //         >
    //           45g
    //         </Typography>
    //       </Typography>
    //       <Typography
    //         variant="body2"
    //         sx={{
    //           fontSize: "16px",
    //           lineHeight: "22.4px",
    //           fontWeight: "400",
    //           color: "#5E657E",
    //         }}
    //       >
    //         Total Carbohydrates:{" "}
    //         <Typography
    //           component="span"
    //           sx={{
    //             fontSize: "16px",
    //             lineHeight: "22.4px",
    //             fontWeight: "700",
    //             color: "#5E657E",
    //           }}
    //         >
    //           39g
    //         </Typography>
    //       </Typography>
    //       <Typography
    //         variant="body2"
    //         sx={{
    //           fontSize: "16px",
    //           lineHeight: "22.4px",
    //           fontWeight: "400",
    //           color: "#5E657E",
    //         }}
    //       >
    //         Sugard:{" "}
    //         <Typography
    //           component="span"
    //           sx={{
    //             fontSize: "16px",
    //             lineHeight: "22.4px",
    //             fontWeight: "700",
    //             color: "#5E657E",
    //           }}
    //         >
    //           39g
    //         </Typography>
    //       </Typography>
    //       <Typography
    //         variant="body2"
    //         sx={{
    //           fontSize: "16px",
    //           lineHeight: "22.4px",
    //           fontWeight: "400",
    //           color: "#5E657E",
    //         }}
    //       >
    //         Protein:{" "}
    //         <Typography
    //           component="span"
    //           sx={{
    //             fontSize: "16px",
    //             lineHeight: "22.4px",
    //             fontWeight: "700",
    //             color: "#5E657E",
    //           }}
    //         >
    //           0g
    //         </Typography>
    //       </Typography>
    //     </Box>
    //   </Fade>
    // </Card>
  );
};

export default CardComponent;
