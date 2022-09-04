import * as React from "react";
import { observer } from "mobx-react-lite";
import { Box, Container, Typography } from "@mui/material";

interface IEmployeeHistorySection {
  t: any;
}

const EmployeeHistorySection: React.FC<IEmployeeHistorySection> = (props) => {
  const { t } = props;
  return (
    <Container maxWidth={"lg"} sx={{ marginTop: 5 }}>
      <Box sx={{ width: "100%" }}>
        <Typography>{"Employee history section"}</Typography>
      </Box>
    </Container>
  );
};

export default observer(EmployeeHistorySection);
