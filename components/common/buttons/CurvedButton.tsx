import * as React from "react";
import { observer } from "mobx-react-lite";
import { Button } from "@mui/material";

import { COLORS } from "../../../constants";

interface ICurvedButton {
  id: string;
  title: string;
  type: "primary" | "secondary" | "primaryOutline" | "secodaryOutline";
  onClick: () => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const CurvedButton = (props: ICurvedButton) => {
  const { id, title, type, onClick, startIcon, endIcon } = props;

  let variant: "outlined" | "contained" = "contained";
  let color: string = COLORS.white;
  let bgcolor: string = COLORS.bgPrimary;
  let border: string = "";

  if (type === "secondary") {
    bgcolor = COLORS.secondary;
  } else if (type === "primaryOutline") {
    variant = "outlined";
    color = COLORS.primary;
    bgcolor = COLORS.bgLight;
    border = `2px solid ${COLORS.primary}`;
  } else if (type === "secodaryOutline") {
    variant = "outlined";
    color = COLORS.primary;
    bgcolor = COLORS.secondary;
    border = `2px solid ${COLORS.primary}`;
  }

  return (
    <Button
      id={id}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      variant={variant}
      sx={{ borderRadius: 100, boxShadow: "none", bgcolor, color, border }}
    >
      {title}
    </Button>
  );
};

export default observer(CurvedButton);
