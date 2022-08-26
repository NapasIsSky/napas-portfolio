import * as React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";

import { Carousel } from "../../../../components/common";
import { IProjectCard, ProjectCard } from "..";
import { Container } from "@mui/system";

interface IProjectCardCarousel {
  projectList: IProjectCard[];
}

const ProjectCardCarousel: React.FC<IProjectCardCarousel> = (props) => {
  const { projectList } = props;

  const theme = useTheme();
  const isNotDesktop = useMediaQuery(theme.breakpoints.down("md"));

  const elementList = (): React.ReactNode[] => {
    let list: React.ReactNode[] = [];

    projectList.forEach((el: IProjectCard, index: number) =>
      list.push(
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={isNotDesktop ? "flex-end" : "center"}
        >
          <ProjectCard
            key={`project-card-${index}`}
            id={`project-card-${index}`}
            imgSrc={el.imgSrc}
            title={el.title}
            content={el.content}
            actionComponent={el.actionComponent}
            onClick={el.onClick}
          />
          ,
        </Box>,
      ),
    );

    return list;
  };

  return (
    <Container maxWidth={isNotDesktop ? undefined : "md"} sx={{ marginTop: 3 }}>
      <Carousel
        elementList={elementList()}
        navigation={isNotDesktop ? false : true}
        type={"cardList"}
      />
    </Container>
  );
};

export default ProjectCardCarousel;
