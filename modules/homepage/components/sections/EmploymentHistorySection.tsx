import * as React from "react";
import { observer } from "mobx-react-lite";
import { Box, Container, Typography } from "@mui/material";
import { IEnploymentDetails, EmploymentDetailCard } from "..";

interface IEmploymentHistorySection {
  t: any;
  isMobile: boolean;
}

const MOCKUP_EMPLOYMENT_DETAIL_LIST: IEnploymentDetails[] = [
  {
    startDate: "2021",
    company: "Mungmee Software Co., Ltd",

    position: "Frontend web developer",
  },
  {
    startDate: "2021",
    company: "Mungmee Software Co., Ltd",

    position: "Frontend web developer",
  },
  {
    startDate: "2021",
    company: "Mungmee Software Co., Ltd",

    position: "Frontend web developer",
  },
  {
    startDate: "2021",
    company: "Mungmee Software Co., Ltd",

    position: "Frontend web developer",
  },
  {
    startDate: "2021",
    company: "Mungmee Software Co., Ltd",

    position: "Frontend web developer",
  },
];

const EmploymentHistorySection: React.FC<IEmploymentHistorySection> = (props) => {
  const { t, isMobile } = props;

  const renderEmploymentDetailList = () => {
    return (
      <Box>
        {MOCKUP_EMPLOYMENT_DETAIL_LIST.map((el: IEnploymentDetails, index: number) => (
          <Box key={index} marginTop={3}>
            <EmploymentDetailCard type={"primary"} cardInfo={el} />
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Container maxWidth={"lg"} sx={{ marginTop: 5 }}>
      <Typography variant={"h1"} textTransform={"uppercase"} align={"center"}>
        {"Employment History"}
      </Typography>
      {renderEmploymentDetailList()}
    </Container>
  );
};

export default observer(EmploymentHistorySection);
