import Svg, {
  Defs,
  ClipPath,
  Circle,
  Rect,
  Polyline,
  Path,
} from "react-native-svg";

import Line from "../../../../assets/svg/line.svg";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");

const PayLineMask = () => {
  return (
    <>
      <Svg style={{ position: "absolute" }} width="100%" height="100%">
        <ClipPath id="clip_out">
          <Rect width="100%" height="100%" />
          <Rect
            width={width - 80}
            height="60px"
            y={height / 2 - 30}
            x={40}
            rx={4}
            ry={4}
          />
        </ClipPath>

        <Rect
          width="100%"
          height="100%"
          fill="#00000077"
          clipPath="url(#clip_out)"
        />
      </Svg>
      <Line style={{ position: "absolute", top: height / 2 - 50, left: 20 }} />
      <Line
        style={{
          position: "absolute",
          top: height / 2 - 50,
          left: width - 58,
          transform: [{ scaleX: -1 }],
        }}
      />
      <Line
        style={{
          position: "absolute",
          top: height / 2 + 18,
          left: 20,
          transform: [{ scaleY: -1 }],
        }}
      />
      <Line
        style={{
          position: "absolute",
          top: height / 2 + 18,
          left: width - 58,
          transform: [{ scale: -1 }],
        }}
      />
    </>
  );
};

export default PayLineMask;
