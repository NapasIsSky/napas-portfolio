import * as React from "react";
import { Box, Container, Typography } from "@mui/material";

import { COLORS } from "../../../../constants";
import { IProjectCard } from "../";
import { IconWithFrame } from "../../../../components/common";
import { ProjectCard } from "../cards";
import { ProjectCardCarousel } from "../carousels";
import { observer } from "mobx-react-lite";

interface IProjectsSection {
  t: any;
}

const MOCKUPPROJECTLIST: IProjectCard[] = [
  {
    title: "Mockup project name 1",
    content: <Typography>{"Mockup project detail"}</Typography>,
    actionComponent: (
      <IconWithFrame
        id={"Mock-project-action-btn"}
        type={"primary"}
        size={"m"}
        onClick={() => {}}
      />
    ),
    onClick: () => {},
  },
  {
    title: "Mockup project name 2",
    content: <Typography>{"Mockup project detail"}</Typography>,
    actionComponent: (
      <IconWithFrame
        id={"Mock-project-action-btn"}
        type={"primary"}
        size={"m"}
        onClick={() => {}}
      />
    ),
    onClick: () => {},
  },
  {
    title: "Mockup project name 3",
    content: <Typography>{"Mockup project detail"}</Typography>,
    actionComponent: (
      <IconWithFrame
        id={"Mock-project-action-btn"}
        type={"primary"}
        size={"m"}
        onClick={() => {}}
      />
    ),
    onClick: () => {},
  },
  {
    title: "Mockup project name 4",
    content: <Typography>{"Mockup project detail"}</Typography>,
    actionComponent: (
      <IconWithFrame
        id={"Mock-project-action-btn"}
        type={"primary"}
        size={"m"}
        onClick={() => {}}
      />
    ),
    onClick: () => {},
  },
  {
    title: "Mockup project name 5",
    content: <Typography>{"Mockup project detail"}</Typography>,
    actionComponent: (
      <IconWithFrame
        id={"Mock-project-action-btn"}
        type={"primary"}
        size={"m"}
        onClick={() => {}}
      />
    ),
    onClick: () => {},
  },
];

const ProjectsSection: React.FC<IProjectsSection> = (props) => {
  const { t } = props;

  return (
    <Box id={"projects-section"} bgcolor={COLORS.bgPrimary} paddingY={8} marginTop={8}>
      <Typography
        variant={"h1"}
        textTransform={"uppercase"}
        color={COLORS.textWhite}
        textAlign={"center"}
      >
        {t("projects")}
      </Typography>
      <Container maxWidth={"lg"}>
        <ProjectCardCarousel projectList={MOCKUPPROJECTLIST} />
      </Container>
    </Box>
  );
};

export default observer(ProjectsSection);
