import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { COLORS, ICONS } from "../../../../constants";
import { IBaseComponent } from "../../../../types";

export interface IProjectCard extends IBaseComponent {
  imgSrc?: string;
  title: string;
  content: React.ReactNode;
  actionComponent: React.ReactNode;
  onClick: () => void;
}

const ProjectCard: React.FC<IProjectCard> = (props) => {
  const { id, imgSrc, title, content, actionComponent, onClick } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <Card
      id={id}
      onClick={onClick}
      sx={{ width: isMobile ? 300 : 380, padding: 2, bgcolor: COLORS.bgLight }}
    >
      <CardMedia
        component={"svg"}
        height={270}
        width={"auto"}
        fill={COLORS.white}
        src={imgSrc || ICONS.napasIsSkyFlatIcon}
        sx={{ width: "100%", backgroundColor: COLORS.bgPrimary }}
      />
      <CardContent>
        <Typography>{title}</Typography>
        {content}
      </CardContent>
      <CardActions>{actionComponent}</CardActions>
    </Card>
  );
};

export default ProjectCard;
