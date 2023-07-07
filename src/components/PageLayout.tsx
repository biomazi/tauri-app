import { Box } from "@mui/material";
import Cart from "./Cart";
import PromoContent from "./PromoContent";
import OverlayVideo from "./OverlayVideo";
import { useEffect, useRef } from "react";
import useTimeout from "./useTimeout";
import { useAtom } from "jotai";
import { activeModeAtom } from "../state/machine-atoms";

const TIMEOUT_INTERVAL = 60000;

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActiveMode, setIsActiveMode] = useAtom(activeModeAtom);
  const timeoutRef = useRef<null | NodeJS.Timeout>(null);

  const hideActiveMode = () => setIsActiveMode(false);

  const handleActiveMode = () => {
    let timeoutId = timeoutRef.current ?? null;
    if (isActiveMode) {
      if (timeoutId) clearTimeout(timeoutId);
      const id = setTimeout(hideActiveMode, TIMEOUT_INTERVAL);
      timeoutRef.current = id;
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      setIsActiveMode(true);
      const id = setTimeout(hideActiveMode, TIMEOUT_INTERVAL);
      timeoutRef.current = id;
    }
  };

  // useTimeout(hideActiveMode, TIMEOUT_INTERVAL);

  useEffect(() => {
    let contextMenuEvent = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", contextMenuEvent);
    return () => {
      document.removeEventListener("contextmenu", contextMenuEvent);
    };
  }, []);

  useEffect(() => {
    document.body.addEventListener("click", handleActiveMode);
    return () => {
      document.body.removeEventListener("click", handleActiveMode);
    };
  }, [isActiveMode]);

  useEffect(() => {
    handleActiveMode();
  }, []);

  return (
    <Box
      sx={{
        overflow: !isActiveMode ? "hidden" : "inherit",
        height: !isActiveMode ? 1920 : "auto",
      }}
    >
      {!isActiveMode && <OverlayVideo />}
      <Cart />
      <PromoContent />
      <Box sx={{ margin: "16px 0 0 0" }}>{children}</Box>
    </Box>
  );
};

export default PageLayout;
