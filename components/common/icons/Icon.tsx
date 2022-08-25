import * as React from "react";
import { ReactSVG } from "react-svg";

import { IBaseComponent } from "../../../types";

interface IIcon extends IBaseComponent {
  src: string;
  width: number;
  height: number;
  fill?: string;
  stroke?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Icon: React.FC<IIcon> = (props) => {
  const { id, src, width, height, fill, stroke, onClick, style } = props;

  return (
    <ReactSVG
      id={id}
      src={src}
      beforeInjection={(svg) => {
        let styles = `width:${width}px;height:${height}px;`;
        if (fill) {
          styles += `fill:${fill}`;
        }
        if (stroke) {
          styles += `storke:${stroke}`;
        }
        svg.setAttribute("style", styles);
      }}
      style={{ cursor: onClick ? "pointer" : "default", ...style }}
      onClick={onClick}
    />
  );
};

export default Icon;
