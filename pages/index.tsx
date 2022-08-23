import { Box, Typography } from "@mui/material";
import { pink, lightBlue } from "@mui/material/colors";
import { Container } from "@mui/system";
import type { NextPage } from "next";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

import { NavigationBar } from "../components/global";
import { COLORS } from "../constants";

const Home: NextPage = () => {
  const t = useTranslations("common");

  return (
    <Box bgcolor={COLORS.bgLight} height={"100%"} overflow={"auto"} paddingBottom={5}>
      <NavigationBar />
      <Container maxWidth={"lg"} sx={{ marginTop: 5 }}>
        <Box sx={{ bgcolor: COLORS.bgPrimary, width: "100%", height: 100 }}>
          <Typography>{"Rive animation"}</Typography>
        </Box>
      </Container>
      <Container maxWidth={"lg"} sx={{ marginTop: 5 }}>
        <Box sx={{ bgcolor: pink[200], width: "100%", height: 100 }}>
          <Typography>{"Name"}</Typography>
        </Box>
      </Container>
      <Container maxWidth={"lg"} sx={{ marginTop: 5 }}>
        <Box sx={{ bgcolor: pink[200], width: "100%" }}>
          <Typography>{"Skill section"}</Typography>
        </Box>
      </Container>
      <Box bgcolor={lightBlue[900]} paddingY={5} marginTop={5}>
        <Container maxWidth={"lg"}>
          <Box sx={{ bgcolor: pink[200], width: "100%" }}>
            <Typography>{"Projects section"}</Typography>
          </Box>
        </Container>
      </Box>
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
