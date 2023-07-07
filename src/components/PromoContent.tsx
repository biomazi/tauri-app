import { Box } from "@mui/material";
import imgSrc from "../assets/Advertising.png";
import CLSImage from "./CLSImage";
import PromoVideo from "./PromoVideo";
import { useRef, useState } from "react";
import useInterval from "./useInterval";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const PromoContent = () => {
  const [isVideoShown, setIsVideoShown] = useState(false);
  const videoRef = useRef<null | HTMLDivElement>(null);
  const imageRef = useRef<null | HTMLDivElement>(null);
  const nodeRef = isVideoShown ? videoRef : imageRef;
  useInterval(() => {
    setIsVideoShown((bool) => !bool);
  }, 30000);

  return (
    <SwitchTransition>
      <CSSTransition
        key={isVideoShown ? "one" : "two"}
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
        classNames="fade-video"
      >
        <Box
          sx={{ position: "relative", height: 608, zIndex: 1000 }}
          ref={nodeRef}
        >
          <Box sx={{ position: "fixed", top: 0, left: 0, overflow: "hidden" }}>
            {isVideoShown ? (
              <PromoVideo />
            ) : (
              <CLSImage src={imgSrc} width={1080} height={608} duration={0} />
            )}
          </Box>
        </Box>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default PromoContent;
