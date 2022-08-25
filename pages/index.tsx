import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import { pink, lightBlue } from "@mui/material/colors";
import { Container } from "@mui/system";
import type { NextPage } from "next";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

import { COLORS } from "../constants";
import { NavigationBar } from "../components/global";
import { ProfileSection, ProjectsSection } from "../modules/homepage/components";

const Home: NextPage = () => {
  const { locale } = useRouter();
  const t = useTranslations("common");

  return (
    <Box bgcolor={COLORS.bgLight} height={"100%"} overflow={"auto"} paddingBottom={5}>
      <NavigationBar />

      <ProfileSection locale={locale} />

      <ProjectsSection />
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
      <Box bgcolor={lightBlue[900]} paddingY={5} marginTop={5}>
        <Container maxWidth={"lg"}>
          <Box sx={{ bgcolor: pink[200], width: "100%" }}>
            <Typography>{"Education section"}</Typography>
          </Box>
        </Container>
      </Box>
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
