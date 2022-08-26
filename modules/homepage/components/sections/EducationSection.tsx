import * as React from "react";
import { observer } from "mobx-react-lite";
import { Box, Container, Typography } from "@mui/material";

import { COLORS } from "../../../../constants";

interface IEducationSection {
  t: any;
}

const EducationSection: React.FC<IEducationSection> = (props) => {
  const { t } = props;

  return (
    <Box bgcolor={COLORS.bgPrimary} paddingY={5} marginTop={5}>
      <Typography
        variant={"h1"}
        textTransform={"uppercase"}
        color={COLORS.textWhite}
        textAlign={"center"}
      >
        {t("education")}
      </Typography>
    </Box>
  );
};

export default observer(EducationSection);
