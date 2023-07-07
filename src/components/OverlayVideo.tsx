import ReactPlayer from "react-player";
import videoUrl from "../assets/overlay-video.mp4";
import { useAtomValue } from "jotai";
import { activeModeAtom } from "../state/machine-atoms";

const OverlayVideo = () => {
  // const isActiveMode = useAtomValue(activeModeAtom);

  return (
    <ReactPlayer
      url={videoUrl}
      width="100%"
      height="auto"
      playing={true}
      loop={true}
      muted={true}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        lineHeight: 0,
        zIndex: 10000,
      }}
    />
  );
};

export default OverlayVideo;
