import { Box, Button, Divider, Typography } from "@mui/material";
import { FC, useEffect } from "react";
import CLSImage from "./CLSImage";
import imgSrc from "../assets/invenda_logo.png";
import LanguageSelect from "./LanguageSelect";
import {
  checkUpdate,
  installUpdate,
  onUpdaterEvent,
} from "@tauri-apps/api/updater";
import { relaunch } from "@tauri-apps/api/process";
import { emit, listen } from "@tauri-apps/api/event";

const PromoSectionTitle: FC<{ title: string }> = ({ title }) => {
  const handleClick2 = async () => {
    await emit("tauri://update");
  };
  const handleClick = async () => {
    try {
      const { shouldUpdate, manifest } = await checkUpdate();

      if (shouldUpdate) {
        // You could show a dialog asking the user if they want to install the update here.
        // console.log(
        //   `Installing update ${manifest?.version}, ${manifest?.date}, ${manifest?.body}`
        // );
        // Install the update. This will also restart the app on Windows!
        await installUpdate();
        // On macOS and Linux you will need to restart the app manually.
        // You could use this step to display another confirmation dialog.
        await relaunch();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const unlisten = onUpdaterEvent(({ error, status }) => {
      // This will log all updater events, including status updates and errors.
      console.log("Updater event", error, status);
    });

    return () => {
      unlisten.then((u) => u());
    };
  }, []);

  useEffect(() => {
    const unlisten = listen("tauri://update-status", (event) => {
      // This will log all updater events, including status updates and errors.
      console.log("event status", event);
    });

    return () => {
      unlisten.then((u) => u());
    };
  }, []);

  useEffect(() => {
    const unlisten = listen("tauri://update", (event) => {
      // This will log all updater events, including status updates and errors.
      console.log("check event", event);
    });

    return () => {
      unlisten.then((u) => u());
    };
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
      <CLSImage
        src={imgSrc}
        width={220}
        height={40}
        maxWidth={220}
        maxHeight={40}
      />
      <Box display="flex" alignItems="center" gap={2}>
        <Button variant="contained" onClick={handleClick}>
          Check for Update
        </Button>
        <Typography>testing now 1.1.0 =={">"} 1.1.1</Typography>
        <Button variant="contained" onClick={handleClick2}>
          Check for Update 2
        </Button>
        <Typography>testing now 1.1.0 =={">"} 1.1.1</Typography>
        {/* <Divider
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
        /> */}
      </Box>

      <LanguageSelect />
    </Box>
  );
};

export default PromoSectionTitle;
