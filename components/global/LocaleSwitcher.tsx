import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { observer } from "mobx-react-lite";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Language } from "@mui/icons-material";

import { COLORS } from "../../constants";

const A = styled.a`
  display: flex;
  align-items: center;
  position: relative;
`;

const LocaleSwitcher = () => {
  const t = useTranslations("common");
  const { locale, locales, route } = useRouter();
  const otherLocale = locales?.find((cur) => cur !== locale);

  return (
    <Link href={route} locale={otherLocale}>
      <A>
        <Language sx={{ color: COLORS.primary, cursor: "pointer" }} />
        <Typography
          color={COLORS.textPrimary}
          sx={{ fontSize: 10, position: "absolute", right: -6, bottom: -6 }}
        >
          {t("switch-locales")}
        </Typography>
      </A>
    </Link>
  );
};

export default observer(LocaleSwitcher);
