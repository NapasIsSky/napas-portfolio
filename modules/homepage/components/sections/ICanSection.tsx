import * as React from "react";
import { observer } from "mobx-react-lite";
import { Box, Container, Typography } from "@mui/material";

interface IICanSection {
  t: any;
  isMobile: boolean;
}

const ICanSection: React.FC<IICanSection> = (props) => {
  const { t, isMobile } = props;
  return (
    <Container maxWidth={"lg"} sx={{ marginTop: 5 }}>
      <Box sx={{ width: "100%" }}>
        <Typography>{"I can section"}</Typography>
      </Box>
    </Container>
  );
};

export default observer(ICanSection);
