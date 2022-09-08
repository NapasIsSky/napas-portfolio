import { Box } from "@mui/material";
import * as React from "react";
import { COLORS, ICONS, ICONSIZES } from "../../../constants";

import { IBaseComponent } from "../../../types";
import Icon from "./Icon";

interface IIconWithFrame extends IBaseComponent, React.PropsWithChildren {
  src?: string;
  size: "s" | "m" | "l";
  type: "primary" | "secondary" | "primaryOutline" | "secodaryOutline";
  onClick?: () => void;
}

const IconWithFrame: React.FunctionComponent<IIconWithFrame> = (props) => {
  const { id, src, size, type, onClick, children } = props;

  // Size
  let frameSize: number = 130;
  let iconSize: number = ICONSIZES.l;

  if (size === "s") {
    frameSize = 80;
    iconSize = ICONSIZES.s;
  } else if (size === "m") {
    frameSize = 92;
    iconSize = ICONSIZES.m;
  }

  // Color
  let frameColor: string = COLORS.bgPrimary;
  let frameBorder: string = "none";
  let iconColor: string = COLORS.white;

  if (type === "secondary") {
    frameColor = COLORS.secondary;
  } else if (type === "primaryOutline") {
    iconColor = COLORS.primary;
    frameColor = COLORS.bgLight;
    frameBorder = `2px solid ${COLORS.primary}`;
  } else if (type === "secodaryOutline") {
    iconColor = COLORS.primary;
    frameColor = COLORS.secondary;
    frameBorder = `2px solid ${COLORS.primary}`;
  }

  const renderIcon = () => {
    return (
      <Icon
        id={`icon-${id}`}
        src={src || ICONS.napasIsSkyFlatIcon}
        width={iconSize}
        height={iconSize}
        fill={iconColor}
      />
    );
  };

  return (
    <Box
      id={id}
      width={frameSize}
      height={frameSize}
      bgcolor={frameColor}
      border={frameBorder}
      borderRadius={"100%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      onClick={onClick}
    >
      {children ? children : renderIcon()}
    </Box>
  );
};

export default IconWithFrame;
