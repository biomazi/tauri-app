import { Box, Divider, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import CLSImage from "./CLSImage";
import imgSrc from "../assets/invenda_logo.png";
import LanguageSelect from "./LanguageSelect";
import { getVersion } from "@tauri-apps/api/app";

const PromoSectionTitle: FC<{ title: string }> = ({ title }) => {
  const [version, setVersion] = useState("");

  useEffect(() => {
    getVersion().then((v) => setVersion(v));
  }, []);

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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <CLSImage
          src={imgSrc}
          width={220}
          height={40}
          maxWidth={220}
          maxHeight={40}
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
          v.{version}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        {/* <Button variant="contained" onClick={handleClick}>
          Check for Update
        </Button>
        <Typography>testing now 1</Typography>
        <Button variant="contained" onClick={handleUpdateEvent}>
          Check for Update 2
        </Button>
        <Typography>testing now 1</Typography> */}
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
