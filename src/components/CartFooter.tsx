import CLSImage from "./CLSImage";
import imgSrc from "../assets/cart-footer-image.png";
import { Box, Button } from "@mui/material";
import { useEffect } from "react";
import {
  checkUpdate,
  installUpdate,
  onUpdaterEvent,
} from "@tauri-apps/api/updater";
import { relaunch } from "@tauri-apps/api/process";
import { emit } from "@tauri-apps/api/event";
import { useSnackbar } from "notistack";

const CartFooter = () => {
  const { enqueueSnackbar } = useSnackbar();
  const handleUpdateEvent = async () => {
    await emit("tauri://update");
    enqueueSnackbar("Update event emitted", { variant: "info" });
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
      enqueueSnackbar("Updater event success", { variant: "success" });
      // This will log all updater events, including status updates and errors.
      console.log("Updater event", error, status);
    });

    return () => {
      unlisten.then((u) => u());
    };
  }, []);

  return (
    <Box sx={{ position: "relative", height: "266px" }}>
      <Button
        sx={{ position: "absolute", bottom: "0", left: "0" }}
        variant="contained"
        onClick={handleUpdateEvent}
      >
        Update
      </Button>
      <CLSImage
        src={imgSrc}
        width={266}
        height={266}
        maxWidth={266}
        maxHeight={266}
        duration={0}
      />
    </Box>
  );
};

export default CartFooter;
