import { Box, Divider, Typography } from "@mui/material";
import { FC } from "react";
import CLSImage from "./CLSImage";
import imgSrc from "../assets/invenda_logo.png";
import LanguageSelect from "./LanguageSelect";

const PromoSectionTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <Box
      sx={{
        marginLeft: "16px",
        // marginBottom: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <CLSImage
        src={imgSrc}
        width={220}
        height={40}
        maxWidth={220}
        maxHeight={40}
      />
      <Box display="flex" alignItems="center">
        <Divider
          sx={{
            width: "80px",
            height: "6px",
            borderBottomWidth: "0",
            background:
              "linear-gradient(270deg, #5E657E 0%, rgba(94, 101, 126, 0) 100%)",
            transform: "matrix(1, 0, 0, -1, 0, 0)",
          }}
        />
        <Typography
          sx={{
            fontSize: "20px",
            lineHeight: "27.24px",
            fontWeight: "800",
            textTransform: "uppercase",
            margin: "0 8px",
          }}
          variant="h4"
          color="text.primary"
        >
          {title}
        </Typography>
        <Divider
          sx={{
            width: "80px",
            height: "6px",
            borderBottomWidth: "0",
            transform: "rotate(-180deg)",
            background:
              "linear-gradient(270deg, #5E657E 0%, rgba(94, 101, 126, 0) 100%)",
          }}
        />
      </Box>

      <LanguageSelect />
    </Box>
  );
};

export default PromoSectionTitle;
