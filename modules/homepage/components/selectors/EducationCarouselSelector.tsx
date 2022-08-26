import * as React from "react";
import { observer } from "mobx-react-lite";
import { Box, Container } from "@mui/material";

import { Carousel } from "../../../../components/common";

interface IEducationInfo {
  degreeName: string;
}

interface IEducationCarouselSelector {}

const EducationCarouselSelector: React.FC<IEducationCarouselSelector> = (props) => {
  const {} = props;

  return (
    <Box>
      <Carousel />
    </Box>
  );
};

export default observer(EducationCarouselSelector);
