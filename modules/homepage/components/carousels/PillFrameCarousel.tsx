import * as React from "react";
import { Box, Divider, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material";

import { Carousel, IconWithFrame } from "../../../../components/common";
import { COLORS } from "../../../../constants";
import { Container } from "@mui/system";

export interface IIconInList {
  label: string;
  srcIcon: string;
}

interface IPillFrameCarousel {
  title: string;
  iconList: IIconInList[];
}

const PillFrameCarousel: React.FC<IPillFrameCarousel> = (props) => {
  const { title, iconList } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"));

  const elementList = (): React.ReactNode[] => {
    let list: React.ReactNode[] = [];

    iconList.forEach((el: IIconInList, index: number) =>
      list.push(
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={isMobile ? "flex-end" : "center"}
        >
          <Tooltip key={`icon-${el.label}-${index}`} title={el.label}>
            <IconWithFrame id={`icon-${el.label}`} size={isMobile ? "m" : "l"} src={el.srcIcon} />
          </Tooltip>
        </Box>,
      ),
    );

    return list;
  };

  const renderMobile = () => {
    return (
      <Box>
        <Divider sx={{ color: COLORS.primary }} />
        <Carousel elementList={elementList()} navigation={false} type={"iconList"} />
      </Box>
    );
  };

  const renderDeskTop = () => {
    return (
      <Box>
        <Container>
          <Typography variant={"h2"} color={COLORS.textPrimary} textTransform={"uppercase"}>
            {title}
          </Typography>
        </Container>
        <Container
          maxWidth={"lg"}
          sx={{ border: `2px solid ${COLORS.primary}`, borderRadius: 100, padding: 4 }}
        >
          <Carousel elementList={elementList()} navigation={false} type={"iconList"} />
        </Container>{" "}
      </Box>
    );
  };

  if (isMobile) {
    return renderMobile();
  } else {
    return renderDeskTop();
  }
};

export default PillFrameCarousel;
