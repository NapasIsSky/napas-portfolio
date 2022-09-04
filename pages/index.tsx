import type { NextPage } from "next";
import { useRouter } from "next/router";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { Box } from "@mui/material";

import { COLORS } from "../constants";
import { NavigationBar } from "../components/global";
import {
  ContactSection,
  EducationSection,
  EmployeeHistorySection,
  ICanSection,
  ProfileSection,
  ProjectsSection,
} from "../modules/homepage/components";

const Home: NextPage = () => {
  const { locale } = useRouter();
  const t = useTranslations("common");

  return (
    <Box
      bgcolor={COLORS.bgLight}
      height={"100%"}
      paddingBottom={5}
      sx={{ overflowY: "auto", overflowX: "hidden" }}
    >
      <NavigationBar />
      <ProfileSection locale={locale} t={t} />
      <ProjectsSection t={t} />
      <ICanSection t={t} />
      <EmployeeHistorySection t={t} />
      <EducationSection t={t} />
      <ContactSection t={t} />
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
