import * as React from "react";
import { Box, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";

import { IBaseComponent } from "../../../../types";
import { COLORS } from "../../../../constants";

export interface IEnploymentDetails {
  startDate: string;
  endDate?: string;
  company: string;
  position: string;
  description?: string;
}

interface IEnploymentDetailCard extends IBaseComponent {
  type: "primary" | "secondary";
  cardInfo: IEnploymentDetails;
}

const EnploymentDetailCard: React.FC<IEnploymentDetailCard> = (props) => {
  const { type, cardInfo } = props;
  return (
    <Box
      border={type === "primary" ? `2px solid ${COLORS.primary}` : `3px solid ${COLORS.secondary}`}
      borderRadius={2}
    >
      <Typography>{`${cardInfo.startDate} - ${cardInfo.startDate}`}</Typography>
      <Typography>{cardInfo.company}</Typography>
      <Typography>{cardInfo.position}</Typography>
    </Box>
  );
};

export default observer(EnploymentDetailCard);
