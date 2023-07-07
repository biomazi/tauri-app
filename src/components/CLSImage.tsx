import { FC, useState } from "react";

interface ICLSImage {
  src: string;
  width: number;
  height: number;
  fit?:
    | "cover"
    | "contain"
    | "fill"
    | "scale-down"
    | "none"
    | "initial"
    | "inherit"
    | "revert"
    | "revert-layer"
    | "unset";
  maxWidth?: number;
  maxHeight?: number;
  duration?: number;
}

const CLSImage: FC<ICLSImage> = ({
  src,
  width,
  height,
  fit,
  maxWidth,
  maxHeight,
  duration = 2000,
}) => {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => setLoaded(true);

  return (
    <img
      src={src}
      alt="placeholder"
      width={width ?? "100%"}
      height={height ?? "100%"}
      onLoad={handleLoad}
      style={{
        width: "100%",
        height: "auto",
        maxWidth: maxWidth ?? "100%",
        maxHeight: maxHeight ?? "100%",
        objectFit: fit ?? "cover",
        transitionProperty: "opacity",
        transitionDuration: `${duration * 0.3}ms`,
        transitionTimingFunction: "easing",
        opacity: loaded ? 1 : 0,
        animation: loaded
          ? `materialize ${duration}ms 1 cubic-bezier(0.7, 0, 0.6, 1)`
          : "",
      }}
    />
  );
};

export default CLSImage;
