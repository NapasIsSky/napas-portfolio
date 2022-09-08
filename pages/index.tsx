import type { NextPage } from "next";
import { useRouter } from "next/router";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { Box, useMediaQuery, useTheme } from "@mui/material";

import { COLORS } from "../constants";
import { NavigationBar } from "../components/global";
import {
  ContactSection,
  EducationSection,
  EmploymentHistorySection,
  ICanSection,
  ProfileSection,
  ProjectsSection,
} from "../modules/homepage/components";

const Home: NextPage = () => {
  const { locale } = useRouter();
  const t = useTranslations("common");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <Box
      bgcolor={COLORS.bgLight}
      height={"100%"}
      paddingBottom={5}
      sx={{ overflowY: "auto", overflowX: "hidden" }}
    >
      <NavigationBar />
      <ProfileSection locale={locale} t={t} isMobile={isMobile} />
      <ProjectsSection t={t} isMobile={isMobile} />
      <ICanSection t={t} isMobile={isMobile} />
      <EmploymentHistorySection t={t} isMobile={isMobile} />
      <EducationSection t={t} isMobile={isMobile} />
      <ContactSection t={t} isMobile={isMobile} />
    </Box>
  );
};

export default Home;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../locales/${locale}.json`)).default,
    },
  };
}
