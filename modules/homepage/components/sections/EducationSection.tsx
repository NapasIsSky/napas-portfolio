import * as React from "react";
import { observer } from "mobx-react-lite";
import { Box, Typography } from "@mui/material";

import { COLORS } from "../../../../constants";
import { EducationCarouselSelector, IEducationInfo } from "..";

interface IEducationSection {
  t: any;
  isMobile: boolean;
}

const MOCKUP_EDUCATIONLIST: IEducationInfo[] = [
  {
    logo: "",
    degree: "",
    major: "CodeCamp Fullstack Developer #4",
    school: "Software Park Code Camp",
    schoolProvince: "Bangkok",
    schoolCountry: "Thailand",
    startDate: "Oct, 2019",
    endDate: "Jan, 2020",
    gpa: "",
  },
  {
    logo: "",
    degree: "Bachelor of Applied Thai Traditional Medicine",
    major: "Applied Thai Traditional Medicine",
    school: "Mae Fah Luang University",
    schoolProvince: "Changrai",
    schoolCountry: "Thailand",
    startDate: "2013",
    endDate: "2016",
    gpa: "3.20",
  },
];

const EducationSection: React.FC<IEducationSection> = (props) => {
  const { t, isMobile } = props;

  return (
    <Box id={"education-section"} bgcolor={COLORS.bgPrimary} paddingY={5} marginTop={5}>
      <Typography
        variant={"h1"}
        textTransform={"uppercase"}
        color={COLORS.textWhite}
        textAlign={"center"}
      >
        {t("education")}
      </Typography>
      <EducationCarouselSelector educationList={MOCKUP_EDUCATIONLIST} />
    </Box>
  );
};

export default observer(EducationSection);
