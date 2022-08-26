import type { NextPage } from "next";
import { useRouter } from "next/router";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { Box, Typography } from "@mui/material";
import { pink, lightBlue } from "@mui/material/colors";
import { Container } from "@mui/system";

import { COLORS } from "../constants";
import { NavigationBar } from "../components/global";
import { EducationSection, ProfileSection, ProjectsSection } from "../modules/homepage/components";

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
      <Container maxWidth={"lg"} sx={{ marginTop: 5 }}>
        <Box sx={{ bgcolor: pink[200], width: "100%" }}>
          <Typography>{"I can section"}</Typography>
        </Box>
      </Container>
      <Container maxWidth={"lg"} sx={{ marginTop: 5 }}>
        <Box sx={{ bgcolor: pink[200], width: "100%" }}>
          <Typography>{"Employee history section"}</Typography>
        </Box>
      </Container>

      <EducationSection t={t} />

      <Container maxWidth={"lg"} sx={{ marginTop: 5 }}>
        <Box sx={{ bgcolor: pink[200], width: "100%" }}>
          <Typography>{"Contact section"}</Typography>
        </Box>
      </Container>
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
