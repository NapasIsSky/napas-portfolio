import { Box } from "@mui/material";
import * as React from "react";
import { COLORS } from "../../../constants";

import { IBaseComponent } from "../../../types";
import Icon from "./Icon";

interface IIconWithFrame extends IBaseComponent {
  src?: string;
  size: "s" | "m" | "l";
  onClick?: () => void;
}

const IconWithFrame: React.FC<IIconWithFrame> = (props) => {
  const { id, src, size, onClick } = props;

  let frameSize: number = 130;
  let iconSize: number = 90;

  if (size === "s") {
    frameSize = 80;
    iconSize = 50;
  } else if (size === "m") {
    frameSize = 92;
    iconSize = 64;
  }

  return (
    <Box
      id={id}
      width={frameSize}
      height={frameSize}
      bgcolor={COLORS.bgPrimary}
      borderRadius={"100%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      onClick={onClick}
    >
      <Icon id={`icon-${id}`} src={src} width={iconSize} height={iconSize} fill={COLORS.white} />
    </Box>
  );
};

export default IconWithFrame;
