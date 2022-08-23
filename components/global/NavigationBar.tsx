import * as React from "react";
import { useTranslations } from "next-intl";
import { Box, Container, Typography } from "@mui/material";
import LocaleSwitcher from "./LocaleSwitcher";
import { COLORS } from "../../constants";

const NavigationBar = () => {
  const t = useTranslations("common");

  return (
    <Container
      maxWidth={"lg"}
      sx={{
        paddingTop: 5,
        position: "sticky",
        top: 0,
      }}
    >
      <Box
        bgcolor={COLORS.bgLight}
        border={`3px solid ${COLORS.borderPrimary}`}
        borderRadius={100}
        padding={2}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography>{t("hello-world")}</Typography>
        <LocaleSwitcher />
      </Box>
    </Container>
  );
};

export default NavigationBar;
