import * as React from "react";
import { observer } from "mobx-react-lite";
import { Box, Container } from "@mui/material";

import { Carousel, IconWithFrame } from "../../../../components/common";

export interface IAward {
  name: string;
  province: string;
  country: string;
  date: string;
}
interface IEducationInfo {
  logo: string;
  degree: string;
  school: string;
  schoolProvince: string;
  schoolCountry: string;
  startDate: string;
  endDate: string;
  major: string;
  gpa?: string;
  awards: IAward[];
}

interface IEducationCarouselSelector {
  educationList: IEducationInfo[];
}

const EducationCarouselSelector: React.FC<IEducationCarouselSelector> = (props) => {
  const { educationList } = props;

  const [showEducation, setShowEducation] = React.useState(educationList[0]);

  const elementList = (): React.ReactNode[] => {
    let list: React.ReactNode[] = [];

    educationList.forEach((el: IEducationInfo, index: number) =>
      list.push(<IconWithFrame size={"l"} />),
    );

    return list;
  };

  return (
    <Box>
      <Carousel />
    </Box>
  );
};

export default observer(EducationCarouselSelector);
