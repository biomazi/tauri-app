import { Box, Divider, Typography } from "@mui/material";
import { FC } from "react";

const MainSectionTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <Box
      sx={{
        marginLeft: "16px",
        // marginBottom: "12px",
        display: "flex",
        alignItems: "center",
      }}
    >
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
        {title}
      </Typography>
      <Divider
        sx={{
          width: "500px",
          height: "6px",
          borderBottomWidth: "0",
          marginLeft: "8px",
          transform: "rotate(-180deg)",
          background:
            "linear-gradient(270deg, #5E657E 0%, rgba(94, 101, 126, 0) 100%)",
        }}
      />
    </Box>
  );
};

export default MainSectionTitle;
