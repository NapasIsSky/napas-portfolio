import * as React from "react";
import { observer } from "mobx-react-lite";
import { Box, Container, Typography } from "@mui/material";
import { LinkedIn, Call, Email, Home } from "@mui/icons-material";

import { COLORS } from "../../../../constants";
import { IconWithFrame } from "../../../../components/common";

interface IContactBtn {
  url: string;
  iconsrc: string | React.ReactNode;
}

interface IContactSection {
  t: any;
}

const MOCKUP_CONTACT_BTN_LIST: IContactBtn[] = [
  {
    url: "www.google.com",
    iconsrc: <LinkedIn sx={{ fill: COLORS.white }} />,
  },
];

const ContactSection: React.FC<IContactSection> = (props) => {
  const { t } = props;

  const contactBtnList = () => {
    <IconWithFrame />;
  };

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
    </Container>
  );
};

export default observer(ContactSection);
