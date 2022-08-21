import { Box, Button, Typography } from "@mui/material";
import type { GetStaticPropsContext, NextPage } from "next";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { LocaleSwitcher } from "../components/global";

const Home: NextPage = () => {
  const t = useTranslations("common");

  return (
    <Box>
      <Typography variant={"h1"}>{t("hello-world")}</Typography>
      <LocaleSwitcher />
    </Box>
  );
};

export default Home;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
  // return {
  //   props: {
  //     messages: "",
  //   },
  // };
}
