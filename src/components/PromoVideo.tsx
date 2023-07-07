import { useAtomValue } from "jotai";
import ReactPlayer from "react-player";
import { activeModeAtom } from "../state/machine-atoms";
import videoUrl from "../assets/promo-video-sound-2.mp4";

const PromoVideo = () => {
  const isActiveMode = useAtomValue(activeModeAtom);
  return (
    <ReactPlayer
      url={videoUrl}
      width="100%"
      height="100%"
      playing={isActiveMode}
      loop={true}
      muted={true}
    />
  );
};

export default PromoVideo;
