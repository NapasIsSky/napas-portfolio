import * as React from "react";
import { useTranslations } from "next-intl";
import { Box, Container, Typography } from "@mui/material";

import { COLORS } from "../../../../constants";

interface IProjectsSection {}

const ProjectsSection: React.FC<IProjectsSection> = (props) => {
  const t = useTranslations("common");

  return (
    <Box bgcolor={COLORS.bgPrimary} paddingY={5} marginTop={8}>
      <Typography
        variant={"h1"}
        textTransform={"uppercase"}
        color={COLORS.textWhite}
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {t("projects")}
      </Typography>
      <Container maxWidth={"lg"}>
        <Box sx={{ width: "100%" }}>
          <Typography>{"Projects section"}</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
