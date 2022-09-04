import * as React from "react";
import { observer } from "mobx-react-lite";
import { Box, Container, Paper, Typography } from "@mui/material";

import { Carousel, IconWithFrame } from "../../../../components/common";

export interface IAward {
  name: string;
  province: string;
  country: string;
  date: string;
}
export interface IEducationInfo {
  logo: string;
  degree: string;
  major: string;
  school: string;
  schoolProvince: string;
  schoolCountry: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  awards?: IAward[];
  certificationImg?: string;
}

interface IEducationCarouselSelector {
  educationList: IEducationInfo[];
}

const EducationCarouselSelector: React.FC<IEducationCarouselSelector> = (props) => {
  const { educationList } = props;

  const [showEducation, setShowEducation] = React.useState<IEducationInfo>(educationList[0]);

  const elementList = (): React.ReactNode[] => {
    let list: React.ReactNode[] = [];

    educationList.forEach((el: IEducationInfo, index: number) =>
      list.push(
        <IconWithFrame
          id={`education-logo-${index}`}
          type={el === showEducation ? "secodaryOutline" : "primary"}
          size={"l"}
          src={el.logo}
          onClick={() => setShowEducation(el)}
        />,
      ),
    );

    return list;
  };

  return (
    <Box>
      <Box>
        <Carousel elementList={elementList()} navigation={false} type={"iconList"} />
      </Box>
      <Container>
        <Paper elevation={0} sx={{ borderRadius: 1, padding: 2 }}>
          <Typography>{showEducation.degree}</Typography>
          <Typography>{showEducation.major}</Typography>
          <Typography>{showEducation.school}</Typography>
          <Typography>{`${showEducation.schoolProvince}, ${showEducation.schoolCountry}`}</Typography>
          <Typography>{`${showEducation.startDate} - ${showEducation.endDate}`}</Typography>
          {showEducation.gpa ? <Typography>{`GPA: ${showEducation.gpa}`}</Typography> : null}
        </Paper>
      </Container>
    </Box>
  );
};

export default observer(EducationCarouselSelector);
