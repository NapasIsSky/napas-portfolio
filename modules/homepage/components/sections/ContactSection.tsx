import * as React from "react";
import { observer } from "mobx-react-lite";
import { Box, Container, Typography } from "@mui/material";
import { LinkedIn, Call, Email, Home } from "@mui/icons-material";

import { COLORS, ICONSIZES } from "../../../../constants";
import { IconWithFrame } from "../../../../components/common";

interface IContactSection {
  t: any;
  isMobile: boolean;
}

const ContactSection: React.FC<IContactSection> = (props) => {
  const { t, isMobile } = props;

  return (
    <Container
      id={"contact-section"}
      maxWidth={"lg"}
      sx={{ marginTop: 5, display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography
        variant={"h1"}
        textTransform={"uppercase"}
        color={COLORS.textBlack}
        textAlign={"center"}
      >
        {t("contact")}
      </Typography>
      <Box
        marginTop={3}
        width={"100%"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-around"}
      >
        <IconWithFrame
          size={"l"}
          type={"primaryOutline"}
          onClick={() => window.open("https://www.linkedin.com/in/napas-kavalee-538a0519a/")}
        >
          <LinkedIn sx={{ fill: COLORS.primary, width: ICONSIZES.l, height: ICONSIZES.l }} />
        </IconWithFrame>

        <IconWithFrame
          size={"l"}
          type={"primaryOutline"}
          onClick={() => {
            if (isMobile) {
              window.open("tel:084 116 4455");
            }
            navigator.clipboard.writeText("084 116 4455");
          }}
        >
          <Call sx={{ fill: COLORS.primary, width: ICONSIZES.l, height: ICONSIZES.l }} />
        </IconWithFrame>

        <IconWithFrame
          size={"l"}
          type={"primaryOutline"}
          onClick={() => navigator.clipboard.writeText("napas.kavalee@gamil.com")}
        >
          <Email sx={{ fill: COLORS.primary, width: ICONSIZES.l, height: ICONSIZES.l }} />
        </IconWithFrame>

        <IconWithFrame
          size={"l"}
          type={"primaryOutline"}
          onClick={() =>
            navigator.clipboard.writeText(
              "7/51 Moo17, Bangna-Trad Rd., Bang Phli Yai, Bang Phli, Samut Prakran 10540",
            )
          }
        >
          <Home sx={{ fill: COLORS.primary, width: ICONSIZES.l, height: ICONSIZES.l }} />
        </IconWithFrame>
      </Box>
    </Container>
  );
};

export default observer(ContactSection);
