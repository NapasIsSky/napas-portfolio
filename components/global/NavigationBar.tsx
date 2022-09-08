import { useTranslations } from "next-intl";
import { observer } from "mobx-react-lite";
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import LocaleSwitcher from "./LocaleSwitcher";

import { COLORS } from "../../constants";
import { CurvedButton, TextButton } from "../common";

const NavigationBar = () => {
  const t = useTranslations("common");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <Container
      maxWidth={"lg"}
      sx={{
        paddingTop: 5,
        position: "sticky",
        top: 0,
        zIndex: 3,
      }}
    >
      <Box
        id={"navigation-bar"}
        bgcolor={COLORS.bgLight}
        border={`3px solid ${COLORS.borderPrimary}`}
        borderRadius={100}
        padding={2}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        {/* kiki  อย่าลืมใส่ function*/}
        <TextButton id={"navigation-bar-profile-btn"} title={t("profile")} onClick={() => {}} />

        <TextButton id={"navigation-bar-projects-btn"} title={t("projects")} onClick={() => {}} />

        <TextButton
          id={"navigation-bar-exprerince-btn"}
          title={t("exprerince")}
          onClick={() => {}}
        />
        <TextButton id={"navigation-bar-education-btn"} title={t("education")} onClick={() => {}} />

        <TextButton id={"navigation-bar-contact-btn"} title={t("contact")} onClick={() => {}} />

        <CurvedButton
          id={"print-cv-btn"}
          title={t("print-resume")}
          type={"secodaryOutline"}
          onClick={() => {}}
        />

        <LocaleSwitcher />
      </Box>
    </Container>
  );
};

export default observer(NavigationBar);
