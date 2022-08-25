import * as React from "react";
import { useTranslations } from "next-intl";
import { observer } from "mobx-react-lite";
import { Box, Container, Typography } from "@mui/material";

import { COLORS, ICONS } from "../../../../constants";
import { IIconInList, PillFrameCarousel } from "../carousels";

interface IProfileSection {
  locale?: string;
}

const MOCKUPICONLIST: IIconInList[] = [
  {
    label: "mock1",
    srcIcon: ICONS.napasIsSkyFlatIcon,
  },
  {
    label: "mock2",
    srcIcon: ICONS.napasIsSkyFlatIcon,
  },
  {
    label: "mock3",
    srcIcon: ICONS.napasIsSkyFlatIcon,
  },
  {
    label: "mock4",
    srcIcon: ICONS.napasIsSkyFlatIcon,
  },
  {
    label: "mock5",
    srcIcon: ICONS.napasIsSkyFlatIcon,
  },
  {
    label: "mock6",
    srcIcon: ICONS.napasIsSkyFlatIcon,
  },
  {
    label: "mock7",
    srcIcon: ICONS.napasIsSkyFlatIcon,
  },
];

const ProfileSection = (props: IProfileSection) => {
  const { locale } = props;

  const t = useTranslations("common");

  const renderNameAndPosition = () => {
    return (
      <Container maxWidth={"lg"} sx={{ marginTop: 8 }}>
        <Box display={"flex"} flexDirection={locale === "th" ? "row" : "column"}>
          <Typography variant={"h1"} textTransform={"uppercase"}>
            {t("napas")}
          </Typography>
          <Typography
            variant={"h1"}
            textTransform={"uppercase"}
            sx={{ marginTop: locale === "th" ? 0 : -5, marginLeft: locale === "th" ? 2 : 0 }}
          >
            {t("kavalee")}
          </Typography>
        </Box>
        <Typography
          variant={"h4"}
          color={"primary"}
          textTransform={"uppercase"}
          sx={{ marginTop: -3 }}
        >
          {t("position")}
        </Typography>
      </Container>
    );
  };

  const renderSkills = () => {
    return (
      <Box marginTop={8}>
        <Typography
          variant={"h1"}
          textTransform={"uppercase"}
          sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          {t("skills")}
        </Typography>
        <Box paddingTop={3}>
          <PillFrameCarousel title={t("programing-language")} iconList={MOCKUPICONLIST} />
        </Box>
        <Box paddingTop={3}>
          <PillFrameCarousel title={t("framework")} iconList={MOCKUPICONLIST} />
        </Box>
        <Box paddingTop={3}>
          <PillFrameCarousel title={t("UI-library")} iconList={MOCKUPICONLIST} />
        </Box>
      </Box>
    );
  };

  return (
    <Box id={"profile-section"}>
      <Container maxWidth={"lg"} sx={{ marginTop: 8 }}>
        <Box sx={{ bgcolor: COLORS.bgPrimary, width: "100%", height: 660 }}>
          <Typography>{"Rive animation"}</Typography>
        </Box>
      </Container>
      {renderNameAndPosition()}
      {renderSkills()}
    </Box>
  );
};

export default observer(ProfileSection);
